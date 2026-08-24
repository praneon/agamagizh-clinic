# Agamagizh ↔ Chatwoot Bridge

A thin, stateless Express proxy between the clinic website's forms and the
self-hosted Chatwoot instance at `admin.agamagizhnaturecure.com`. It holds no
database — Chatwoot is the system of record for contacts, conversations, and
messages. This replaces talking to Meta's Graph API directly: **Chatwoot owns
the WhatsApp Cloud API connection**, the webhook, and gives staff an actual
inbox to reply from.

## What it does

- `POST /api/appointments`, `POST /api/inquiries` — same request shape the
  frontend already calls (see `src/lib/api.ts` in the repo root). Each finds
  or creates a Chatwoot contact by phone, opens a conversation on the
  WhatsApp inbox, and sends an approved template message.
- Nothing else. No SQLite, no webhook receiver, no cron — all of that is
  Chatwoot's job now.

The exact API sequence (contact → contact_inbox → conversation → templated
message) was verified against Chatwoot's own source in `contact_inbox_builder.rb`,
`conversations_controller.rb`, and `whatsapp/send_on_whatsapp_service.rb` —
not guessed from docs.

## 1. Prerequisites this still needs from Meta (unchanged from before)

Chatwoot doesn't remove the need for a working WhatsApp Business Platform
connection — it just becomes where that connection lives:

1. Meta Business Manager account, **business-verified**.
2. A Meta Developer app with the WhatsApp product, and a phone number
   registered to it (not active on a regular WhatsApp app).
3. Message templates created and **approved** in Meta Business Manager:
   `appointment_confirmation`, `appointment_reminder`, `inquiry_acknowledgement`
   (or whatever names you choose — just keep the `.env` below in sync).

## 2. Create the WhatsApp inbox in Chatwoot

In `https://admin.agamagizhnaturecure.com` (already live):

1. Settings → Inboxes → Add Inbox → WhatsApp.
2. Enter the **Phone Number ID**, **Business Account ID**, and **Access
   Token** from your Meta app's WhatsApp → API Setup page.
3. Chatwoot will show you its own **webhook callback URL** — paste that into
   Meta's WhatsApp → Configuration → Webhook, with a verify token of your
   choosing. Subscribe to the `messages` field.
4. Note the inbox's numeric ID from the URL
   (`.../settings/inboxes/<id>/...`) → `CHATWOOT_WHATSAPP_INBOX_ID`.
5. Once Meta approves your templates, Settings → Inboxes → (this inbox) →
   should list them for the account.

## 3. Get an API access token

Log in as an agent/admin on the Agamagizh account → click your avatar →
Profile Settings → scroll to **Access Token** → copy it. This acts as that
user across the whole account, so treat it like a password (a dedicated
"bot" agent user is worth creating later instead of reusing a real staff
member's token).

## 4. Configure and run

```bash
cp .env.example .env   # fill in CHATWOOT_API_ACCESS_TOKEN, CHATWOOT_WHATSAPP_INBOX_ID
npm install
npm start
```

Or as a container, joined to the same Docker network Chatwoot and Caddy
already share on the VPS (`backend_public_net`), so Caddy can reach it by
container name without exposing a host port:

```bash
docker build -t agamagizh-bridge:production .
docker run -d --name agamagizh-bridge \
  --network backend_public_net \
  --env-file .env \
  --restart unless-stopped \
  agamagizh-bridge:production
```

## 5. Expose it at api.agamagizhnaturecure.com

Add a DNS A record for `api.agamagizhnaturecure.com` → `68.233.104.247`
(same as `admin.agamagizhnaturecure.com`), then add this block to
`/opt/hoxiq/backend/deploy/oracle/Caddyfile` on the VPS (that file already
serves other unrelated services — the existing `admin.agamagizhnaturecure.com`
block is right above where this should go):

```caddyfile
api.agamagizhnaturecure.com {
	tls {
		issuer acme {
			disable_http_challenge
		}
	}

	encode zstd gzip

	header {
		X-Content-Type-Options "nosniff"
		X-Frame-Options "SAMEORIGIN"
		Referrer-Policy "strict-origin-when-cross-origin"
	}

	reverse_proxy agamagizh-bridge:8080
}
```

Then reload Caddy: `docker exec backend-caddy-1 caddy reload --config /etc/caddy/Caddyfile`.

## 6. Point the frontend at it

In the site's root `.env`:

```
VITE_API_BASE_URL=https://api.agamagizhnaturecure.com
```

Redeploy the frontend (Vercel). Until this is set, the forms show a
"not configured yet, message us on WhatsApp instead" error rather than
failing silently.

## Known gap: appointment reminders

The intake form only collects name/age/phone/concern — no appointment
date/time (the booking calendar on that page is still decorative, not
wired to real availability). So there is currently no automated reminder:
that needs an actual scheduling flow (a real date picker, and something —
staff action or a Chatwoot conversation custom attribute — that records the
confirmed slot) before a reminder job has anything to read. Worth revisiting
once real scheduling exists; Chatwoot's own **Campaigns** feature could
also drive one-off manual reminder sends in the meantime.
