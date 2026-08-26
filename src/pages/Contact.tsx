import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../siteConfig';
import { submitInquiry, ApiError } from '../lib/api';
import { isBackendConfigured } from '../lib/api';
import { openWhatsApp, whatsappLink } from '../lib/whatsapp';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { contact } = siteConfig;
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', whatsappConsent: false });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim() || !form.whatsappConsent) {
      setStatus('error');
      setErrorMessage('Please complete the required fields and confirm WhatsApp consent.');
      return;
    }

    if (!isBackendConfigured) {
      openWhatsApp([
        'Hello Agamagizh, I would like to make an enquiry.',
        `Name: ${form.name.trim()}`,
        `Phone: ${form.phone.trim()}`,
        form.email.trim() ? `Email: ${form.email.trim()}` : '',
        `Message: ${form.message.trim()}`,
      ].filter(Boolean).join('\n'));
      return;
    }

    setStatus('submitting');
    try {
      await submitInquiry(form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '', whatsappConsent: false });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 rounded-full bg-surface-container-low text-primary text-[0.75rem] font-bold tracking-[0.15em] uppercase"
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-[1.1] mb-6"
        >
          Begin Your Journey to <br/>
          <span className="text-primary italic font-medium">Holistic Vitality</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-on-surface-variant text-lg max-w-2xl leading-relaxed"
        >
          Our clinical sanctuary is designed for space, serenity, and science. Reach out to our specialists to tailor a naturopathic path unique to your biology.
        </motion.p>
      </header>

      {/* Bento Grid Style Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* Primary Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 space-y-6"
        >
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] group hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] uppercase font-bold tracking-widest text-outline">Phone Support</p>
                <a className="font-headline text-xl font-bold text-on-surface hover:text-primary" href={`tel:${contact.phoneE164}`}>
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
            {contact.email && <div className="mb-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] uppercase font-bold tracking-widest text-outline">Clinical Email</p>
                <a className="block whitespace-nowrap font-headline text-[0.72rem] font-bold leading-snug tracking-tight text-on-surface hover:text-primary sm:text-sm" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>}
            <a className="block w-full py-4 bg-tertiary text-on-tertiary rounded-full text-center font-bold tracking-wide hover:opacity-90 transition-all flex items-center justify-center gap-2" href={whatsappLink('Hello Agamagizh, I would like to know more about your treatments.')} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <h3 className="font-headline font-bold text-on-surface">Clinical Hours</h3>
            </div>
            <div className="space-y-3 text-on-surface-variant font-medium">
              <div className="flex justify-between gap-4 border-b border-primary/10 pb-2">
                <span>Monday – Sunday</span>
                <span className="whitespace-nowrap text-on-surface">9:00 AM – 7:00 PM</span>
              </div>
              <p className="mt-4 text-[0.7rem] italic opacity-70">Appointments are recommended before visiting.</p>
            </div>
          </div>
        </motion.div>

        {/* Location Cards */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Main Clinic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden bg-white rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] flex flex-col group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Main Clinic"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Main Sanctuary</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">Main Clinic</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {contact.clinicAddressLines[0]}<br/>
                {contact.clinicAddressLines[1]}
              </p>
              <div className="mt-auto">
                <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Yoga Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden bg-white rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] flex flex-col group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop"
                alt="Yoga Studio"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="bg-secondary-container text-secondary text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Wellness Hub</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">Yoga Studio</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                {contact.yogaStudioAddressLines[0]}<br/>
                {contact.yogaStudioAddressLines[1]}
              </p>
              <div className="mt-auto">
                <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary font-bold text-sm hover:underline underline-offset-4">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_40px_rgba(45,51,53,0.06)] max-w-3xl mx-auto"
      >
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-2 text-center">Send Us a Message</h2>
        <p className="text-on-surface-variant text-center mb-8">
          We'll get back to you on WhatsApp or by phone.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-outline uppercase tracking-wider">Full Name</label>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                placeholder="Jane Doe"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-outline uppercase tracking-wider">Phone (WhatsApp)</label>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                placeholder="+91 00000 00000"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">Email (optional)</label>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
              placeholder="jane@example.com"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-on-surface-variant">
            <input
              className="mt-1 rounded border-outline text-primary focus:ring-primary"
              type="checkbox"
              checked={form.whatsappConsent}
              onChange={(event) => setForm((prev) => ({ ...prev, whatsappConsent: event.target.checked }))}
              required
            />
            <span>
              I agree to receive replies about this enquiry by WhatsApp. I can opt out at any time by replying STOP.
            </span>
          </label>
          <div className="space-y-2">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">Message</label>
            <textarea
              className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
              placeholder="How can we help?"
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-tertiary text-on-tertiary py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all disabled:opacity-60"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-center text-primary font-bold">
              Thanks! We'll reach out on WhatsApp shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-center text-error font-bold">{errorMessage}</p>
          )}
          <p className="text-[10px] text-center text-outline-variant">
            By submitting, you agree to our{' '}
            <a href="/privacy-policy" className="underline">Privacy Policy</a> and consent to receive replies
            via WhatsApp.
          </p>
        </form>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-surface-container-low group">
          {/* Overlay Label */}
          <div className="absolute top-6 left-6 z-10 backdrop-blur-md bg-white/70 px-6 py-4 rounded-xl border border-white/40 shadow-xl">
            <p className="font-headline font-bold text-on-surface">Kallakurichi Clinical Precinct</p>
            <p className="text-xs text-on-surface-variant">Find us in the heart of the city</p>
          </div>
          
          <iframe className="absolute inset-0 h-full w-full border-0" src={contact.mapsEmbedUrl} title="Agamagizh clinic on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </motion.section>

      {/* Final CTA Area */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-on-surface rounded-xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Abstract Element Circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-tertiary/10 blur-[80px]"></div>
        
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
            Ready to transform your lifestyle?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Consultations are by appointment only. Secure your slot today to speak with our certified practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/book-appointment" className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Book Appointment
            </Link>
            <a href={whatsappLink('Hello Agamagizh, I would like to speak with your care team.')} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">forum</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
