import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import appointmentsRouter from './routes/appointments.js';
import inquiriesRouter from './routes/inquiries.js';

const app = express();
const allowedOrigins = (process.env.CORS_ORIGIN ?? '').split(',').map((o) => o.trim()).filter(Boolean);

app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/appointments', appointmentsRouter);
app.use('/api/inquiries', inquiriesRouter);

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.log(`Agamagizh <-> Chatwoot bridge listening on port ${port}`);
});
