import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Fire = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden bg-surface-container-lowest">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-error-container/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-error-container/10 rounded-full"
          >
            <span className="material-symbols-outlined text-error-container">light_mode</span>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-error">Agni Element</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[1.1] mb-8"
          >
            Fire Element – Ignite Your <br/>
            <span className="text-error-container relative">
              Inner Metabolism
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-error-container/30 rounded-full"></span>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-xl text-outline max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Transformation begins within. Harness the primal power of Agni to purify your system, accelerate digestion, and unlock boundless vitality.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-10 py-5 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Ignite Your Journey
            </button>
            <button className="px-10 py-5 border border-outline-variant/30 text-on-surface rounded-full font-headline font-bold text-lg hover:bg-surface-container-low transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl"
        >
          <img alt="Clean clinical environment" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
        </motion.div>
      </section>

      {/* Intro: Digestive Fire */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-headline text-4xl font-bold text-on-surface leading-tight">
              The Sacred Spark: <br/>Understanding Jatharagni
            </h2>
            <div className="space-y-6 text-outline text-lg leading-relaxed">
              <p>
                In Naturopathy, the "Digestive Fire" or Agni is the cornerstone of health. It is not merely the process of breaking down food, but the metabolic intelligence that transforms matter into consciousness and energy.
              </p>
              <p>
                When Agni is weak, toxins (Ama) accumulate. When it is balanced, every cell thrives. Our Fire Element therapies are designed to rekindle this internal furnace through scientific precision and ancient wisdom.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-error-container">98%</span>
                <span className="text-sm font-label uppercase tracking-widest text-outline">Metabolic Boost</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-error-container">10k+</span>
                <span className="text-sm font-label uppercase tracking-widest text-outline">Sessions Held</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-xl shadow-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img alt="Healthy food" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-error-container rounded-xl flex items-center justify-center -rotate-6 shadow-xl">
              <span className="material-symbols-outlined text-white text-6xl">local_fire_department</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Therapy Deep Dives: Diet & Ozone */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Diet Therapy */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img alt="Diet Therapy" className="rounded-xl shadow-lg w-full h-[600px] object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <span className="font-label text-error font-bold tracking-widest uppercase">Precision Nutrition</span>
              <h3 className="font-headline text-4xl font-bold text-on-surface">Metabolic Diet Therapy</h3>
              <p className="text-outline text-lg leading-relaxed">
                Our personalized nutrition plans are more than just recipes; they are metabolic blueprints. By identifying your unique Prakriti (constitution), we prescribe foods that "feed the fire" without creating congestion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Customized Glycemic Control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Enzyme-Rich Living Foods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Intermittent Fasting Protocols</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Ozone Therapy */}
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img alt="Ozone Therapy" className="rounded-xl shadow-lg w-full h-[600px] object-cover" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <span className="font-label text-secondary font-bold tracking-widest uppercase">Oxygenating Detox</span>
              <h3 className="font-headline text-4xl font-bold text-on-surface">Medical Ozone Therapy</h3>
              <p className="text-outline text-lg leading-relaxed">
                Fire requires oxygen to burn. Ozone therapy introduces medical-grade O3 to stimulate the metabolic rate at a cellular level, enhancing oxygen uptake and neutralizing stagnant toxins.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Cellular Rejuvenation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Pathogen Neutralization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-body text-on-surface">Enhanced Mitochondrial Function</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Bento Grid */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="font-headline text-4xl font-bold mb-4">The Agni Transformation</h2>
            <p className="text-outline">Tangible results from our specialized Fire Element protocols.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Improved Digestion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-error-container/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-error-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">Superior Digestion</h4>
              <p className="text-outline leading-relaxed max-w-md">Eliminate bloating, acidity, and sluggishness. Restore the natural rhythm of your gut biome through metabolic alignment and enzyme activation.</p>
            </motion.div>
            
            {/* Energy */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-error-container p-10 rounded-xl text-white shadow-lg hover:-translate-y-2 transition-transform"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">Sustained Vitality</h4>
              <p className="text-on-error/80 leading-relaxed">Say goodbye to afternoon crashes. Efficient metabolism means consistent energy production throughout the day.</p>
            </motion.div>
            
            {/* Weight */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <h4 className="font-headline text-2xl font-bold mb-4">Metabolic Balance</h4>
              <p className="text-outline leading-relaxed">Weight management that focuses on fat oxidation and hormonal harmony rather than restrictive calorie counting.</p>
            </motion.div>
            
            {/* Mental Clarity */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <img alt="Yoga" className="rounded-lg h-48 w-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="font-headline text-2xl font-bold mb-4">Mental Agility</h4>
                  <p className="text-outline leading-relaxed">A clear gut leads to a clear mind. Reducing metabolic waste (Ama) directly impacts cognitive function and emotional stability.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-inverse-surface rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-error-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Boost Your Metabolism – <br/>Start Your Plan Today</h2>
            <p className="text-inverse-on-surface text-xl mb-12 max-w-2xl mx-auto">
              Join hundreds of others who have transformed their health by mastering their internal fire. Book a consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-error-container text-on-error-container rounded-full font-headline font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                Consult with Experts
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Side NavBar / Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/" className="flex items-center justify-center bg-white text-[#2d3335] h-16 w-16 rounded-full shadow-[0px_20px_40px_rgba(45,51,53,0.15)] hover:scale-110 hover:shadow-lg transition-all group relative">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="absolute right-20 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Back to Home</span>
        </Link>
      </div>
    </main>
  );
};

export default Fire;
