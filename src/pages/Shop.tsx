import React from 'react';
import { motion } from 'motion/react';

const Shop = () => {
  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 grayscale-[20%]" 
            alt="Minimalist clinical interior with soft natural light" 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent lg:block hidden"></div>
          <div className="absolute inset-0 bg-surface-container-lowest/60 lg:hidden block"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="font-label text-xs tracking-[0.2em] text-tertiary uppercase font-bold mb-4 block">The Clinical Sanctuary</span>
            <h1 className="font-headline text-[3.5rem] leading-[1.1] font-bold text-on-surface mb-6 tracking-tight">
              Wellness Beyond <span className="text-tertiary">Treatment</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Curated naturopathic essentials designed to integrate clinical precision with the serenity of your daily lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-headline text-xs font-bold uppercase tracking-widest hover:shadow-lg transition-all">Explore Essentials</button>
              <button className="border border-outline-variant px-8 py-4 rounded-full font-headline text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all">Our Philosophy</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-12"
          >
            <button className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container transition-transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <span className="font-headline text-[10px] uppercase font-bold tracking-widest text-tertiary">Earth / Herbs</span>
            </button>
            <button className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container transition-transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              </div>
              <span className="font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Water / Detox</span>
            </button>
            <button className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary transition-transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
              </div>
              <span className="font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Space / Yoga</span>
            </button>
            <button className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center text-error transition-transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
              <span className="font-headline text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Fire / Vitality</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products (Asymmetric Bento) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="font-label text-[10px] tracking-[0.2em] text-tertiary uppercase font-bold">Clinical Selection</span>
              <h2 className="font-headline text-3xl font-bold text-on-surface mt-2">Featured Therapeutics</h2>
            </div>
            <a className="text-tertiary font-headline text-xs font-bold uppercase tracking-widest border-b-2 border-tertiary pb-1" href="#">View Collection</a>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7 group relative overflow-hidden rounded-xl bg-white shadow-[0_20px_40px_rgba(45,51,53,0.06)] aspect-[16/10] md:aspect-auto"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="High-end organic herbal detox kit" 
                src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000&auto=format&fit=crop" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="bg-tertiary text-on-tertiary text-[10px] uppercase font-bold px-3 py-1 rounded-full w-max mb-4">Best Seller</span>
                <h3 className="font-headline text-2xl font-bold mb-2">Complete Herbal Detox Kit</h3>
                <p className="text-white/80 text-sm max-w-sm mb-6">A 21-day guided journey using Earth-element botanicals to reset your metabolic rhythm.</p>
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xl font-bold">₹4,499.00</span>
                  <button className="bg-white text-on-surface p-4 rounded-full hover:bg-tertiary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
            {/* Side Stacks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-5 flex flex-col gap-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] flex gap-6 items-center group">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                    alt="Premium cork yoga mat" 
                    src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1000&auto=format&fit=crop" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-sm font-bold text-on-surface mb-1">Premium Cork Yoga Mat</h4>
                  <p className="text-xs text-on-surface-variant mb-4">Antimicrobial, Earth-friendly grip.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-sm font-bold text-tertiary">₹3,200.00</span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] flex gap-6 items-center group">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                    alt="Artisanal clay and mud facial pack" 
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-sm font-bold text-on-surface mb-1">Volcanic Mud Detox Pack</h4>
                  <p className="text-xs text-on-surface-variant mb-4">Mineral-rich skin purification.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-sm font-bold text-tertiary">₹1,850.00</span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-headline text-3xl font-bold text-on-surface">The Wellness Inventory</h2>
            <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">Scientifically backed, naturally sourced. Every product is vetted by our clinical team for purity and potency.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Organic green tea leaves" 
                  src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop" 
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-md text-on-surface hover:bg-tertiary hover:text-white transition-all transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Earth Element</span>
                <h3 className="font-headline font-bold text-on-surface mt-1">Tulsi &amp; Brahmi Tea</h3>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">Nootropic blend for cognitive clarity and stress resilience.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-headline font-bold text-on-surface">₹750.00</span>
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-bold ml-1 text-on-surface-variant">4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Clinical grade organic supplements" 
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop" 
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-md text-on-surface hover:bg-tertiary hover:text-white transition-all transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Earth Element</span>
                <h3 className="font-headline font-bold text-on-surface mt-1">Ashwagandha Gold</h3>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">High-potency root extract for endocrine balance.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-headline font-bold text-on-surface">₹1,200.00</span>
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-bold ml-1 text-on-surface-variant">4.8</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Handcrafted copper water bottle" 
                  src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop" 
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-md text-on-surface hover:bg-tertiary hover:text-white transition-all transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Water Element</span>
                <h3 className="font-headline font-bold text-on-surface mt-1">Artisan Copper Carafe</h3>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">Naturally alkaline water storage for cellular health.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-headline font-bold text-on-surface">₹2,400.00</span>
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-bold ml-1 text-on-surface-variant">5.0</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Glass aromatherapy diffuser" 
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop" 
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-md text-on-surface hover:bg-tertiary hover:text-white transition-all transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Space Element</span>
                <h3 className="font-headline font-bold text-on-surface mt-1">Ethereal Oil Blend</h3>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">A therapeutic mix of Vetiver and Sandalwood for deep meditation.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-headline font-bold text-on-surface">₹950.00</span>
                  <div className="flex text-amber-400">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] font-bold ml-1 text-on-surface-variant">4.7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center">
            <button className="font-headline text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 bg-on-surface text-white rounded-full hover:bg-primary transition-all">Load More Products</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
