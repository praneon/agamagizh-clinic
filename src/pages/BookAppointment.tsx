import React from 'react';
import { motion } from 'motion/react';

const BookAppointment = () => {
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
          {/* Left: Yoga Spots (Calendar interface) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 bg-secondary-container text-secondary rounded-xl">
                <span className="material-symbols-outlined">self_improvement</span>
              </span>
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">Yoga Spots</h2>
                <p className="text-sm text-on-surface-variant">Select your preferred session time</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-[0_20px_40px_rgba(45,51,53,0.06)]">
              {/* Custom Calendar UI */}
              <div className="mb-6 flex justify-between items-center">
                <span className="font-bold text-on-surface">November 2024</span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-8">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-[10px] uppercase tracking-widest text-outline font-bold py-2">{day}</div>
                ))}
                
                {/* Placeholder dates */}
                {[28, 29, 30, 31].map((date) => (
                  <div key={`prev-${date}`} className="h-10 flex items-center justify-center text-sm text-outline/30">{date}</div>
                ))}
                
                {[1, 2, 3, 4].map((date) => (
                  <button key={`curr-${date}`} className="h-10 flex items-center justify-center text-sm rounded-lg hover:bg-white transition-all">{date}</button>
                ))}
                
                <button className="h-10 flex items-center justify-center text-sm rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">5</button>
                
                {[6, 7, 8, 9, 10].map((date) => (
                  <button key={`curr-${date}`} className="h-10 flex items-center justify-center text-sm rounded-lg hover:bg-white transition-all">{date}</button>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.1em] font-bold text-outline">Available Sessions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col p-4 bg-white rounded-lg border border-transparent hover:border-primary transition-all text-left">
                    <span className="text-xs font-bold text-primary">06:30 AM</span>
                    <span className="text-sm font-bold mt-1">Surya Namaskar</span>
                    <span className="text-[10px] text-on-surface-variant">4 Spots Left</span>
                  </button>
                  <button className="flex flex-col p-4 bg-white rounded-lg border border-transparent hover:border-primary transition-all text-left opacity-60">
                    <span className="text-xs font-bold text-outline">08:00 AM</span>
                    <span className="text-sm font-bold mt-1">Deep Flow</span>
                    <span className="text-[10px] text-error font-bold">Fully Booked</span>
                  </button>
                  <button className="flex flex-col p-4 bg-white rounded-lg border border-transparent hover:border-primary transition-all text-left">
                    <span className="text-xs font-bold text-primary">05:30 PM</span>
                    <span className="text-sm font-bold mt-1">Evening Restorative</span>
                    <span className="text-[10px] text-on-surface-variant">12 Spots Left</span>
                  </button>
                </div>
              </div>
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
            
            <form className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-[0_20px_40px_rgba(45,51,53,0.06)] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">Full Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline uppercase tracking-wider">Age</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all" placeholder="25" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider">Health Condition / Concerns</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all" placeholder="Describe your primary symptoms or goals..." rows={3}></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider">Contact Number</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 transition-all" placeholder="+91 00000 00000" type="tel" />
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-dim transition-all shadow-lg shadow-primary/25" type="submit">
                Request Appointment
              </button>
              <p className="text-[10px] text-center text-outline-variant uppercase tracking-widest">Our clinical team will confirm within 24 hours</p>
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
          <a className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-[#25D366]/20" href="#">
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
