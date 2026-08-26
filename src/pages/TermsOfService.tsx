import type { ReactNode } from 'react';
import { siteConfig } from '../siteConfig';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-headline text-2xl font-bold text-on-surface">{title}</h2>
    <div className="text-on-surface-variant leading-relaxed space-y-4">{children}</div>
  </section>
);

const TermsOfService = () => {
  const { contact } = siteConfig;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <header className="mb-16 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-surface-container-low text-primary text-[0.75rem] font-bold tracking-[0.15em] uppercase">
          Legal
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface tracking-tighter leading-[1.1] mb-4">
          Terms of Service
        </h1>
        <p className="text-on-surface-variant text-sm">Last updated: 26 August 2026</p>
      </header>

      <div className="space-y-12">
        <Section title="1. Acceptance of Terms">
          <p>
            By using this website, booking an appointment, or messaging Agamagizh Naturopathy &amp; Yoga
            ("Agamagizh", "we", "us") on WhatsApp or any other channel, you agree to these Terms of Service.
          </p>
        </Section>

        <Section title="2. Our Services">
          <p>
            Agamagizh provides naturopathic clinical consultations and yoga sessions at our facilities in
            Kallakurichi, Tamil Nadu. Content on this website is for general informational purposes and does
            not replace individualised medical advice from a qualified practitioner.
          </p>
        </Section>

        <Section title="3. Appointments and Bookings">
          <ul className="list-disc pl-6 space-y-2">
            <li>Submitting a booking request does not guarantee a confirmed slot; our team will confirm availability.</li>
            <li>We may contact you by phone, email, or WhatsApp to confirm, reschedule, or remind you of an appointment.</li>
            <li>Please provide accurate contact and health information so we can prepare appropriately for your consultation.</li>
            <li>Cancellations should be communicated as early as possible so the slot can be offered to another patient.</li>
          </ul>
        </Section>

        <Section title="4. Communicating With Us on WhatsApp">
          <p>
            If you message us on WhatsApp, or provide your number when booking, you consent to receiving
            service-related messages from us over WhatsApp (such as confirmations and reminders), subject to our{' '}
            <a className="text-primary underline underline-offset-4" href="/privacy-policy">Privacy Policy</a>.
            Messages are sent via the WhatsApp Business Platform and are subject to{' '}
            <a
              className="text-primary underline underline-offset-4"
              href="https://www.whatsapp.com/legal/business-terms"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp's own Business Terms
            </a>
            . You can opt out at any time by replying "STOP" or contacting us directly.
          </p>
        </Section>

        <Section title="5. No Medical Emergency Service">
          <p>
            Our website, WhatsApp channel, and booking forms are not monitored continuously and must not be
            used for medical emergencies. In an emergency, please contact your nearest hospital or emergency
            services immediately.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this website — text, images, logos, and design — is the property of Agamagizh or
            its licensors and may not be reproduced without prior written permission.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            To the extent permitted by law, Agamagizh is not liable for indirect or consequential loss arising
            from use of this website or our messaging channels, including delays or failures in message
            delivery caused by third-party platforms such as WhatsApp.
          </p>
        </Section>

        <Section title="8. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of our website or messaging channels
            after changes are posted constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by the laws of India, and any disputes shall be subject to the
            jurisdiction of the courts of Tamil Nadu.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <ul className="list-none space-y-1">
            {contact.email && <li><strong>Email:</strong> {contact.email}</li>}
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

export default TermsOfService;
