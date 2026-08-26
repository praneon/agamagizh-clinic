import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PanchaMahabhutaScroll } from '../components/PanchaMahabhutaScroll';
import { MorphingLogo } from '../components/MorphingLogo';
import { useLogoMorphProgress } from '../hooks/useLogoMorphProgress';
import { openChatPanel } from '../lib/chatPanel';
import { siteConfig } from '../siteConfig';

const patientReviews = [
  {
    quote: 'The communication was clear and effective.',
    reviewer: 'Papitha',
  },
  {
    quote: 'The clinic has good facilities and is very clean and hygienic.',
    reviewer: 'Sujitha Dass',
  },
  {
    quote: 'Doctors and therapists are caring and friendly.',
    reviewer: 'Arul Merlin',
  },
] as const;

export default function Home() {
  const heroLogoSlotRef = useRef<HTMLDivElement>(null);
  const dockLogoSlotRef = useRef<HTMLDivElement>(null);
  const dockAnchorRef = useRef<HTMLDivElement>(null);
  const logoMorphProgress = useLogoMorphProgress(heroLogoSlotRef, dockAnchorRef);

  return (
    <>
      <MorphingLogo heroSlotRef={heroLogoSlotRef} dockSlotRef={dockLogoSlotRef} progress={logoMorphProgress} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center pt-28 sm:pt-24 overflow-hidden">
        {/* Subtle Abstract Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary element-blob rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary element-blob rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary element-blob rounded-full opacity-5"></div>

        <div className="z-10 w-full text-center px-4 sm:px-6 mt-4 sm:mt-0">
          {/* Text sits above the logo so the travelling logo's path down to
              the Pancha Mahabhuta section never has to cross over it. */}
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-6">
            Agamagizh: Restoring <br/>
            <span className="text-primary italic">Inner Happiness</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
            A sanctuary where the precision of naturopathic science meets the ethereal serenity of yoga. We heal by harmonizing the five fundamental elements within you.
          </p>

          <div className="relative mb-10 flex w-full justify-center">
            <div className="relative flex justify-center h-56 w-56 sm:h-64 sm:w-64 md:h-[260px] md:w-[260px] lg:h-[320px] lg:w-[320px]">
              {/* Invisible — reserves the slot the MorphingLogo reads its start position from. */}
              <div ref={heroLogoSlotRef} className="absolute inset-0" />
              <div className="absolute -inset-4 bg-surface-container-low rounded-full -z-10 opacity-50 blur-xl"></div>
            </div>
          </div>

          {/* Interaction Visual Description */}
          <div className="flex flex-col items-center animate-bounce opacity-40">
            <span className="material-symbols-outlined text-4xl">expand_more</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Scroll to align your elements</p>
          </div>
        </div>
      </section>

      {/* Interactive Scroll Section */}
      <PanchaMahabhutaScroll
        dockLogoSlotRef={dockLogoSlotRef}
        dockAnchorRef={dockAnchorRef}
        logoRevealProgress={logoMorphProgress}
      />

      {/* Selected public patient reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start max-w-2xl">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="material-symbols-outlined text-error"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                ))}
              </div>
              <h2 className="font-headline text-3xl font-bold">Words from our patients</h2>
              <p className="font-body text-on-surface-variant mt-2">A selection of positive feedback shared on public review listings.</p>
            </div>
            <div className="h-px flex-grow bg-surface-container-high mx-8 hidden lg:block"></div>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 font-headline text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            >
              View on Google Maps
              <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientReviews.map((review) => (
              <figure
                key={review.reviewer}
                className="flex min-h-56 flex-col justify-between rounded-xl border border-transparent bg-surface-container-low/50 p-8 transition-all hover:border-primary/10"
              >
                <div>
                  <div className="mb-5 flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className="material-symbols-outlined text-lg text-error"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden="true"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <blockquote className="font-body text-lg italic leading-relaxed text-on-surface-variant">
                    “{review.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 font-headline text-sm font-bold">— {review.reviewer}</figcaption>
              </figure>
            ))}
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

      {/* Help & Support CTA */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto bg-on-surface rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-tertiary/10 blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              Have a Question?
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Browse answers on our Help Center, or chat with us directly and we'll get back to you right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://admin.agamagizhnaturecure.com/hc/agamagizh"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">help</span>
                Visit Help Center
              </a>
              <button
                onClick={() => openChatPanel()}
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">forum</span>
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
