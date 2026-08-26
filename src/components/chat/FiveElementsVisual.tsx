import { type ComponentType } from 'react';
import { Orbit, Wind, Flame, Droplets, Mountain } from 'lucide-react';
import { ELEMENTS } from '../../constants';

// Same 5 elements, colors, and icons as the homepage Pancha Mahabhuta
// section (src/constants.ts) — arranged in a pentagon around a central
// meditation figure instead of the homepage's scroll-driven layout.
// Angles are measured clockwise from 12 o'clock so this is a percentage-
// based orbit, not hardcoded pixel coordinates that would break on resize.
const ORBIT_RADIUS_PERCENT = 42;

const ELEMENT_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Orbit,
  Wind,
  Flame,
  Droplets,
  Mountain,
};

const ELEMENT_ANGLES: Record<string, number> = {
  space: 0, // Ether — top
  air: 72, // upper right
  water: 144, // lower right
  earth: 216, // lower left
  fire: 288, // upper left
};

function orbitPosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + ORBIT_RADIUS_PERCENT * Math.sin(rad)}%`,
    top: `${50 - ORBIT_RADIUS_PERCENT * Math.cos(rad)}%`,
  };
}

// Minimal line-art seated meditation figure — no such asset exists in the
// repo yet, so this is a small hand-drawn SVG rather than an emoji or a
// stock icon, per the brief.
const MeditationFigure = () => (
  <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" aria-hidden="true">
    <circle cx="32" cy="16" r="7" stroke="var(--color-primary-fixed)" strokeWidth="2" />
    <path
      d="M32 23v8M18 46c1-8 7-13 14-13s13 5 14 13M13 50c3-2 6-3 9-3M51 50c-3-2-6-3-9-3M20 50c2-3 5-4 12-4s10 1 12 4"
      stroke="var(--color-primary-fixed)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FiveElementsVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[240px]" aria-hidden="true">
      {/* Soft blurred aura behind the figure */}
      <div
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 motion-safe:animate-[chat-breathe_7s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--color-primary) 26%, transparent), transparent 65%), radial-gradient(circle at 65% 60%, color-mix(in srgb, #41a3c2 22%, transparent), transparent 65%), radial-gradient(circle at 50% 80%, color-mix(in srgb, #80c661 18%, transparent), transparent 60%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Dashed orbit ring */}
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20" />

      {/* Central figure */}
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-[0_8px_24px_rgba(89,72,211,0.14)] ring-1 ring-white/60 backdrop-blur">
        <MeditationFigure />
      </div>

      {ELEMENTS.map((element) => {
        const pos = orbitPosition(ELEMENT_ANGLES[element.id] ?? 0);
        const Icon = ELEMENT_ICONS[element.icon];
        return (
          <div
            key={element.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-transform duration-300 hover:-translate-y-[calc(50%+2px)]"
            style={pos}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm ring-1 ring-white/70"
              style={{ backgroundColor: `${element.color}1f`, color: element.color }}
            >
              {Icon && <Icon className="h-[18px] w-[18px]" />}
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.14em]"
              style={{ color: element.color }}
            >
              {element.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
