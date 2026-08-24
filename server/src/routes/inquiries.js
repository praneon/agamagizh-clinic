import { Router } from 'express';
import { sendWhatsAppTemplate } from '../chatwoot.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, phone, email, message } = req.body ?? {};

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, phone, and message are required.' });
  }

  try {
    await sendWhatsAppTemplate({
      name: name.trim(),
      phone: phone.trim(),
      templateName: process.env.TEMPLATE_INQUIRY_ACK,
      bodyParams: { '1': name.trim() },
      fallbackText: `New website inquiry from ${name} (${email ?? 'no email'}): ${message}`,
    });
  } catch (err) {
    console.error('[inquiries] Chatwoot send failed:', err.message);
  }

  res.status(201).json({ id: 'ok' });
});

export default router;
