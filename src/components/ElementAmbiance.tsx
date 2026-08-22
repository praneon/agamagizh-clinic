import React, { useMemo } from 'react';

interface ElementAmbianceProps {
  activeElementId: string | null;
}

// Deterministic pseudo-random so particle layout is stable across re-renders
// without needing state or a seeded RNG dependency.
const seeded = <T,>(seed: number, count: number, fn: (i: number, r: number) => T): T[] =>
  Array.from({ length: count }, (_, i) => {
    const r = ((i * 9301 + 49297 + seed * 233) % 233280) / 233280;
    return fn(i, r);
  });

const layerStyle = (active: boolean): React.CSSProperties => ({
  opacity: active ? 1 : 0,
  transition: 'opacity 1.4s ease-out',
});

// A single seamless-tiling wave: the path is drawn twice, side by side, and
// the whole strip scrolls left by exactly one copy's width so it loops cleanly.
const Wave: React.FC<{ bottom: string; opacity: number; height: number; duration: number; color: string }> = ({
  bottom,
  opacity,
  height,
  duration,
  color,
}) => (
  <div
    className="absolute left-0 w-[200%]"
    style={{
      bottom,
      height,
      opacity,
      animation: `ambiance-wave-scroll ${duration}s linear infinite`,
    }}
  >
    <svg viewBox="0 0 800 80" width="100%" height="100%" preserveAspectRatio="none">
      <path
        d="M0,40 C100,10 150,70 250,40 C350,10 400,70 500,40 C600,10 650,70 750,40 C800,25 800,25 800,25 L800,80 L0,80 Z M800,40 C900,10 950,70 1050,40 C1150,10 1200,70 1300,40 C1400,10 1450,70 1550,40 L1550,80 L800,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const ElementAmbiance: React.FC<ElementAmbianceProps> = ({ activeElementId }) => {
  // Space (Akasha): a hushed void — a slow nebula glow behind a scatter of stars.
  const stars = useMemo(
    () =>
      seeded(1, 16, (i, r) => ({
        top: `${(r * 90 + 5).toFixed(1)}%`,
        left: `${((i * 71 + r * 40) % 96 + 2).toFixed(1)}%`,
        size: 1.5 + r * 2.5,
        delay: (r * 4).toFixed(2),
        duration: (2.6 + r * 2.8).toFixed(2),
      })),
    []
  );

  // Air (Vayu): broad diagonal gusts sweeping through, plus thin current lines.
  const gusts = useMemo(
    () =>
      seeded(2, 3, (i, r) => ({
        top: `${(i * 26 + r * 14 + 8).toFixed(1)}%`,
        width: 26 + r * 10,
        delay: (r * 5).toFixed(2),
        duration: (7 + r * 3).toFixed(2),
      })),
    []
  );
  const currents = useMemo(
    () =>
      seeded(5, 5, (i, r) => ({
        top: `${(i * 16 + r * 14 + 30).toFixed(1)}%`,
        width: 90 + r * 120,
        delay: (r * 6).toFixed(2),
        duration: (9 + r * 6).toFixed(2),
      })),
    []
  );

  // Fire (Agni): a warm glow at the base with embers lifting off it.
  const embers = useMemo(
    () =>
      seeded(3, 16, (i, r) => ({
        left: `${((i * 47 + r * 30) % 92 + 4).toFixed(1)}%`,
        size: 3 + r * 4,
        delay: (r * 5).toFixed(2),
        duration: (3.6 + r * 3).toFixed(2),
      })),
    []
  );

  // Earth (Prithvi): layered ground tones with pollen drifting above them.
  const motes = useMemo(
    () =>
      seeded(4, 10, (i, r) => ({
        top: `${(r * 70 + 8).toFixed(1)}%`,
        left: `${((i * 61 + r * 20) % 92 + 4).toFixed(1)}%`,
        size: 3 + r * 4,
        delay: (r * 5).toFixed(2),
        duration: (5 + r * 4).toFixed(2),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Space */}
      <div className="absolute inset-0" style={layerStyle(activeElementId === 'space')}>
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '70vmin',
            height: '70vmin',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.22) 0%, transparent 45%), radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
            filter: 'blur(30px)',
            animation: 'ambiance-glow-breathe 9s ease-in-out infinite, ambiance-nebula-spin 90s linear infinite',
          }}
        />
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              boxShadow: '0 0 6px 1px rgba(255,255,255,0.8)',
              animation: `ambiance-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Air */}
      <div className="absolute inset-0" style={layerStyle(activeElementId === 'air')}>
        {gusts.map((g, i) => (
          <span
            key={i}
            className="absolute top-0 h-full"
            style={{
              left: 0,
              width: `${g.width}%`,
              background:
                'linear-gradient(100deg, transparent, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.22) 55%, transparent)',
              animation: `ambiance-gust-sweep ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          />
        ))}
        {currents.map((w, i) => (
          <span
            key={i}
            className="absolute h-px rounded-full bg-white/60"
            style={{
              top: w.top,
              left: '-20%',
              width: w.width,
              filter: 'blur(1px)',
              animation: `ambiance-wisp-drift ${w.duration}s linear ${w.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Fire */}
      <div className="absolute inset-0" style={layerStyle(activeElementId === 'fire')}>
        <div
          className="absolute left-1/2 bottom-0 rounded-[50%]"
          style={{
            width: '90%',
            height: '35%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(closest-side, rgba(255,214,140,0.55), transparent 75%)',
            filter: 'blur(18px)',
            animation: 'ambiance-heat-pulse 4.5s ease-in-out infinite',
            transformOrigin: 'bottom center',
          }}
        />
        {embers.map((e, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              background: 'radial-gradient(circle, #fff3d6 0%, #fab245 55%, transparent 75%)',
              animation: `ambiance-rise ${e.duration}s ease-in ${e.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Water */}
      <div className="absolute inset-0" style={layerStyle(activeElementId === 'water')}>
        <Wave bottom="-2%" opacity={0.35} height={70} duration={13} color="rgba(255,255,255,0.28)" />
        <Wave bottom="-6%" opacity={0.28} height={90} duration={19} color="rgba(255,255,255,0.18)" />
        <div
          className="absolute rounded-full"
          style={{
            top: '18%',
            left: '30%',
            width: 120,
            height: 60,
            background: 'radial-gradient(closest-side, rgba(255,255,255,0.5), transparent 75%)',
            filter: 'blur(10px)',
            animation: 'ambiance-caustic 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '32%',
            left: '62%',
            width: 90,
            height: 50,
            background: 'radial-gradient(closest-side, rgba(255,255,255,0.4), transparent 75%)',
            filter: 'blur(10px)',
            animation: 'ambiance-caustic 7.5s ease-in-out 1.2s infinite',
          }}
        />
      </div>

      {/* Earth */}
      <div className="absolute inset-0" style={layerStyle(activeElementId === 'earth')}>
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: '30%',
            background: 'linear-gradient(180deg, transparent, rgba(60,45,20,0.16))',
          }}
        />
        <div
          className="absolute left-[-10%] bottom-[-6%] rounded-[50%]"
          style={{ width: '55%', height: '26%', background: 'rgba(60,45,20,0.12)', filter: 'blur(14px)' }}
        />
        <div
          className="absolute right-[-8%] bottom-[-8%] rounded-[50%]"
          style={{ width: '45%', height: '22%', background: 'rgba(60,45,20,0.14)', filter: 'blur(14px)' }}
        />
        {motes.map((m, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/55"
            style={{
              top: m.top,
              left: m.left,
              width: m.size,
              height: m.size,
              filter: 'blur(0.5px)',
              animation: `ambiance-float ${m.duration}s ease-in-out ${m.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
