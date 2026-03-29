import { Link } from 'react-router-dom';
import { PanchaMahabhutaScroll } from '../components/PanchaMahabhutaScroll';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center pt-28 sm:pt-24 overflow-hidden">
        {/* Subtle Abstract Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary element-blob rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary element-blob rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary element-blob rounded-full opacity-5"></div>
        
        <div className="z-10 w-full text-center px-4 sm:px-6 mt-4 sm:mt-0">
          <div className="relative mb-4 flex w-full justify-center">
            <div className="relative group flex justify-center">
            <img 
              alt="Agamagizh Logo" 
              className="block mx-auto object-contain transition-transform duration-700 group-hover:scale-110 h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] lg:h-[512px] lg:w-[512px]" 
              src="/Logo.svg"
            />
            <div className="absolute -inset-4 bg-surface-container-low rounded-full -z-10 opacity-50 blur-xl"></div>
            </div>
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6">
            Agamagizh: Restoring <br/>
            <span className="text-primary italic">Inner Happiness</span>
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
            A sanctuary where the precision of naturopathic science meets the ethereal serenity of yoga. We heal by harmonizing the five fundamental elements within you.
          </p>
          
          {/* Interaction Visual Description */}
          <div className="mt-16 flex flex-col items-center animate-bounce opacity-40">
            <span className="material-symbols-outlined text-4xl">expand_more</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Scroll to align your elements</p>
          </div>
        </div>
      </section>

      {/* Interactive Scroll Section */}
      <PanchaMahabhutaScroll />

      {/* Trust Bar / Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline text-2xl font-bold">5.0 Star Rating from 377+ Patients</p>
            </div>
            <div className="h-px flex-grow bg-surface-container-high mx-8 hidden lg:block"></div>
            <div className="flex -space-x-4 justify-center">
              <img alt="Patient" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDduph0s7AheIPwEFR4UokA2-dKsJ0tPxbPyKJoMfhS-D1WZ0_GoDhx0oyjZDS50Kabj1kbrDTGW1YvI9qZ1lSHJXr8H7Virq4QGUg_4PS8POSY49ln6BYxRhQ7hlLDaAO7ZdUcqSn5IrudDwu-kKRnS7X8NdKAe0rabwQfaUQZ623U8J8Y7t17y9HYyabTJQ4IG_WsHZGcZYhDUm_allumdzk2j5zNv17Cp3ilFgMleWLq3jNPERe8uS2TVou39L-roYvvOkR9LYc"/>
              <img alt="Patient" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHIV0rpYMtPxrSIgLBejzpWEN630Aei8UI88PGwHDFhCrUb070G-Z869LPECndh28UzoGWpGUHbk1yh2r2ubz5YIwX2jfpsWYjMR09nIN3zRP-YSUPFKXmvTSfAvUlOJZjf3iHZEkxRfeyFDMPvisxyTDOsR08KBia-JFJiMfuD9QJEcNN-KOeqM7t-10rI11-ExaqVNU4R4bxCLQZ9umC3B3FgoLfbIEGkCvPqWr45RhOR5Sbitc__0nnIwB_pByBR_JEpvSO4l4"/>
              <img alt="Patient" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkqPt0MS47KBIKvRIXc5JkhjwxWElCCS7SSMpTzkB5OvRlyW4xwTAL7nJFGRdj2asM7miBiqhnB_h8XQ3DU5-8l8SWww-Aw6CxliKR2yA28KIFmvLxHDSPWdtLvpmyPLsK7QSPWL_uGcVWmgsQM58uj9cpWSYOChwRZcwelhVZY3BgDs5Va1myszTdC8y0suOh7Gv2dm769ey0_xoVS8TdnLwrNWOb8WtUH7aDSaoe-kHbMgPogdekhQg0kmgRuihBUHwJeDOPaak"/>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container-low flex items-center justify-center text-[10px] font-bold">+374</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary/10 transition-all">
              <p className="font-body italic text-on-surface-variant mb-6">"Agamagizh changed my perspective on chronic fatigue. The elemental approach is scientific yet deeply spiritual."</p>
              <p className="font-headline text-sm font-bold">— Dr. Ananya Sharma</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary/10 transition-all">
              <p className="font-body italic text-on-surface-variant mb-6">"The yoga sessions here aren't just exercise; they are a recalibration of your soul. Truly a sanctuary."</p>
              <p className="font-headline text-sm font-bold">— Rajesh K. Raman</p>
            </div>
            <div className="p-8 rounded-xl bg-surface-container-low/50 border border-transparent hover:border-primary/10 transition-all">
              <p className="font-body italic text-on-surface-variant mb-6">"Finally, a clinic that doesn't feel clinical. It feels like coming home to yourself."</p>
              <p className="font-headline text-sm font-bold">— Meera Vasudevan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Bento Grid */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* About Card */}
            <Link to="#" className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container aspect-video md:aspect-auto flex flex-col justify-end p-8 transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 z-0">
                <img alt="Clinic Interior" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtlwHt2BKQwJf-XbyAUxr0Z8X5B3dgugDjQ94jAhH7rC2HSykxKa05hH5C5mSJPXxPAk6EWGZiPUwOjUnYBzzXNFPjPIpvm4rUA_nK13vi-Q02vcHHhPsO33GQeJjp0RLuRTs_bKdS1ad26PdaZ8CbzoLKoQY09gJ78EQN0PpdoODwuS-0AbEa_68uQd4m-GtQROcQYsX88nrjw2syJV59lyrWJjen5F5r97SZ-FTjHo6pFSAHnyM89nVLDtobw65FoFRYvG-DeH8"/>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-4">spa</span>
                <h3 className="font-headline text-2xl font-bold mb-2">Our Philosophy</h3>
                <p className="font-body text-sm opacity-80 mb-4">Learn about our journey to redefine holistic wellness.</p>
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">Explore <span className="material-symbols-outlined text-xs">arrow_forward</span></span>
              </div>
            </Link>
            
            {/* Services Card */}
            <Link to="#" className="group bg-primary text-white p-8 rounded-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-4xl">clinical_notes</span>
              <div>
                <h3 className="font-headline text-xl font-bold mb-2">Clinical Services</h3>
                <p className="font-body text-xs text-on-primary/80">From Acupuncture to Hydrotherapy.</p>
              </div>
            </Link>
            
            {/* Doctors Card */}
            <Link to="#" className="group bg-surface-container p-8 rounded-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-4xl text-secondary">medical_services</span>
              <div>
                <h3 className="font-headline text-xl font-bold mb-2">Practioners</h3>
                <p className="font-body text-xs text-on-surface-variant">Expertise in ancient wisdom.</p>
              </div>
            </Link>
            
            {/* Contact Card */}
            <Link to="#" className="md:col-span-4 bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:bg-surface-container">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-tertiary">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold">Find the Sanctuary</h3>
                  <p className="font-body text-sm text-on-surface-variant">Located in the heart of serenity, accessible to all seekers.</p>
                </div>
              </div>
              <button className="bg-on-surface text-surface py-3 px-8 rounded-full font-headline font-bold text-sm">Get Directions</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
