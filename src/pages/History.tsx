import React from 'react';
import { motion } from 'motion/react';

const History = () => {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[716px] flex flex-col items-center justify-center px-8 bg-surface-container-lowest text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
        </div>
        <div className="max-w-4xl z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 block"
          >
            Our Clinical Sanctuary
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight text-editorial mb-8"
          >
            The Legacy of <br/><span className="text-primary-dim">Natural Healing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            A timeless journey from ancient Vedic wisdom to modern clinical precision. Discover the roots of your wellness.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Introduction */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Serene morning light illuminating a minimalist yoga studio with wooden floors and a single organic plant in a ceramic pot" 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-primary">
              <p className="font-headline font-bold text-primary mb-2 italic">"Vis Medicatrix Naturae"</p>
              <p className="text-sm text-on-surface-variant">The healing power of nature is the fundamental principle of Naturopathy.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface leading-snug">The Essence of Vitality</h2>
            <div className="space-y-6 text-on-surface-variant leading-loose">
              <p>Naturopathy is not merely a treatment; it is a clinical philosophy that recognizes the body's inherent ability to heal itself. By removing obstacles to health and providing the necessary elements for vitality, we restore the natural equilibrium of the human spirit.</p>
              <p>Our approach at Agamagizh integrates this ancient understanding with contemporary scientific rigor, ensuring a sanctuary where biological precision meets ethereal peace.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="material-symbols-outlined text-primary mb-2">auto_awesome</span>
                <h4 className="font-headline font-bold text-sm uppercase mb-1">Holistic View</h4>
                <p className="text-xs text-on-surface-variant">Treating the whole person, not just symptoms.</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="material-symbols-outlined text-tertiary mb-2">nature</span>
                <h4 className="font-headline font-bold text-sm uppercase mb-1">Nature First</h4>
                <p className="text-xs text-on-surface-variant">Utilizing the five fundamental elements of life.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Indian Heritage Section */}
      <section className="py-24 px-8 bg-surface-container-lowest parchment-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-20"
          >
            <span className="font-headline text-tertiary font-bold text-xs uppercase tracking-[0.2em] mb-4">Vedic Roots</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface text-center">Indian Heritage</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Element: Five Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-tertiary h-full">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-4">eco</span>
                <h3 className="font-headline text-xl font-bold mb-4">Pancha Bhootas</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">The foundational philosophy of Indian Naturopathy lies in the five elements: Earth, Water, Fire, Air, and Space. We believe that disease is a manifestation of elemental imbalance within the cellular structure.</p>
              </div>
            </motion.div>
            {/* Gandhi Influence */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 md:mt-12"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-error-container h-full">
                <span className="material-symbols-outlined text-4xl text-error-container mb-4">history_edu</span>
                <h3 className="font-headline text-xl font-bold mb-4">The Gandhian Revival</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">Mahatma Gandhi was a staunch advocate of "Nature Cure." His personal experiments with dietetics, fasting, and earth treatments brought Naturopathy to the forefront of the Indian independence movement as a tool for self-reliance.</p>
              </div>
            </motion.div>
            {/* Traditional Practice */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 md:mt-24"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-secondary h-full">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">self_improvement</span>
                <h3 className="font-headline text-xl font-bold mb-4">Yogic Integration</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">The convergence of Yoga and Naturopathy in India created a unique clinical synergy. At Agamagizh, we continue this lineage by treating the physical vessel through nature and the mind through Yogic science.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Foreign Influence */}
      <section className="py-24 px-8 bg-on-surface text-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-headline text-primary-container font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Academic Pioneers</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Global Foundations</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="text-primary-container font-headline text-2xl font-bold opacity-50 group-hover:opacity-100 transition-opacity">01</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2">Benedict Lust</h4>
                    <p className="text-surface-variant/70 leading-relaxed">The 'Father of Naturopathy' who established the first school in New York (1902), synthesizing hydrotherapy with herbalism and spiritual wellness.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div class="text-primary-container font-headline text-2xl font-bold opacity-50 group-hover:opacity-100 transition-opacity">02</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2">Sebastian Kneipp</h4>
                    <p className="text-surface-variant/70 leading-relaxed">A Bavarian priest whose 'Kneipp Cure' revolutionized hydrotherapy, proving that water is one of nature's most potent clinical tools.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-primary-container font-headline text-2xl font-bold opacity-50 group-hover:opacity-100 transition-opacity">03</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2">Henry Lindlahr</h4>
                    <p className="text-surface-variant/70 leading-relaxed">Introduced scientific diagnostics into natural medicine, bridging the gap between clinical observation and holistic treatment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                className="rounded-xl w-full h-full object-cover shadow-2xl" 
                alt="Vintage dark wood apothecary shelf" 
                src="https://images.unsplash.com/photo-1585241936939-52fa331a94ea?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
              <img 
                className="rounded-xl mt-12 w-full h-full object-cover shadow-2xl" 
                alt="Close up of clear water droplets on a vibrant green leaf" 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-headline text-4xl font-bold text-on-surface">The Evolution of Care</h2>
            <p className="text-on-surface-variant mt-4">Tracing the major milestones of our discipline</p>
          </motion.div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-outline-variant/30 hidden md:block"></div>
            
            {/* Timeline Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-24 md:flex items-center justify-between w-full group"
            >
              <div className="md:w-[45%] mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-sm md:text-right border-r-4 border-transparent group-hover:border-primary transition-all">
                  <span className="font-headline text-primary font-bold text-xl block mb-2">500 BCE</span>
                  <h4 className="font-headline font-bold text-lg text-on-surface mb-2">Vedic Origins</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">The compilation of Ayurvedic texts defining the role of Pancha Bhootas in human physiology and longevity.</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block"></div>
              <div className="md:w-[45%]"></div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-24 md:flex items-center justify-between w-full group"
            >
              <div className="md:w-[45%]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block"></div>
              <div className="md:w-[45%] mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-transparent group-hover:border-primary transition-all">
                  <span className="font-headline text-primary font-bold text-xl block mb-2">1902</span>
                  <h4 className="font-headline font-bold text-lg text-on-surface mb-2">The Term 'Naturopathy'</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Benedict Lust formally defines the practice, establishing a global educational framework for natural clinical care.</p>
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-24 md:flex items-center justify-between w-full group"
            >
              <div className="md:w-[45%] mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-sm md:text-right border-r-4 border-transparent group-hover:border-primary transition-all">
                  <span className="font-headline text-primary font-bold text-xl block mb-2">1946</span>
                  <h4 className="font-headline font-bold text-lg text-on-surface mb-2">Uruli Kanchan</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Mahatma Gandhi establishes the Nature Cure Ashram, pioneering a community-based approach to holistic living.</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block"></div>
              <div className="md:w-[45%]"></div>
            </motion.div>

            {/* Timeline Item 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative md:flex items-center justify-between w-full group"
            >
              <div className="md:w-[45%]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block"></div>
              <div className="md:w-[45%] mb-8 md:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-transparent group-hover:border-primary transition-all">
                  <span className="font-headline text-primary font-bold text-xl block mb-2">Today</span>
                  <h4 className="font-headline font-bold text-lg text-on-surface mb-2">Agamagizh Clinic</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Integrating these legacies into a modern, clinical environment focused on precision medicine and sanctuary-level care.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;
