import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Space = () => {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center justify-center px-8 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(89,72,211,0.05)_0%,rgba(255,255,255,0)_70%)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">Akasha Tatva</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-8 tracking-tighter leading-tight max-w-4xl"
          >
            Space Element – Balance Your <span className="text-primary italic">Inner Consciousness</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-outline max-w-2xl leading-relaxed mb-12"
          >
            Restore harmony between mind and body through natural therapies. Experience the expansive stillness of the soul.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-transform active:scale-95 shadow-lg shadow-primary/20">
              Begin Journey
            </button>
            <button className="bg-surface-container-low text-primary px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-transform active:scale-95">
              Watch Philosophy
            </button>
          </motion.div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-primary/5 rounded-full pointer-events-none"></div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img alt="Serene medical environment" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:pl-12"
          >
            <span className="font-label text-primary font-bold tracking-widest block mb-4">THE PHILOSOPHY</span>
            <h2 className="font-headline text-3xl font-bold mb-6 text-on-surface">The Canvas of Existence</h2>
            <p className="font-body text-base text-outline leading-relaxed mb-8">
              In Naturopathy, the Space element (Akasha) is the container for all other elements. It represents mental clarity, energy flow, and the vast potential of the human consciousness. When Space is congested, we feel mental fog and spiritual disconnect.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="text-on-surface font-medium">Opening pathways for vital energy (Prana)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <span className="text-on-surface font-medium">Cultivating expansive mental stillness</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <span className="font-label text-primary font-bold tracking-widest block mb-4 uppercase">Clinical Approach</span>
              <h2 className="font-headline text-4xl font-bold text-on-surface">Advanced Acupuncture for Neurological Balance</h2>
            </div>
            <p className="max-w-sm font-body text-outline text-sm leading-relaxed">
              Precision needle placement activates the body's latent healing intelligence, clearing the "space" between neurons for peak cognitive function.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'neurology', title: 'Neural Harmony', desc: 'Specific protocols to regulate the autonomic nervous system and reduce cortisol spikes naturally.' },
              { icon: 'bolt', title: 'Energy Pathways', desc: 'Clearing energetic blockages in the meridians to allow the fluid movement of the Space element.' },
              { icon: 'spa', title: 'Stress Attenuation', desc: 'Non-invasive techniques to silence the inner noise and restore a state of profound physiological peace.' }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 rounded-xl bg-surface-container-low/50 backdrop-blur-sm border border-white transition-all hover:-translate-y-2 duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
                <p className="font-body text-sm text-outline leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Bento Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-headline text-3xl font-bold mb-4">The Akasha Transformation</h2>
            <p className="font-body text-outline max-w-xl mx-auto">Realize the clinical benefits of a balanced internal environment.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-label text-primary font-bold mb-4 block">01</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Enhanced Mental Clarity</h3>
                <p className="font-body text-outline leading-relaxed">Sharpen focus and eliminate "brain fog" through systemic detoxification and targeted acupuncture points.</p>
              </div>
              <div className="mt-8">
                <img alt="Mind balance" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-center relative overflow-hidden"
            >
              <span className="font-label opacity-60 font-bold mb-4 block">02</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Profound Stress Relief</h3>
              <p className="font-body opacity-80 leading-relaxed">Transition from the 'Fight or Flight' response to 'Rest and Digest' in a single session.</p>
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10">cloud</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1 bg-surface-container-lowest rounded-xl p-10 shadow-sm"
            >
              <span className="font-label text-primary font-bold mb-4 block">03</span>
              <h4 className="font-headline text-lg font-bold mb-2">Sleep Hygiene</h4>
              <p className="font-body text-xs text-outline leading-relaxed">Deep restorative sleep cycles regulated by circadian alignment.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-1 bg-surface-container-lowest rounded-xl p-10 shadow-sm"
            >
              <span className="font-label text-primary font-bold mb-4 block">04</span>
              <h4 className="font-headline text-lg font-bold mb-2">Spiritual Space</h4>
              <p className="font-body text-xs text-outline leading-relaxed">A refined sense of purpose and connectedness to the self.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface-container-lowest overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
            Balance Your Inner Space and <br/><span className="text-primary italic">Reclaim Your Energy</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-primary text-on-primary px-12 py-5 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
              Book Consultation
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-on-surface border border-outline-variant/30 px-12 py-5 rounded-full font-headline font-bold text-sm uppercase tracking-widest transition-all hover:bg-surface-container-low active:scale-95">
              <span className="material-symbols-outlined text-emerald-600">chat</span>
              WhatsApp Us
            </button>
          </div>
          <p className="mt-8 font-label text-outline text-[10px] tracking-widest uppercase">Consultations available in-person and via tele-health</p>
        </motion.div>
        {/* Floating accent circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* SideNavBar (Floating Elements Button) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/" className="flex items-center justify-center bg-white text-[#2d3335] rounded-full h-16 w-16 shadow-[0px_20px_40px_rgba(45,51,53,0.15)] hover:scale-110 hover:shadow-lg transition-all group">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
          <span className="absolute right-20 bg-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Back to Home</span>
        </Link>
      </div>
    </main>
  );
};

export default Space;
