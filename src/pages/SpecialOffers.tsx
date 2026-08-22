import React from 'react';
import { motion } from 'motion/react';

const SpecialOffers = () => {
  return (
    <main className="pt-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-[716px] flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Serene spa interior with warm ambient lighting" 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <span className="font-headline font-bold text-xs uppercase tracking-widest">Kallakurichi Exclusive</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tight">
              Exclusive <span className="text-primary">First-Time</span> Offer
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Experience clinical excellence in holistic health. A transformative introduction to naturopathy designed for our Kallakurichi community.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold flex items-center gap-3 shadow-xl hover:translate-y-[-2px] transition-all duration-300" href="#claim">
                Claim Offer Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-outline-variant/20 shadow-sm">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="font-label text-sm font-bold uppercase tracking-wider text-error">Limited Time Offer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Offer Details - Bento Grid Style */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Offer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_40px_rgba(45,51,53,0.06)] border border-outline-variant/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <span className="font-headline font-extrabold text-primary text-2xl">20% OFF</span>
              </div>
            </div>
            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-tertiary font-label font-bold uppercase tracking-[0.2em] text-xs">The Signature Session</span>
                <h2 className="text-4xl font-headline font-bold mt-2">Full Body Oil Massage + <br/><span className="text-primary">Complimentary Steam Bath</span></h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">spa</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Therapeutic Massage</h4>
                    <p className="text-on-surface-variant text-sm mt-1">Deep tissue restoration using customized herbal oils to balance your specific Prakriti.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary">cloud</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Detox Steam</h4>
                    <p className="text-on-surface-variant text-sm mt-1">Vaporized herbal infusion to open pores and eliminate deep-seated toxins.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-on-surface-variant text-sm line-through">Regular Price: ₹2,499</span>
                  <div className="text-3xl font-headline font-extrabold text-on-surface">Only ₹1,999</div>
                </div>
                <div className="bg-error-container/20 text-error px-4 py-2 rounded-lg font-headline font-bold text-sm">
                  Save 15% - 20% Today
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Flyer Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 bg-primary rounded-xl overflow-hidden relative group"
          >
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              alt="Clinical close-up of herbal oils" 
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-8 flex flex-col justify-end">
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-on-primary">Traditional Wisdom Meets Modern Science</h3>
                <p className="text-on-primary/80 text-sm leading-relaxed">Our clinical environment ensures the highest standards of hygiene and practitioner expertise.</p>
                <div className="pt-4">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Female doctor headshot" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
                    <img className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Male doctor headshot" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary">12+</div>
                  </div>
                  <p className="text-on-primary text-[10px] mt-2 font-bold uppercase tracking-widest">Certified Practitioners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-8"
          >
            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-error" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div>
              <h3 className="text-3xl font-headline font-bold text-on-surface">Claim Before It's Gone</h3>
              <p className="text-on-surface-variant mt-1">This special offer for Kallakurichi residents expires in:</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="text-center w-20">
              <div className="text-3xl font-headline font-extrabold text-primary bg-white p-4 rounded-xl shadow-sm">02</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter mt-2 opacity-60">Days</div>
            </div>
            <div className="text-center w-20">
              <div className="text-3xl font-headline font-extrabold text-primary bg-white p-4 rounded-xl shadow-sm">14</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter mt-2 opacity-60">Hours</div>
            </div>
            <div className="text-center w-20">
              <div className="text-3xl font-headline font-extrabold text-primary bg-white p-4 rounded-xl shadow-sm">45</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter mt-2 opacity-60">Mins</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Action Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center" id="claim">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-headline font-extrabold">Ready to start your <span className="text-tertiary">healing journey?</span></h2>
            <p className="text-xl text-on-surface-variant">Step into Agamagizh Clinic. Your sanctuary for holistic wellness awaits in the heart of Kallakurichi.</p>
          </div>
          <div className="bg-white p-1 rounded-full shadow-2xl border border-outline-variant/10 flex flex-col md:flex-row items-center gap-2 max-w-xl mx-auto">
            <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full">
              <span className="material-symbols-outlined text-outline">mail</span>
              <input className="border-none focus:ring-0 w-full text-on-surface font-body p-0" placeholder="Enter your email address" type="email" />
            </div>
            <button className="bg-primary text-on-primary w-full md:w-auto px-10 py-4 rounded-full font-headline font-bold hover:scale-[1.02] transition-transform">
              Claim Offer Now
            </button>
          </div>
          <p className="text-sm text-on-surface-variant flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-sm">verified_user</span>
            No credit card required. A confirmation code will be sent to your email.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default SpecialOffers;
