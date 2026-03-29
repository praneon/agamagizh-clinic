import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Logo } from './Logo';
import { ELEMENTS } from '../constants';

export type SectionState = 'entering' | 'active' | 'exiting' | 'none';

export const PanchaMahabhutaScroll: React.FC = () => {
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

  return (
    <motion.div 
      ref={containerRef} 
      className="relative h-[900vh] shadow-inner"
      style={{ backgroundColor }}
    >
      {/* Sticky Logo Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full max-w-6xl px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 pointer-events-auto">
          {/* Logo Section - Centered on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[690px]">
              <Logo 
                onElementClick={handleElementClick} 
                activeElementId={activeElementId} 
                sectionState={sectionState}
              />
            </div>
          </div>

          {/* Info Section (Floating) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <motion.div
                key={activeElementId || 'intro'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-white/40"
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
