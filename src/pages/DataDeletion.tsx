import type { ReactNode } from 'react';
import { siteConfig } from '../siteConfig';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-headline text-2xl font-bold text-on-surface">{title}</h2>
    <div className="space-y-4 leading-relaxed text-on-surface-variant">{children}</div>
  </section>
);

const DataDeletion = () => {
  const { contact } = siteConfig;
  const requestUrl = `${contact.whatsappUrl}?text=${encodeURIComponent(
    'Data deletion request: Please tell me how to verify my identity and delete my Agamagizh website and WhatsApp records.'
  )}`;

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-12">
      <header className="mb-16 text-center md:text-left">
        <span className="mb-4 inline-block rounded-full bg-surface-container-low px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-primary">
          Privacy
        </span>
        <h1 className="mb-4 font-headline text-4xl font-bold leading-[1.1] tracking-tighter text-on-surface md:text-6xl">
          Data Deletion Request
        </h1>
        <p className="text-sm text-on-surface-variant">Last updated: 26 August 2026</p>
      </header>

      <div className="space-y-12">
        <Section title="How to Request Deletion">
          <p>
            You may ask Agamagizh Naturopathy &amp; Yoga to delete personal data collected through our
            website, appointment forms, enquiries, Chatwoot inbox, or WhatsApp conversations.
          </p>
          <p>
            Send a WhatsApp message from the same phone number associated with your records and begin the
            message with <strong>“Data deletion request”</strong>. You may also call us at{' '}
            <a className="text-primary underline underline-offset-4" href={`tel:${contact.phoneE164}`}>
              {contact.phoneDisplay}
            </a>.
          </p>
          <a
            className="inline-flex rounded-full bg-primary px-6 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
            href={requestUrl}
            target="_blank"
            rel="noreferrer"
          >
            Start a deletion request
          </a>
        </Section>

        <Section title="Identity Verification">
          <p>
            To protect patients and visitors, we will verify that the requester controls the phone number or
            other contact information associated with the records. Please do not send government identity
            documents, payment-card details, passwords, or medical records through WhatsApp unless we
            specifically provide a secure method and explain why it is required.
          </p>
        </Section>

        <Section title="What We Will Delete">
          <ul className="list-disc space-y-2 pl-6">
            <li>Website appointment and enquiry information associated with the verified requester.</li>
            <li>Chatwoot contacts, conversations, messages, and related metadata controlled by Agamagizh.</li>
            <li>Locally retained WhatsApp-related customer-service records, subject to applicable obligations.</li>
          </ul>
        </Section>

        <Section title="What May Be Retained">
          <p>
            We may retain limited information where required for legal, regulatory, clinical record-keeping,
            security, fraud-prevention, dispute-resolution, or backup-integrity purposes. Data independently
            controlled by Meta or WhatsApp is governed by their policies and account tools; Agamagizh cannot
            delete records that those providers are legally required or independently entitled to retain.
          </p>
        </Section>

        <Section title="Processing Time">
          <p>
            We will acknowledge the request, verify identity, and complete or explain the outcome as soon as
            reasonably practicable, generally within 30 days. We will inform you if applicable law or the
            complexity of the request requires additional time.
          </p>
        </Section>

        <Section title="Contact">
          <ul className="list-none space-y-1">
            <li><strong>Phone and WhatsApp:</strong> {contact.phoneDisplay}</li>
            <li><strong>Address:</strong> {contact.addressLines.join(' ')}</li>
          </ul>
          <p>
            For more information, read our{' '}
            <a className="text-primary underline underline-offset-4" href="/privacy-policy">Privacy Policy</a>.
          </p>
        </Section>
      </div>
    </main>
  );
};

export default DataDeletion;
