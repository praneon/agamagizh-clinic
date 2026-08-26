import { Router } from 'express';
import { sendWhatsAppTemplate } from '../chatwoot.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, age, phone, concern, sessionLabel, whatsappConsent } = req.body ?? {};

  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Name and phone number are required.' });
  }

  if (whatsappConsent !== true) {
    return res.status(400).json({ error: 'WhatsApp consent is required.' });
  }

  try {
    await sendWhatsAppTemplate({
      name: name.trim(),
      phone: phone.trim(),
      templateName: process.env.TEMPLATE_APPOINTMENT_CONFIRMATION,
      bodyParams: { '1': name.trim() },
      fallbackText: `New appointment request from ${name}. Age: ${age ?? '-'}. Concern: ${concern ?? '-'}. Session: ${sessionLabel ?? '-'}. WhatsApp consent: yes (${new Date().toISOString()}, website appointment form).`,
    });
  } catch (err) {
    // Chatwoot conversation/message failures shouldn't block the booking —
    // it's still recorded as a conversation in Chatwoot if contact creation
    // succeeded, and staff can always reply manually.
    console.error('[appointments] Chatwoot send failed:', err.message);
  }

  res.status(201).json({ id: 'ok' });
});

export default router;
