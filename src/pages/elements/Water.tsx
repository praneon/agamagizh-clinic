import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Water = () => {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center px-8 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,153,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-[10px] uppercase tracking-[0.2em]">
              Jala Element
            </div>
            <h1 className="font-headline font-extrabold text-6xl md:text-8xl text-on-surface tracking-tighter leading-[0.9] transition-all">
              Water Element – <span className="text-secondary">Cleanse</span> and Restore
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-24 bg-secondary/30"></div>
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
            </div>
            <p className="text-lg text-outline max-w-md leading-relaxed">
              Experience the transformative power of Jala. A sanctuary where purification flows through clinical precision and ancient wisdom.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Close up of crystal clear water ripples" 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlapping clinical note */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-12 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden lg:block border border-outline-variant/10"
            >
              <span className="material-symbols-outlined text-secondary mb-4 block">medical_services</span>
              <h4 className="font-headline font-bold text-on-surface mb-2">Scientific Detox</h4>
              <p className="text-xs text-outline leading-relaxed">Our hydrotherapy protocols are evidence-based and doctor-supervised for maximum physiological benefit.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Circulation & Cleansing */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline font-bold text-3xl md:text-4xl text-on-surface"
          >
            The Fluidity of Vitality
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 text-left items-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-on-surface-variant leading-relaxed font-light text-lg"
            >
              Water constitutes nearly 70% of the human body. In Naturopathy, the <span className="text-secondary font-bold">Jala Element</span> is the primary medium for transporting nutrients and flushing metabolic waste. Efficient circulation and detoxification are the cornerstones of cellular longevity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary">autorenew</span>
                <div>
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Internal Flushing</h4>
                  <p className="text-xs text-outline">Accelerating the removal of toxins from the interstitial fluid.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary">vital_signs</span>
                <div>
                  <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Circulatory Boost</h4>
                  <p className="text-xs text-outline">Thermal applications to stimulate blood flow and lymphatic drainage.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Colon Hydrotherapy Section (Bento Style) */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="font-headline font-bold text-secondary text-sm uppercase tracking-[0.3em] mb-4 block">Signature Treatment</span>
              <h2 className="font-headline font-extrabold text-5xl tracking-tighter">Colon Hydrotherapy</h2>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-tertiary-container/20 text-tertiary rounded-full border border-tertiary/10">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="text-xs font-bold uppercase tracking-widest">Doctor Controlled Process</span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Process Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 bg-surface-bright rounded-xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div className="max-w-2xl">
                <h3 className="font-headline font-bold text-2xl mb-6">Step-by-Step Restoration</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">01</span>
                    <p className="text-on-surface-variant">Gentle infusion of filtered, temperature-controlled water into the colon through a medical-grade system.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">02</span>
                    <p className="text-on-surface-variant">Specialized abdominal massage by trained therapists to assist the release of accumulated waste and toxins.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">03</span>
                    <p className="text-on-surface-variant">Closed-system technology ensures a hygienic, odorless, and completely dignified experience under clinical supervision.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Benefits Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-4 space-y-6"
            >
              <div className="bg-secondary p-10 rounded-xl text-on-secondary h-full">
                <h3 className="font-headline font-bold text-xl mb-8">Therapeutic Outcomes</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary-container">done_all</span>
                    <span className="font-medium">Chronic Constipation Relief</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary-container">done_all</span>
                    <span className="font-medium">Deep Systemic Detox</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary-container">done_all</span>
                    <span className="font-medium">Enhanced Skin Clarity</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary-container">done_all</span>
                    <span className="font-medium">Reduced Bloating</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Treatments: Asymmetric Grid */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline font-bold text-3xl mb-16 text-center"
          >
            Hydro-Therapeutic Modalities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Hip Bath */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-outline-variant/5"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">waves</span>
              <h4 className="font-headline font-bold mb-3 uppercase tracking-wider text-sm">Hip Bath</h4>
              <p className="text-xs text-outline leading-relaxed">Targeted treatment for digestive and reproductive health by improving pelvic circulation.</p>
            </motion.div>
            
            {/* Spinal Bath */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-outline-variant/5 lg:translate-y-4"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">straighten</span>
              <h4 className="font-headline font-bold mb-3 uppercase tracking-wider text-sm">Spinal Bath</h4>
              <p className="text-xs text-outline leading-relaxed">A specialized water jet application to soothe the nervous system and relieve hypertension.</p>
            </motion.div>
            
            {/* Steam Bath */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-outline-variant/5"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">air</span>
              <h4 className="font-headline font-bold mb-3 uppercase tracking-wider text-sm">Steam Bath</h4>
              <p className="text-xs text-outline leading-relaxed">Induces sweating to eliminate toxins through the skin, the body's largest eliminative organ.</p>
            </motion.div>
            
            {/* Immersion Bath */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-outline-variant/5 lg:translate-y-4"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-6">bathtub</span>
              <h4 className="font-headline font-bold mb-3 uppercase tracking-wider text-sm">Immersion Bath</h4>
              <p className="text-xs text-outline leading-relaxed">Full-body hydrotherapy to balance body temperature and enhance metabolic rate.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-20 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-surface-container-highest/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white"
        >
          <span className="material-symbols-outlined text-4xl text-secondary">privacy_tip</span>
          <div>
            <h5 className="font-headline font-bold text-lg mb-1 uppercase tracking-tight">Our Commitment to Privacy</h5>
            <p className="text-on-surface-variant font-medium">To ensure your absolute comfort and cultural sensitivity, we strictly assign <span className="text-secondary font-bold">Male Therapists for Male guests</span> and <span className="text-secondary font-bold">Female Therapists for Female guests</span>.</p>
          </div>
        </motion.div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">sanitizer</span>
            </div>
            <h3 className="font-headline font-bold">Systemic Detox</h3>
            <p className="text-sm text-outline px-6">Flushing out metabolic acids and heavy metals that accumulate in our modern lifestyle.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
            </div>
            <h3 className="font-headline font-bold">Circulation</h3>
            <p className="text-sm text-outline px-6">Improving the delivery of oxygen and nutrients to vital organs through thermal stimulation.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">mop</span>
            </div>
            <h3 className="font-headline font-bold">Internal Cleansing</h3>
            <p className="text-sm text-outline px-6">Restoring the natural peristaltic movement and health of the digestive tract.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,153,0.03)_0%,transparent_70%)] scale-150 opacity-50 pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10 space-y-10"
        >
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter">Ready to <span className="text-secondary">Purify?</span></h2>
          <p className="text-lg text-outline">Begin your journey towards internal clarity and physical lightness today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-headline font-bold uppercase tracking-[0.2em] shadow-lg shadow-secondary/20 hover:scale-105 transition-all">
              Start Your Detox Journey
            </button>
            <button className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-secondary text-secondary rounded-full font-headline font-bold uppercase tracking-[0.2em] hover:bg-secondary/5 transition-all">
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp Consult
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Water;
