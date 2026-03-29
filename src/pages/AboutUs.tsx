import { ChevronDown, Sparkles, Sprout, Waves } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="bg-surface-container-lowest text-on-surface font-body selection:bg-primary/20 pt-24">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img
            alt="Agamagizh Logo Backdrop"
            className="w-[80%] max-w-4xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnxiyd_J_PRF8pFgZGB9P8kzyvfQU97FRDaAnLAIynf6-xq88edSdtzay7K3ejs_acx3vj1Vr2wT1aXQxwSGabX_d76AoOt_i-cUZ2Rn_CFK00oVWSSb-A-uvfk-FjAPl1GfV2BKOBHjiPiD0WjcsdUUuFMgnhdqrxmyrHnNQ2NFcczsfHLs964wP3LBX1Rp5nuVCUBFJcjfFoHSWB1CHcWjD9GJUfwIj62X1naAEr-wWdwF1POtOX4apLUfbFhnm1InnkfmkVcfU"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <span className="font-headline font-bold text-primary tracking-[0.2em] uppercase text-xs mb-6 block">
            The Clinical Sanctuary
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface leading-[1.1] mb-8 tracking-tight">
            Beyond Healing - <br />
            <span className="text-primary-dim">A Journey to Inner Happiness</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
            At Agamagizh, we don&apos;t just treat symptoms. We restore the soulful balance between your body,
            mind, and the five eternal elements.
          </p>
          <div className="mt-12 flex justify-center">
            <ChevronDown className="text-primary w-10 h-10 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Section 2: Our Essence */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-5">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
                The Soul of <br />
                <span className="text-primary">Wellness</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="p-12 bg-surface-container-low rounded-xl relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary flex items-center justify-center rounded-lg text-white font-headline font-bold text-2xl">
                  அ
                </div>
                <p className="text-xl md:text-2xl font-light text-on-surface leading-relaxed italic mb-6">
                  &quot;Agamagizh is a profound Tamil word - a synthesis of &apos;Agam&apos; (Inner) and
                  &apos;Magizh&apos; (Happiness).&quot;
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Our name reflects our clinical philosophy: that true health is not merely the absence of disease,
                  but the attainment of profound soulful joy. We serve as a sanctuary where clinical precision meets
                  the ethereal wisdom of ancient naturopathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Pillars */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Foundation of Balance</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-10 rounded-xl bg-white shadow-[0_20px_40px_rgba(45,51,53,0.03)] hover:shadow-[0_20px_40px_rgba(45,51,53,0.08)] transition-all duration-500 border-t-4 border-tertiary">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Sprout className="text-tertiary w-8 h-8" />
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-4">Nature-Based Healing</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Utilizing the medicinal power of the Earth (Prithvi) to detoxify and nourish the biological systems
                through botanical protocols.
              </p>
            </div>

            <div className="group p-10 rounded-xl bg-white shadow-[0_20px_40px_rgba(45,51,53,0.03)] hover:shadow-[0_20px_40px_rgba(45,51,53,0.08)] transition-all duration-500 border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Waves className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-4">Self-Healing Ability</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Empowering the body&apos;s innate &apos;Vis Medicatrix Naturae&apos; - the vital force that
                orchestrates recovery through movement and breath.
              </p>
            </div>

            <div className="group p-10 rounded-xl bg-white shadow-[0_20px_40px_rgba(45,51,53,0.03)] hover:shadow-[0_20px_40px_rgba(45,51,53,0.08)] transition-all duration-500 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Sparkles className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-4">The Five Elements</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Achieving metabolic equilibrium by balancing Space, Air, Fire, Water, and Earth within the human
                physiology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meet Our Visionaries */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Clinical Leadership</h2>
            <p className="text-on-surface-variant text-lg">
              Pioneering the future of integrative naturopathic medicine.
            </p>
          </div>

          <div className="space-y-32">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  alt="Dr. RA. Ragothaman"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-xl"
                  src="/images/dr-ragothaman.png"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="font-headline font-bold text-primary tracking-widest text-xs uppercase mb-4 block">
                  Founder
                </span>
                <h3 className="font-headline font-bold text-4xl text-on-surface mb-2">Dr. RA. Ragothaman</h3>
                <p className="text-primary font-bold mb-6">BNYS, MD</p>
                <p className="text-2xl font-light text-on-surface-variant leading-relaxed mb-8">
                  &quot;The Architect of Clinical Yoga&quot;
                </p>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Dr. Ragothaman bridges the gap between traditional Yogic sciences and evidence-based clinical
                    application. His work focuses on leveraging structural alignment and neuro-respiratory
                    synchronization to treat chronic metabolic disorders.
                  </p>
                  <p>
                    With specialized research in MD Clinical Yoga, he designs bespoke movement protocols that serve as
                    primary therapeutic interventions for systemic health.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  alt="Dr. R. Aarthi"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-xl"
                  src="/images/dr-aarthi.png"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="font-headline font-bold text-primary tracking-widest text-xs uppercase mb-4 block">
                  Co-Founder
                </span>
                <h3 className="font-headline font-bold text-4xl text-on-surface mb-2">Dr. R. Aarthi</h3>
                <p className="text-primary font-bold mb-6">BNYS, MD</p>
                <p className="text-2xl font-light text-on-surface-variant leading-relaxed mb-8">
                  &quot;The Specialist of Restorative Naturopathy&quot;
                </p>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Dr. Aarthi is a distinguished practitioner of restorative therapies, specializing in the scientific
                    application of fasting and botanical nutrition to activate cellular regeneration.
                  </p>
                  <p>
                    Her clinical expertise lies in identifying deep-seated toxic imbalances and guiding patients
                    through precise, nature-aligned recovery journeys that yield long-term physiological resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Lineage of Light */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-24"></div>

          <div className="text-center mb-24 relative z-10">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6 leading-tight">
              The Lineage of Light
            </h2>
            <p className="max-w-2xl mx-auto text-on-surface-variant">
              Tracing our evolution from timeless Vedic principles to a modern center of clinical excellence.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform -translate-x-1/2"></div>

            <div className="space-y-24">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 text-center md:text-right mb-8 md:mb-0">
                  <h4 className="font-headline font-bold text-2xl text-on-surface mb-3">Vedic Wisdom</h4>
                  <p className="text-on-surface-variant">
                    Foundational roots in ancient Siddhic and Yogic philosophies, establishing the principle of
                    &apos;Agam&apos; - the inner temple of health.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block border-4 border-surface-container-low box-content"></div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary hidden md:block border-4 border-surface-container-low box-content"></div>
                <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                  <h4 className="font-headline font-bold text-2xl text-on-surface mb-3">The Synthesis</h4>
                  <p className="text-on-surface-variant">
                    Integrating Western clinical diagnostics with time-tested nature cure protocols to provide a
                    data-driven path to wellness.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 text-center md:text-right mb-8 md:mb-0">
                  <h4 className="font-headline font-bold text-2xl text-on-surface mb-3">Global Clinical Evolution</h4>
                  <p className="text-on-surface-variant">
                    Emerging as a boutique sanctuary for lifestyle medicine, redefining the standards of personalized
                    healthcare in the 21st century.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary hidden md:block border-4 border-surface-container-low box-content"></div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-surface-container-lowest text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-8">Begin Your Restoration</h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Connect with our visionaries to discover your personalized path to inner happiness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold hover:shadow-lg transition-all">
              Schedule Consultation
            </button>
            <button className="border border-outline-variant text-on-surface px-10 py-4 rounded-full font-headline font-bold hover:bg-surface-container-low transition-all">
              Explore Treatments
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
