import React, { useState } from 'react';
import { motion } from 'motion/react';
import { submitAppointment, ApiError } from '../lib/api';
import { isBackendConfigured } from '../lib/api';
import { openChatPanel } from '../lib/chatPanel';
import { openWhatsApp, whatsappLink } from '../lib/whatsapp';

const consultationTimes = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
] as const;

const today = new Date();
const minimumBookingDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    concern: '',
    consultationMode: 'online' as 'online' | 'clinic',
    preferredDate: '',
    preferredTime: '',
    whatsappConsent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.preferredDate || !form.preferredTime || !form.whatsappConsent) {
      setStatus('error');
      setErrorMessage('Please provide your details, preferred slot, and confirm WhatsApp consent.');
      return;
    }

    if (new Date(`${form.preferredDate}T12:00:00`).getDay() === 0) {
      setStatus('error');
      setErrorMessage('The clinic is closed on Sundays. Please choose Monday through Saturday.');
      return;
    }

    if (!isBackendConfigured) {
      if (form.consultationMode === 'online') {
        openChatPanel('general', {
          appointment_type: 'Online video consultation',
          preferred_date: form.preferredDate,
          preferred_time: form.preferredTime,
          booking_name: form.name.trim(),
          booking_phone: form.phone.trim(),
          booking_concern: form.concern.trim() || 'Not provided',
        });
        setStatus('success');
        return;
      }

      openWhatsApp([
        'Hello Agamagizh, I would like to request an appointment.',
        'Appointment type: Clinic visit',
        `Preferred date: ${form.preferredDate}`,
        `Preferred time: ${form.preferredTime}`,
        `Name: ${form.name.trim()}`,
        form.age.trim() ? `Age: ${form.age.trim()}` : '',
        `Phone: ${form.phone.trim()}`,
        form.concern.trim() ? `Health concern: ${form.concern.trim()}` : '',
      ].filter(Boolean).join('\n'));
      return;
    }

    setStatus('submitting');
    try {
      await submitAppointment(form);
      setStatus('success');
      setForm({
        name: '', age: '', phone: '', concern: '', consultationMode: 'online',
        preferredDate: '', preferredTime: '', whatsappConsent: false,
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[409px] flex items-center justify-center overflow-hidden px-8 bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
          <img 
            className="w-full h-full object-cover opacity-10" 
            alt="serene morning yoga studio" 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-[0.05em] mb-6"
          >
            Begin Your <span className="text-primary italic">Healing</span> Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience the synergy of clinical naturopathy and ancient yoga practices in a sanctuary designed for your restoration.
          </motion.p>
        </div>
      </section>

      {/* Booking System Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: appointment type and preferred slot */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 bg-secondary-container text-secondary rounded-xl">
                <span className="material-symbols-outlined">video_camera_front</span>
              </span>
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">Choose Your Consultation</h2>
                <p className="text-sm text-on-surface-variant">Request a suitable date and time</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-[0_20px_40px_rgba(45,51,53,0.06)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {([
                  ['online', 'video_camera_front', 'Online Consultation', 'Video call inside Agamagizh chat'],
                  ['clinic', 'local_hospital', 'Clinic Visit', 'Visit us in Kallakurichi'],
                ] as const).map(([value, icon, label, description]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, consultationMode: value }))}
                    className={`rounded-xl border p-5 text-left transition-all ${form.consultationMode === value ? 'border-primary bg-white shadow-lg shadow-primary/10' : 'border-transparent bg-white/50 hover:border-primary/20'}`}
                    aria-pressed={form.consultationMode === value}
                  >
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">{icon}</span>
                    <span className="mt-3 block font-headline font-bold">{label}</span>
                    <span className="mt-1 block text-xs text-on-surface-variant">{description}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="preferred-date" className="text-xs uppercase tracking-[0.1em] font-bold text-outline">Preferred date</label>
                  <input
                    id="preferred-date"
                    type="date"
                    min={minimumBookingDate}
                    value={form.preferredDate}
                    onChange={handleChange('preferredDate')}
                    className="w-full rounded-lg border-none bg-white p-4 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferred-time" className="text-xs uppercase tracking-[0.1em] font-bold text-outline">Preferred time</label>
                  <select
                    id="preferred-time"
                    value={form.preferredTime}
                    onChange={(event) => setForm((prev) => ({ ...prev, preferredTime: event.target.value }))}
                    className="w-full rounded-lg border-none bg-white p-4 focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">Select a time</option>
                    {consultationTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                  </select>
                </div>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-on-surface-variant">
                This is a preferred slot request. Our team will confirm availability. The clinic is closed on Sundays and public holidays.
              </p>
              {form.consultationMode === 'online' && (
                <div className="mt-5 flex gap-3 rounded-xl bg-primary/5 p-4 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">lock</span>
                  <p>Your confirmed consultation will use the built-in video-call invitation inside Agamagizh chat—no Google Meet needed.</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Clinical Consultation (Intake form) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 bg-tertiary-container text-tertiary rounded-xl">
                <span className="material-symbols-outlined">medical_services</span>
              </span>
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">Clinical Consultation</h2>
                <p className="text-sm text-on-surface-variant">Expert Naturopathic Assessment</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-[0_20px_40px_rgba(45,51,53,0.06)] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                    placeholder="John Doe"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">Age</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                    placeholder="25"
                    type="number"
                    value={form.age}
                    onChange={handleChange('age')}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider">Health Condition / Concerns</label>
                <textarea
                  className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                  placeholder="Describe your primary symptoms or goals..."
                  rows={3}
                  value={form.concern}
                  onChange={handleChange('concern')}
                ></textarea>
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
                  I agree to receive appointment confirmations and reminders by WhatsApp. I can opt out at any time by replying STOP.
                </span>
              </label>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider">Contact Number</label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all"
                  placeholder="+91 00000 00000"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  required
                />
              </div>
              <button
                className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-dim transition-all shadow-lg shadow-primary/25 disabled:opacity-60"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Request Appointment'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-center text-primary font-bold">
                  {form.consultationMode === 'online'
                    ? 'Continue in the Agamagizh chat panel to start your booking conversation. We will confirm the slot there.'
                    : "Request received! We'll confirm your slot on WhatsApp shortly."}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center text-error font-bold">{errorMessage}</p>
              )}
              <p className="text-[10px] text-center text-outline-variant uppercase tracking-widest">Our clinical team will confirm within 24 hours</p>
              <p className="text-[10px] text-center text-outline-variant">
                By submitting, you agree to our{' '}
                <a href="/privacy-policy" className="underline">Privacy Policy</a> and consent to receive
                appointment updates via WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="bg-surface-container-low py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-8 text-center space-y-8"
        >
          <h3 className="font-headline text-3xl font-bold text-on-surface">Need Immediate Assistance?</h3>
          <p className="text-on-surface-variant font-light">Speak directly with our care coordinators for urgent bookings or special clinical inquiries.</p>
          <a className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-[#25D366]/20" href={whatsappLink('Hello Agamagizh, I need help booking an appointment.')} target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Message on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Trust Elements Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface">Certified Doctors</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Our practitioners hold premium clinical degrees in Naturopathy and Yogic Sciences from recognized institutions.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface">Safe Care</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Non-invasive, drug-less therapies that respect your body's natural rhythms and innate healing capacity.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-4xl">person_pin</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-on-surface">Personalized Plans</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">No generic prescriptions. Every diet, yoga sequence, and therapy is tailored to your unique bio-profile.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BookAppointment;
