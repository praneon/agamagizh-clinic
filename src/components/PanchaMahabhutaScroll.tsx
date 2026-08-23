import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, MotionValue } from 'motion/react';
import { Logo } from './Logo';
import { ElementAmbiance } from './ElementAmbiance';
import { ELEMENTS } from '../constants';

export type SectionState = 'entering' | 'active' | 'exiting' | 'none';

interface PanchaMahabhutaScrollProps {
  // Where the MorphingLogo reads its destination rect from — the logo
  // travels down from the hero and comes to rest here.
  dockLogoSlotRef?: React.RefObject<HTMLDivElement>;
  // A never-sticky element marking this section's top, used to compute the
  // scroll range the logo travels across. Must NOT be the sticky logo slot
  // itself — once that's pinned, its rect stops reflecting true scroll
  // position, corrupting the range on any resize mid-scroll.
  dockAnchorRef?: React.RefObject<HTMLDivElement>;
  // 0 at rest in the hero, 1 once docked — this section's own logo only
  // fades in over the last stretch, exactly as the travelling copy fades
  // out, so the two never appear onscreen together.
  logoRevealProgress?: MotionValue<number>;
}

export const PanchaMahabhutaScroll: React.FC<PanchaMahabhutaScrollProps> = ({
  dockLogoSlotRef,
  dockAnchorRef,
  logoRevealProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [sectionState, setSectionState] = useState<SectionState>('none');
  const unitsPerColor = 5; // 3 units hold + 2 units transition
  const totalUnits = unitsPerColor * 6;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Define colors for each section (exactly matching the SVG elements)
  const colors = [
    "#f5f5f0", // Intro
    "#8c6bbc", // Space
    "#959595", // Air
    "#41a3c2", // Water
    "#80c661", // Earth
    "#fab245", // Fire
  ];

  // 3:2 pacing per color (hold:transition) for smoother, longer blends.
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 3 / totalUnits, 5 / totalUnits, 8 / totalUnits, 10 / totalUnits, 13 / totalUnits, 15 / totalUnits, 18 / totalUnits, 20 / totalUnits, 23 / totalUnits, 25 / totalUnits, 1],
    [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2], colors[3], colors[3], colors[4], colors[4], colors[5], colors[5]]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const unit = latest * totalUnits;
    const sectionIndex = Math.min(5, Math.floor(unit / unitsPerColor));

    const sectionIds: Array<string | null> = [null, 'space', 'air', 'water', 'earth', 'fire'];
    setActiveElementId(sectionIds[sectionIndex]);
    setSectionState('active');
  });

  const handleElementClick = React.useCallback((id: string) => {
    setActiveElementId(id);
  }, []);

  // Fully visible whenever no external progress is supplied; otherwise
  // fades in over the same window the travelling logo fades out over.
  const alwaysVisible = useMotionValue(1);
  // Must match MorphingLogo's OPACITY_FADE_START exactly, or the two fades
  // won't line up and either overlap (double image) or gap (nothing shown).
  const logoOpacity = useTransform(logoRevealProgress ?? alwaysVisible, [0.985, 1], [0, 1]);

  const setContainerRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (dockAnchorRef) dockAnchorRef.current = node;
    },
    [dockAnchorRef]
  );

  return (
    <motion.div
      ref={setContainerRef}
      className="relative h-[900vh] shadow-inner"
      style={{ backgroundColor }}
    >
      {/* Sticky Logo Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <ElementAmbiance activeElementId={activeElementId} />
        <div className="relative w-full max-w-6xl h-full px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 pointer-events-auto">
          {/* Logo Section - Centered on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-none">
            <motion.div
              ref={dockLogoSlotRef}
              className="w-[240px] sm:w-[240px] md:w-[280px] lg:w-full lg:max-w-[420px]"
              style={{ opacity: logoOpacity }}
            >
              <Logo
                onElementClick={handleElementClick}
                activeElementId={activeElementId}
                sectionState={sectionState}
              />
            </motion.div>
          </div>

          {/* Info Section (Floating) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start flex-none">
            <div className="relative w-full max-w-md h-[340px] sm:h-[360px]">
              <motion.div
                key={activeElementId || 'intro'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 overflow-y-auto bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-white/40"
              >
                {!activeElementId ? (
                  <div className="space-y-4">
                    <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">The Foundation</span>
                    <h2 className="font-headline text-4xl font-bold">Pancha Mahabhuta</h2>
                    <p className="font-body text-on-surface-variant leading-relaxed">
                      The universe and the human body are composed of five fundamental elements. 
                      Scroll down to explore how these elements harmonize within you.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {ELEMENTS.filter(e => e.id === activeElementId).map(element => (
                      <div key={element.id} className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                            style={{ backgroundColor: `${element.color}20`, color: element.color }}
                          >
                            <span className="material-symbols-outlined text-2xl">
                              {element.id === 'space' && 'brightness_7'}
                              {element.id === 'air' && 'air'}
                              {element.id === 'fire' && 'local_fire_department'}
                              {element.id === 'water' && 'water_drop'}
                              {element.id === 'earth' && 'eco'}
                            </span>
                          </div>
                          <div>
                            <h2 className="font-headline text-3xl font-bold">{element.name}</h2>
                            <p className="text-sm font-medium text-primary italic">{element.sanskritName}</p>
                          </div>
                        </div>
                        <p className="font-body text-on-surface-variant leading-relaxed">
                          {element.description}
                        </p>
                        <div className="pt-4 flex gap-4">
                          <div className="flex-1 p-3 rounded-xl bg-surface-container-low/50 border border-primary/5">
                            <p className="text-[10px] uppercase tracking-wider font-bold opacity-50 mb-1">Sense</p>
                            <p className="text-sm font-bold">
                              {element.id === 'space' && 'Hearing'}
                              {element.id === 'air' && 'Touch'}
                              {element.id === 'fire' && 'Sight'}
                              {element.id === 'water' && 'Taste'}
                              {element.id === 'earth' && 'Smell'}
                            </p>
                          </div>
                          <div className="flex-1 p-3 rounded-xl bg-surface-container-low/50 border border-primary/5">
                            <p className="text-[10px] uppercase tracking-wider font-bold opacity-50 mb-1">Property</p>
                            <p className="text-sm font-bold">
                              {element.id === 'space' && 'Sound'}
                              {element.id === 'air' && 'Movement'}
                              {element.id === 'fire' && 'Heat'}
                              {element.id === 'water' && 'Fluidity'}
                              {element.id === 'earth' && 'Solidity'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Panels (Invisible, used for scroll height) */}
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Intro Panel</div>
      </div>
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Space Panel</div>
      </div>
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Air Panel</div>
      </div>
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Water Panel</div>
      </div>
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Earth Panel</div>
      </div>
      <div className="h-[150vh] flex items-center justify-center">
        <div className="opacity-0">Fire Panel</div>
      </div>
    </motion.div>
  );
};
