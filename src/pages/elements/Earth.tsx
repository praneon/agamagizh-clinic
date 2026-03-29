import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Earth = () => {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-tertiary"></span>
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs font-label">The Prithvi Element</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8"
            >
              Earth Element – <br/>
              <span className="text-tertiary">Strengthen</span> Your <br/>
              Foundation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-10 font-light"
            >
              Rooted in stability and physical structure, Prithvi therapies ground the spirit while restoring the body's natural resilience.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase hover:shadow-xl transition-all active:scale-95">
                Relax and Rejuvenate
              </button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase hover:bg-surface-container-low transition-all">
                View Rituals
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                alt="Smooth river stones and green leaves" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg max-w-[240px]"
            >
              <span className="material-symbols-outlined text-tertiary mb-3 text-3xl">energy_savings_leaf</span>
              <p className="text-sm font-bold text-on-surface leading-snug">Stabilize your vital energy through ancient grounding techniques.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Grounding & Structure */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7"
            >
              <h2 className="font-headline text-4xl font-bold mb-6 tracking-tight">The Architecture of Well-being</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                In Naturopathy, the Earth element (Prithvi) represents the solid state of matter. It provides the structure for our bones, muscles, and tissues. When our Earth element is balanced, we feel grounded, stable, and physically robust.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 flex md:justify-end"
            >
              <div className="flex gap-4">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm w-32">
                  <div className="text-3xl font-bold text-tertiary mb-1">05</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Elements</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm w-32 border-b-4 border-tertiary">
                  <div className="text-3xl font-bold text-tertiary mb-1">01</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Earth focus</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments: Bento Grid Style */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-tertiary font-bold tracking-widest uppercase text-xs">Our Earth Rituals</span>
            <h2 className="font-headline text-4xl font-bold mt-2">Clinical Therapies</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mud Therapy (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-low aspect-[16/10]"
            >
              <img 
                alt="Mud therapy treatment" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-4 inline-block">Detox & Cool</span>
                <h3 className="text-3xl font-bold text-white mb-2">Mud Therapy</h3>
                <p className="text-white/80 max-w-sm mb-6">A cooling ritual that draws out toxins and reduces inflammation using mineral-rich clinical earth.</p>
                <ul className="flex gap-4 text-white/90 text-sm font-medium">
                  <li className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Skin Vitality</li>
                  <li className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Metabolic Boost</li>
                </ul>
              </div>
            </motion.div>

            {/* Massage Therapy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group hover:bg-tertiary transition-colors duration-500"
            >
              <div>
                <span className="material-symbols-outlined text-tertiary text-4xl group-hover:text-white transition-colors">self_care</span>
                <h3 className="text-2xl font-bold mt-6 group-hover:text-white">Massage Therapy</h3>
                <p className="text-on-surface-variant mt-2 group-hover:text-white/80">Deep tissue structural manipulation to align the skeletal-muscular foundation.</p>
              </div>
              <button className="text-tertiary font-bold text-sm uppercase tracking-widest mt-8 flex items-center gap-2 group-hover:text-white">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </motion.div>

            {/* Reflexology */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10"
            >
              <span className="material-symbols-outlined text-tertiary text-4xl">footprint</span>
              <h3 className="text-2xl font-bold mt-6">Reflexology</h3>
              <p className="text-on-surface-variant mt-2">Targeted pressure on the feet to stimulate the body's grounding meridian points.</p>
              <div className="mt-8 flex -space-x-2">
                <img alt="Practitioner" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
                <img alt="Practitioner" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=100&auto=format&fit=crop" referrerPolicy="no-referrer" />
                <div className="h-8 w-8 rounded-full bg-surface-container-highest ring-2 ring-white flex items-center justify-center text-[10px] font-bold">+12</div>
              </div>
            </motion.div>

            {/* Aroma Therapy (Wide) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-3 bg-[#fdfdfd] border border-outline-variant/10 rounded-xl p-10 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="w-full md:w-1/3">
                <img 
                  alt="Essential oils and herbs" 
                  className="rounded-lg shadow-lg aspect-square object-cover" 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-headline font-bold mb-4">Aroma Therapy</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">Utilizing the fragrant gifts of the earth to soothe the nervous system. Our clinical blends use grounding scents like sandalwood, cedarwood, and vetiver to induce deep calm.</p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-tertiary font-bold">100% Organic</div>
                    <div className="text-xs opacity-60 uppercase font-bold">Herbal Extracts</div>
                  </div>
                  <div>
                    <div className="text-tertiary font-bold">Clinical Grade</div>
                    <div className="text-xs opacity-60 uppercase font-bold">Sourcing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline text-4xl font-bold mb-16 tracking-tight"
          >
            Investment in Foundation
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 rounded-xl shadow-sm border border-outline-variant/5 hover:scale-[1.02] transition-transform"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">The Grounding Cycle</span>
              <div className="my-6">
                <span className="text-5xl font-bold text-on-surface">₹3999</span>
              </div>
              <div className="h-[2px] w-12 bg-tertiary/20 mx-auto mb-8"></div>
              <div className="text-xl font-bold mb-8">3 Clinical Sessions</div>
              <ul className="space-y-4 mb-10 text-on-surface-variant text-sm text-left max-w-[200px] mx-auto">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Mud Therapy Pack</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Basic Reflexology</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Essential Oil Blend</li>
              </ul>
              <button className="w-full py-4 border-2 border-tertiary text-tertiary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-tertiary hover:text-white transition-all">Book Now</button>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-12 rounded-xl shadow-[0px_20px_40px_rgba(45,51,53,0.1)] border-2 border-tertiary relative overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="absolute top-0 right-0 bg-tertiary text-on-tertiary px-6 py-1 text-[10px] font-bold uppercase tracking-widest -rotate-0 rounded-bl-xl">Popular</div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">The Structural Restoration</span>
              <div className="my-6">
                <span className="text-5xl font-bold text-on-surface">₹7650</span>
              </div>
              <div className="h-[2px] w-12 bg-tertiary/20 mx-auto mb-8"></div>
              <div className="text-xl font-bold mb-8">6 Clinical Sessions</div>
              <ul className="space-y-4 mb-10 text-on-surface-variant text-sm text-left max-w-[200px] mx-auto">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Deep Tissue Massage</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Aroma Mud Wraps</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Advanced Reflexology</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Progress Assessment</li>
              </ul>
              <button className="w-full py-4 bg-tertiary text-on-tertiary rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-tertiary/20 hover:opacity-90 transition-all">Select Plan</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">fitness_center</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Muscle Relaxation</h4>
              <p className="text-on-surface-variant leading-relaxed">Release chronic tension stored in deep muscle fibers through targeted physical therapies.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">health_and_safety</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Pain Relief</h4>
              <p className="text-on-surface-variant leading-relaxed">Alleviate structural discomfort and joint stiffness by restoring the body's natural alignment.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">restore</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Physical Recovery</h4>
              <p className="text-on-surface-variant leading-relaxed">Accelerate the healing of tissues and strengthen the physical foundation of your health.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl bg-tertiary-dim p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Ready to rediscover your <br/> physical center?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl">Consult with our naturopathy experts to tailor an Earth-element journey for your unique constitution.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-tertiary px-10 py-5 rounded-full font-headline font-bold text-sm tracking-widest uppercase hover:shadow-2xl transition-all">
                Relax and Rejuvenate – Book Therapy
              </button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-headline font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined">chat</span> WhatsApp Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Earth;
