// Thin client for the Chatwoot Application API. Flow verified against the
// actual Chatwoot source (contact_inbox_builder.rb, conversations_controller.rb,
// message_builder.rb, whatsapp/send_on_whatsapp_service.rb):
//
//   1. Find-or-create a contact by phone number on the WhatsApp inbox.
//   2. Create a "contact inbox" for that contact on the inbox — for WhatsApp,
//      Chatwoot derives source_id from the phone number automatically.
//   3. Create a conversation using that source_id.
//   4. Post a message with `template_params` — Chatwoot sends this as an
//      approved WhatsApp template automatically, since a brand-new
//      conversation is always outside the 24h customer-service window.

const BASE_URL = process.env.CHATWOOT_BASE_URL;
const ACCOUNT_ID = process.env.CHATWOOT_ACCOUNT_ID;
const TOKEN = process.env.CHATWOOT_API_ACCESS_TOKEN;
const INBOX_ID = process.env.CHATWOOT_WHATSAPP_INBOX_ID;

async function api(path, options = {}) {
  if (!BASE_URL || !ACCOUNT_ID || !TOKEN) {
    throw new Error('Chatwoot is not configured (CHATWOOT_BASE_URL / CHATWOOT_ACCOUNT_ID / CHATWOOT_API_ACCESS_TOKEN missing).');
  }

  const res = await fetch(`${BASE_URL}/api/v1/accounts/${ACCOUNT_ID}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      api_access_token: TOKEN,
      ...options.headers,
    },
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`[chatwoot] ${options.method ?? 'GET'} ${path} -> ${res.status}`, data);
    throw new Error(data?.message ?? `Chatwoot API error (${res.status})`);
  }
  return data;
}

function toE164(phone) {
  const digits = phone.replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return digits;
  if (digits.length === 10) return `+91${digits}`;
  return `+${digits}`;
}

// Returns { contactId, sourceId } — sourceId is what identifies this
// contact on the WhatsApp inbox specifically (derived from phone number).
async function resolveContactAndSource({ name, phone }) {
  const e164 = toE164(phone);

  const search = await api(`/contacts/search?q=${encodeURIComponent(e164)}&include_contact_inboxes=true`);
  const existing = search?.payload?.find((c) => c.phone_number === e164);

  if (existing) {
    const existingInbox = existing.contact_inboxes?.find((ci) => String(ci.inbox?.id) === String(INBOX_ID));
    if (existingInbox) return { contactId: existing.id, sourceId: existingInbox.source_id };

    // Contact exists but has never been linked to this inbox — link it now.
    const linked = await api(`/contacts/${existing.id}/contact_inboxes`, {
      method: 'POST',
      body: JSON.stringify({ inbox_id: INBOX_ID }),
    });
    return { contactId: existing.id, sourceId: linked.source_id };
  }

  const created = await api('/contacts', {
    method: 'POST',
    body: JSON.stringify({ name, phone_number: e164, inbox_id: INBOX_ID }),
  });
  return { contactId: created.payload.contact.id, sourceId: created.payload.contact_inbox.source_id };
}

async function createConversation({ contactId, sourceId }) {
  const conversation = await api('/conversations', {
    method: 'POST',
    body: JSON.stringify({
      source_id: sourceId,
      inbox_id: INBOX_ID,
      contact_id: contactId,
      status: 'open',
    }),
  });
  return conversation.id;
}

async function sendTemplateMessage({ conversationId, templateName, bodyParams, fallbackText }) {
  if (!templateName) {
    console.warn('[chatwoot] No template name configured — skipping WhatsApp send, conversation still created.');
    return null;
  }

  return api(`/conversations/${conversationId}/messages`, {
    method: 'POST',
    body: JSON.stringify({
      content: fallbackText,
      message_type: 'outgoing',
      template_params: {
        name: templateName,
        category: 'UTILITY',
        language: process.env.TEMPLATE_LANGUAGE ?? 'en',
        processed_params: { body: bodyParams },
      },
    }),
  });
}

/**
 * Creates (or reuses) a WhatsApp conversation with `name`/`phone`, and sends
 * an approved template message with the given body variables (Meta template
 * {{1}}, {{2}}... in order, keyed "1", "2", ... here).
 */
export async function sendWhatsAppTemplate({ name, phone, templateName, bodyParams, fallbackText }) {
  if (!INBOX_ID) {
    console.warn('[chatwoot] CHATWOOT_WHATSAPP_INBOX_ID not set — no WhatsApp inbox configured yet, skipping send.');
    return null;
  }

  const { contactId, sourceId } = await resolveContactAndSource({ name, phone });
  const conversationId = await createConversation({ contactId, sourceId });
  return sendTemplateMessage({ conversationId, templateName, bodyParams, fallbackText });
}
