import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Air = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-outline/40"></span>
              <span className="uppercase tracking-[0.3em] text-outline font-bold text-xs">Vayu - The Air Element</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
              Air Element – <br/>
              <span className="text-outline">Restore Breath</span> <br/>
              and Vitality
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
              Experience the ethereal power of Vayu. We focus on the unseen force that drives life—your breath. Through precision yoga therapy and respiratory science, we clear the pathways of your existence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Start Breathing Better
              </button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase hover:bg-surface-container-low transition-colors">
                View Treatments
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden md:block"
          >
            <div className="absolute inset-0 bg-surface-container-low rounded-[4rem] rotate-3 -z-10"></div>
            <img alt="Respiratory Health" className="w-full h-full object-cover rounded-[3rem] shadow-2xl" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-xs border border-surface-container-low">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">air</span>
              <p className="font-headline font-bold text-on-surface leading-snug">
                "The breath is the bridge which connects life to consciousness."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-headline font-bold text-3xl text-on-surface mb-8">The Pranic Flow</h2>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed italic">
            In Naturopathy, the Air element (Vayu) represents movement and the nervous system. It is the catalyst for all biological functions. When your respiration is shallow, your vitality wanes. We restore the 'Prana'—the vital life force—through scientific breath modulation and rhythmic body movement.
          </p>
        </motion.div>
      </section>

      {/* Practices: Bento Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase mb-4 block">Core Modalities</span>
            <h2 className="font-headline font-bold text-4xl text-on-surface">Integrated Air Therapies</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm">Specialized techniques designed to expand lung capacity and soothe the central nervous system.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10"
          >
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-10 flex flex-col justify-center">
                <span className="material-symbols-outlined text-outline text-3xl mb-6">psychology</span>
                <h3 className="font-headline font-bold text-2xl mb-4">Scientific Pranayama</h3>
                <p className="text-on-surface-variant mb-6">Advanced respiratory training protocols that increase oxygen saturation and balance CO2 levels for mental clarity.</p>
                <a className="text-primary font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Explore Technique <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="relative min-h-[300px]">
                <img alt="Pranayama" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
          
          {/* Practice 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-surface-container-highest/30 p-10 rounded-xl flex flex-col"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-3xl">eco</span>
            </div>
            <h3 className="font-headline font-bold text-2xl mb-4">Plantain Leaf Therapy</h3>
            <p className="text-on-surface-variant flex-grow mb-8">A traditional external treatment where the body absorbs solar energy and leaf nutrients to detoxify the skin and respiratory pores.</p>
            <img alt="Leaf Therapy" className="rounded-lg w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1620052581237-5d38fa181d28?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
          </motion.div>
          
          {/* Practice 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-headline font-bold text-2xl mb-4">Yoga Therapy</h3>
              <p className="text-on-primary/80">Tailored asanas that specifically target thoracic expansion and spinal alignment to facilitate effortless breathing.</p>
            </div>
            <div className="pt-10">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
                <img className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://images.unsplash.com/photo-1594824436998-dd40e4f69d1b?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
              <p className="text-xs mt-4 font-bold tracking-widest uppercase">Expert Led Sessions</p>
            </div>
          </motion.div>
          
          {/* Practice 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="font-headline font-bold text-2xl mb-4">The Yoga Sanctuary</h3>
                <p className="text-on-surface-variant">Our dedicated space is architecturally designed to maximize airflow and minimize distractions. With high-vaulted ceilings and natural light, it is the perfect environment for profound breathwork.</p>
              </div>
              <div className="flex-1 w-full h-48 rounded-xl overflow-hidden">
                <img alt="Yoga Studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-headline font-bold text-4xl mb-4">The Impact of Balanced Vayu</h2>
            <div className="h-1 w-20 bg-outline mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Optimized Lung Function', desc: 'Increase tidal volume and residual capacity through targeted respiratory exercises.' },
              { num: '02', title: 'Cortisol Suppression', desc: 'Lower stress hormones instantly by activating the vagus nerve through slow-breath cycles.' },
              { num: '03', title: 'Homeostatic Balance', desc: "Harmonize the body's internal rhythms for better sleep and sustained daily energy." }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-outline/20 font-black text-6xl mb-2">{benefit.num}</div>
                <h4 className="font-headline font-bold text-xl uppercase tracking-tighter">{benefit.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-on-surface text-surface-container-lowest rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-8">Enhance Your Breath – <br/>Join a Session</h2>
            <p className="text-surface-container-highest/70 text-lg mb-12 max-w-xl mx-auto">
              Ready to transform your life force? Consult with our specialists today and discover the power of the Air element.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform flex items-center gap-3">
                Book Appointment Now
              </button>
              <a className="flex items-center gap-3 text-surface-container-lowest hover:text-primary transition-colors font-headline font-bold text-sm uppercase tracking-widest" href="#">
                <span className="material-symbols-outlined">chat</span>
                Consult on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SideNavBar / Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/" className="flex items-center justify-center bg-white text-[#2d3335] shadow-[0px_20px_40px_rgba(45,51,53,0.15)] rounded-full h-16 w-16 hover:scale-110 hover:shadow-lg transition-all group overflow-hidden">
          <span className="material-symbols-outlined text-primary group-hover:rotate-[-10deg] transition-transform">arrow_back</span>
          <span className="sr-only">Back to Home</span>
        </Link>
      </div>
    </main>
  );
};

export default Air;
