import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../siteConfig';

const Contact = () => {
  const { contact } = siteConfig;

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
              <div>
                <p className="text-[0.65rem] uppercase font-bold tracking-widest text-outline">Phone Support</p>
                <p className="text-xl font-headline font-bold text-on-surface">{contact.phoneDisplay}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase font-bold tracking-widest text-outline">Clinical Email</p>
                <p className="text-xl font-headline font-bold text-on-surface">{contact.email}</p>
              </div>
            </div>
            <a className="block w-full py-4 bg-tertiary text-on-tertiary rounded-full text-center font-bold tracking-wide hover:opacity-90 transition-all flex items-center justify-center gap-2" href={contact.whatsappUrl}>
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
              <div className="flex justify-between border-b border-primary/10 pb-2">
                <span>Morning</span>
                <span className="text-on-surface">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Evening</span>
                <span className="text-on-surface">3:00 PM – 7:00 PM</span>
              </div>
              <p className="text-[0.7rem] italic mt-4 opacity-70">Closed on Sundays & Public Holidays</p>
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
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  Get Directions
                </button>
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
                <button className="flex items-center gap-2 text-secondary font-bold text-sm hover:underline underline-offset-4">
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
          
          {/* Interactive Elements Placeholder for Map */}
          <div className="absolute inset-0 bg-slate-200">
            <img 
              className="w-full h-full object-cover grayscale opacity-60" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
              alt="Map"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Custom Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span>
              </div>
            </div>
          </div>
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
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Book Appointment
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">forum</span>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;
