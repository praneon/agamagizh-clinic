import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <main className="pt-24">
      {/* HERO SECTION */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight"
          >
            Knowledge & <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body text-on-surface-variant font-light tracking-wide"
          >
            Explore the principles of natural healing and holistic wellness
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-primary/20 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* SECTION 1: FEATURED KNOWLEDGE */}
      <section className="py-16 px-8 max-w-screen-2xl mx-auto space-y-12">
        <div className="flex flex-col gap-8">
          {/* Card 1: Purple/Space */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col md:flex-row items-stretch transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-6">
              <span className="text-primary font-headline font-bold tracking-[0.2em] text-xs uppercase">panchamahabhuta</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight">Understanding the 5 Elements</h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md">Discover how the fundamental building blocks of nature—Earth, Water, Fire, Air, and Space—interact within your body to maintain perfect harmony.</p>
              <Link to="/elements/space" className="flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-widest hover:gap-4 transition-all w-fit">
                READ MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img 
                alt="Space Element" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Card 2: Orange/Fire */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col md:flex-row items-stretch transition-all duration-500 hover:shadow-2xl hover:shadow-error-container/5"
          >
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-6">
              <span className="text-error font-headline font-bold tracking-[0.2em] text-xs uppercase">Vitality</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight">The Legacy Of <br/><span className="text-5xl">Natural Healing</span></h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md">The Vis Medicatrix Naturae—the healing power of nature. Learn how your body possesses an intelligent and complex self-healing mechanism that responds to natural stimuli.</p>
              <Link to="/history" className="flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-widest hover:gap-4 transition-all w-fit">
                READ MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img 
                alt="Natural Healing" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-error-container/10 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TREATMENT CONCEPTS */}
      <section className="py-24 bg-surface-container-low">
        <div className="px-8 max-w-screen-2xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <h3 className="text-3xl font-headline font-bold text-on-surface">Treatment Concepts</h3>
            <p className="text-on-surface-variant">Deep dive into the specialized natural therapies offered at our clinic.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'water_drop', title: 'Hydrotherapy – How it works', desc: "Using water at different temperatures to stimulate the body's immune system, increase circulation, and reduce pain through thermal and mechanical effects.", color: 'text-secondary', bg: 'bg-secondary/10' },
              { icon: 'forest', title: 'Mud Therapy – Science behind it', desc: 'Rich in minerals, earth packs absorb toxins and cool the body, treating inflammatory conditions and skin disorders through natural grounding properties.', color: 'text-tertiary', bg: 'bg-tertiary/10' },
              { icon: 'nutrition', title: 'Diet Therapy – Principles', desc: 'Let food be thy medicine. Understanding how whole, plant-based nutrition acts as a catalyst for metabolic cellular regeneration and chronic disease reversal.', color: 'text-error', bg: 'bg-error-container/10' }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl shadow-[0_20px_40px_rgba(45,51,53,0.06)] group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-8 ${item.color}`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-4">{item.title}</h4>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">{item.desc}</p>
                <a className="inline-block border-b border-primary/20 pb-1 text-primary font-bold text-xs tracking-widest hover:border-primary transition-all" href="#">LEARN MORE</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED ACTIONS */}
      <section className="px-8 py-24 max-w-screen-2xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-headline font-bold tracking-[0.28em] text-xs uppercase">Featured</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
            Explore What We Offer
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">
            Quick access to our current treatment offers and curated wellness products, placed here after the therapy concepts for a more natural reading flow.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col md:flex-row-reverse items-stretch transition-all duration-500 hover:shadow-2xl hover:shadow-outline/5"
          >
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-6">
              <span className="text-outline font-headline font-bold tracking-[0.2em] text-xs uppercase">Clinic Offers</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight">Special Treatment Offer</h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md">Discover our limited-time naturopathy treatment packages designed to support faster healing and complete body balance.</p>
              <Link to="/offers" className="flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-widest hover:gap-4 transition-all w-fit">
                VIEW OFFERS <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img
                alt="Special naturopathy treatment setting"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-400/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container-low flex flex-col md:flex-row items-stretch transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5"
          >
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center space-y-6">
              <span className="text-secondary font-headline font-bold tracking-[0.2em] text-xs uppercase">Wellness Products</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface leading-tight">Natural Wellness Shop</h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md">Explore herbal remedies, detox kits, and natural wellness products curated to support your healing journey.</p>
              <Link to="/shop" className="flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-widest hover:gap-4 transition-all w-fit">
                VISIT SHOP <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img
                alt="Natural wellness products and herbal items"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: BLOG / ARTICLES */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end border-b border-slate-100 pb-8"
        >
          <div>
            <h3 className="text-3xl font-headline font-bold text-on-surface">Recent Articles</h3>
            <p className="text-on-surface-variant mt-2">Expert advice on living a balanced life</p>
          </div>
          <button className="text-sm font-bold text-primary tracking-widest border-2 border-primary/10 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all">VIEW ALL</button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop', tag: 'Lifestyle Tips', date: 'March 12, 2024', title: 'Finding Your Center: 5 Habits for Stress Management', desc: 'Practical techniques to navigate daily stress using traditional yoga philosophy and mindfulness.', color: 'text-primary' },
            { img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop', tag: 'Seasonal Health', date: 'February 28, 2024', title: "Spring Detox: Aligning with Nature's Rhythms", desc: 'Transitioning your diet and routine to match the energetic shifts of the coming spring season.', color: 'text-secondary' },
            { img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1000&auto=format&fit=crop', tag: 'Diet Advice', date: 'February 15, 2024', title: 'Functional Foods: The Pharmacy in Your Kitchen', desc: 'How simple household ingredients like ginger and turmeric can become powerful medicinal allies.', color: 'text-tertiary' },
            { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop', tag: 'Yoga Practices', date: 'January 30, 2024', title: 'Pranayama for Vitality: The Breath of Life', desc: 'Techniques to harness your life energy through conscious breathing and lung capacity improvement.', color: 'text-primary' }
          ].map((article, index) => (
            <motion.article 
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                <img 
                  alt={article.tag} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  src={article.img}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${article.color} uppercase`}>
                  {article.tag}
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{article.date}</span>
                <h5 className="text-lg font-headline font-bold group-hover:text-primary transition-colors">{article.title}</h5>
                <p className="text-sm text-on-surface-variant line-clamp-2 font-body">{article.desc}</p>
                <a className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest pt-2" href="#">
                  READ ARTICLE <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION 4: GUIDES / PROGRAMS */}
      <section className="py-24 bg-surface-container-high/30">
        <div className="px-8 max-w-screen-2xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-headline font-bold text-on-surface">Practical Guides</h3>
            <p className="text-on-surface-variant mt-4">Step-by-step frameworks for your wellness journey</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1000&auto=format&fit=crop', title: 'Detox Guides', items: ['Morning hydration protocols with alkaline boosters.', 'Eliminating inflammatory foods from your pantry.', 'Integrating bitter herbs for liver support.'], color: 'text-primary', bg: 'bg-primary/20' },
              { img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop', title: 'Daily Routines', items: ['Dinacharya: Ancient morning self-care rituals.', 'Optimal timing for meals and physical activity.', 'Sleep hygiene and evening winding down practices.'], color: 'text-secondary', bg: 'bg-secondary/20' },
              { img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1000&auto=format&fit=crop', title: 'Breathing Techniques', items: ['Diaphragmatic breathing for nervous system calm.', 'Nadi Shodhana for balancing energetic channels.', 'Sheetali Pranayama for cooling the system.'], color: 'text-tertiary', bg: 'bg-tertiary/20' }
            ].map((guide, index) => (
              <motion.div 
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    alt={guide.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={guide.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 ${guide.bg} mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <div className="p-8 flex-grow space-y-6">
                  <h4 className="text-2xl font-headline font-bold">{guide.title}</h4>
                  <ul className="space-y-4">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <span className={`${guide.color} font-bold`}>0{i + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 border-2 border-primary/10 rounded-full font-headline font-bold text-xs tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all">EXPLORE GUIDE</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-white text-center px-8"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Stay informed on your path to <span className="text-primary italic">wholeness.</span></h3>
          <p className="text-on-surface-variant text-lg">Join our community newsletter for bi-weekly insights, research updates, and clinic news.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              className="flex-grow px-6 py-4 rounded-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body outline-none" 
              placeholder="Your email address" 
              type="email"
            />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-primary-dim transition-all whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Resources;
