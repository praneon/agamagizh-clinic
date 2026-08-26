import { Router } from 'express';

const router = Router();

// Real Chatwoot agent presence — not something the public widget SDK
// exposes to the parent page, so the chat panel calls this instead of
// guessing/hardcoding an "away" state.
router.get('/', async (_req, res) => {
  try {
    const online = await isAnyAgentOnline();
    res.json({ online });
  } catch (err) {
    console.error('[status] check failed:', err.message);
    res.json({ online: false });
  }
});

async function isAnyAgentOnline() {
  const base = process.env.CHATWOOT_BASE_URL;
  const account = process.env.CHATWOOT_ACCOUNT_ID;
  const token = process.env.CHATWOOT_API_ACCESS_TOKEN;
  if (!base || !account || !token) return false;

  const response = await fetch(`${base}/api/v1/accounts/${account}/agents`, {
    headers: { api_access_token: token },
  });
  if (!response.ok) return false;

  const agents = await response.json();
  return Array.isArray(agents) && agents.some((agent) => agent.availability_status === 'online');
}

export default router;
