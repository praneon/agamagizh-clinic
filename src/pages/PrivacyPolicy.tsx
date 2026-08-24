import type { ReactNode } from 'react';
import { siteConfig } from '../siteConfig';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-headline text-2xl font-bold text-on-surface">{title}</h2>
    <div className="text-on-surface-variant leading-relaxed space-y-4">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  const { contact } = siteConfig;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <header className="mb-16 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-surface-container-low text-primary text-[0.75rem] font-bold tracking-[0.15em] uppercase">
          Legal
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface tracking-tighter leading-[1.1] mb-4">
          Privacy Policy
        </h1>
        <p className="text-on-surface-variant text-sm">Last updated: 24 August 2026</p>
      </header>

      <div className="space-y-12">
        <Section title="1. Who We Are">
          <p>
            This Privacy Policy explains how Agamagizh Naturopathy &amp; Yoga ("Agamagizh", "we", "us", "our"),
            operating our clinic and yoga studio in Kallakurichi, Tamil Nadu, collects, uses, stores, and shares
            personal data of visitors to our website and users of our messaging channels, including WhatsApp.
            This policy is published in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act)
            and applicable rules of India.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following categories of personal data when you interact with us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact details</strong> — name, phone number, email address.</li>
            <li>
              <strong>Health-related information you choose to share</strong> — symptoms, conditions, or goals
              you describe when booking a consultation. You are never required to share more than you are
              comfortable with, and this information is used solely to prepare your appointment.
            </li>
            <li><strong>Appointment details</strong> — session type, preferred date/time, booking status.</li>
            <li>
              <strong>WhatsApp messages</strong> — if you message us on WhatsApp or receive automated messages
              from us (e.g. booking confirmations, reminders), the content and metadata of that conversation is
              processed via the WhatsApp Business Platform, operated by Meta.
            </li>
            <li><strong>Technical data</strong> — standard web analytics (pages visited, device/browser type) via our hosting and analytics providers.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To schedule, confirm, and remind you of appointments.</li>
            <li>To respond to enquiries submitted through our website or WhatsApp.</li>
            <li>To provide clinical staff with the context needed for your consultation.</li>
            <li>To improve our website and services.</li>
            <li>To meet legal, regulatory, and record-keeping obligations.</li>
          </ul>
          <p>We do not sell your personal data, and we do not use your health information for advertising.</p>
        </Section>

        <Section title="4. WhatsApp Messaging">
          <p>
            If you message us on WhatsApp or provide a phone number when booking, we may use the WhatsApp
            Business Platform to send you appointment confirmations, reminders, and responses to your enquiries.
            Messages sent through this channel are processed by Meta Platforms, Inc. in accordance with the{' '}
            <a
              className="text-primary underline underline-offset-4"
              href="https://www.whatsapp.com/legal/business-data-processing-terms"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Business Data Processing Terms
            </a>
            . You can opt out of receiving automated WhatsApp messages from us at any time by replying "STOP" or
            contacting us directly using the details below.
          </p>
        </Section>

        <Section title="5. Sharing of Information">
          <p>
            We share personal data only with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our clinical staff and practitioners, on a need-to-know basis.</li>
            <li>Service providers who help us operate — website hosting, WhatsApp Business Platform (Meta), and messaging infrastructure — bound by their own data-processing terms.</li>
            <li>Authorities, where required by law.</li>
          </ul>
          <p>We do not otherwise sell, rent, or trade your personal data to third parties.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain appointment and enquiry records for as long as necessary to provide our services and to
            meet legal and clinical record-keeping requirements, after which they are securely deleted or
            anonymised.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            Under the DPDP Act, you have the right to access, correct, and request erasure of your personal
            data, and to withdraw consent for future communications. To exercise any of these rights, contact
            us using the details below.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            We use reasonable technical and organisational measures to protect your personal data against
            unauthorised access, alteration, disclosure, or destruction.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected by an
            updated "Last updated" date at the top of this page.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            For any questions about this Privacy Policy or to exercise your data rights, contact us at:
          </p>
          <ul className="list-none space-y-1">
            <li><strong>Email:</strong> {contact.email}</li>
            <li><strong>Phone:</strong> {contact.phoneDisplay}</li>
            <li>
              <strong>Address:</strong> {contact.addressLines[0]} {contact.addressLines[1]} {contact.addressLines[2]}
            </li>
          </ul>
        </Section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
