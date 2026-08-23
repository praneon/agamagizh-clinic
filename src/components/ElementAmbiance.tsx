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

// All five layers stay mounted for a smooth crossfade, but each one's
// animated children keep running their `infinite` keyframe loops even
// while fully transparent — five layers' worth of continuous, often
// blur-heavy repaint work at once. Under fast scroll that's enough
// compositor load to visibly flicker the fixed navbar's backdrop-blur
// above it. `data-active="false"` (paired with the CSS rule in
// index.css) freezes an inactive layer's animations entirely so only
// the current element is doing any work.
const layerProps = (active: boolean) => ({
  className: 'absolute inset-0 ambiance-layer',
  style: layerStyle(active),
  'data-active': active,
});

// A seamless-tiling strip: the shape is drawn twice, side by side, and the
// whole thing scrolls left by exactly one copy's width so it loops cleanly.
// Used for both water's waves and air's wind ribbons.
const Strip: React.FC<{
  d: string;
  viewBox: string;
  bottom?: string;
  top?: string;
  height: number;
  opacity: number;
  duration: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  animationName?: string;
}> = ({ d, viewBox, bottom, top, height, opacity, duration, fill, stroke, strokeWidth, animationName = 'ambiance-wave-scroll' }) => (
  <div
    className="absolute left-0 w-[200%]"
    style={{
      bottom,
      top,
      height,
      opacity,
      animation: `${animationName} ${duration}s linear infinite`,
    }}
  >
    <svg viewBox={viewBox} width="100%" height="100%" preserveAspectRatio="none">
      <path d={d} fill={fill ?? 'none'} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  </div>
);

export const ElementAmbiance: React.FC<ElementAmbianceProps> = ({ activeElementId }) => {
  // ── Space (Akasha): nebula glow, starfield, occasional shooting stars, a
  // faint slow-rotating orbit ring for a sense of cosmic depth.
  const stars = useMemo(
    () =>
      seeded(1, 18, (i, r) => ({
        top: `${(r * 90 + 5).toFixed(1)}%`,
        left: `${((i * 71 + r * 40) % 96 + 2).toFixed(1)}%`,
        size: 1.5 + r * 2.5,
        delay: (r * 4).toFixed(2),
        duration: (2.6 + r * 2.8).toFixed(2),
      })),
    []
  );
  const shootingStars = useMemo(
    () =>
      seeded(11, 3, (i, r) => ({
        top: `${(8 + i * 22 + r * 10).toFixed(1)}%`,
        left: `${(55 + r * 35).toFixed(1)}%`,
        length: 70 + r * 50,
        delay: (i * 6 + r * 5).toFixed(2),
        duration: (5 + r * 2).toFixed(2),
      })),
    []
  );

  // ── Air (Vayu): curling wind ribbons sweeping through, thin current
  // wisps, and a few tumbling leaves for a bit of playful life.
  const ribbons = useMemo(
    () =>
      seeded(2, 3, (i, r) => ({
        top: `${(i * 24 + r * 14 + 10).toFixed(1)}%`,
        height: 30 + r * 20,
        duration: (10 + r * 6).toFixed(2),
        opacity: 0.22 + r * 0.16,
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
  const leaves = useMemo(
    () =>
      seeded(12, 6, (i, r) => ({
        top: `${(i * 15 + r * 10 + 6).toFixed(1)}%`,
        size: 8 + r * 6,
        delay: (r * 8).toFixed(2),
        duration: (7 + r * 4).toFixed(2),
        hue: 25 + r * 20,
      })),
    []
  );

  // ── Fire (Agni): a layered flame silhouette at the base, rising embers,
  // and thin heat-shimmer lines above it.
  const embers = useMemo(
    () =>
      seeded(3, 18, (i, r) => ({
        left: `${((i * 47 + r * 30) % 92 + 4).toFixed(1)}%`,
        size: 3 + r * 4,
        delay: (r * 5).toFixed(2),
        duration: (3.4 + r * 2.8).toFixed(2),
      })),
    []
  );
  const shimmers = useMemo(
    () =>
      seeded(13, 6, (i, r) => ({
        left: `${(15 + i * 13 + r * 8).toFixed(1)}%`,
        width: 40 + r * 40,
        delay: (r * 5).toFixed(2),
        duration: (3.5 + r * 2).toFixed(2),
      })),
    []
  );

  // ── Water (Jala): layered waves with a bright foam crest, rising
  // bubbles, and underwater light-ray caustics.
  const bubbles = useMemo(
    () =>
      seeded(14, 12, (i, r) => ({
        left: `${((i * 53 + r * 30) % 92 + 4).toFixed(1)}%`,
        size: 3 + r * 5,
        delay: (r * 6).toFixed(2),
        duration: (5 + r * 4).toFixed(2),
      })),
    []
  );

  // ── Earth (Prithvi): a rolling-hill ground silhouette with swaying
  // grass, warm pollen motes, and drifting fallen leaves.
  const grass = useMemo(
    () =>
      seeded(4, 22, (i, r) => ({
        left: `${((i * 43 + r * 20) % 96 + 1).toFixed(1)}%`,
        h: 10 + r * 14,
        delay: (r * 3).toFixed(2),
        duration: (2.6 + r * 1.6).toFixed(2),
      })),
    []
  );
  const motes = useMemo(
    () =>
      seeded(4, 10, (i, r) => ({
        top: `${(r * 65 + 8).toFixed(1)}%`,
        left: `${((i * 61 + r * 20) % 92 + 4).toFixed(1)}%`,
        size: 3 + r * 4,
        delay: (r * 5).toFixed(2),
        duration: (5 + r * 4).toFixed(2),
      })),
    []
  );
  const fallingLeaves = useMemo(
    () =>
      seeded(15, 5, (i, r) => ({
        left: `${(10 + i * 19 + r * 10).toFixed(1)}%`,
        size: 8 + r * 5,
        delay: (i * 4 + r * 6).toFixed(2),
        duration: (9 + r * 5).toFixed(2),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Space */}
      <div {...layerProps(activeElementId === 'space')}>
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '70vmin',
            height: '70vmin',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.22) 0%, transparent 45%), radial-gradient(circle at 62% 65%, rgba(255,120,210,0.14) 0%, transparent 50%), radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
            filter: 'blur(30px)',
            animation: 'ambiance-glow-breathe 9s ease-in-out infinite, ambiance-nebula-spin 90s linear infinite',
          }}
        />
        {/* Faint orbit ring for a sense of cosmic motion */}
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '58vmin',
            height: '38vmin',
            border: '1px solid rgba(255,255,255,0.16)',
            animation: 'ambiance-orbit-spin 70s linear infinite',
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
        {shootingStars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: s.top,
              left: s.left,
              width: s.length,
              height: 2,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.95), transparent)',
              transformOrigin: 'left center',
              animation: `ambiance-shooting-star ${s.duration}s ease-in ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Air */}
      <div {...layerProps(activeElementId === 'air')}>
        {ribbons.map((r, i) => (
          <Strip
            key={i}
            top={r.top}
            height={r.height}
            opacity={r.opacity}
            duration={Number(r.duration)}
            animationName="ambiance-ribbon-flow"
            viewBox="0 0 800 100"
            d="M0,50 C60,10 120,90 200,50 C280,10 340,90 400,50 C460,10 520,90 600,50 C680,10 740,90 800,50 C860,10 920,90 1000,50 C1080,10 1140,90 1200,50 C1280,10 1340,90 1400,50 C1460,10 1520,90 1600,50"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth={4}
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
        {leaves.map((l, i) => (
          <span
            key={i}
            className="absolute rounded-[70%_30%_70%_30%]"
            style={{
              top: l.top,
              left: 0,
              width: l.size,
              height: l.size * 0.75,
              background: `hsla(${l.hue}, 70%, 75%, 0.55)`,
              animation: `ambiance-leaf-tumble ${l.duration}s ease-in-out ${l.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Fire */}
      <div {...layerProps(activeElementId === 'fire')}>
        {/* Hot glow behind the flame */}
        <div
          className="absolute left-1/2 bottom-0 rounded-[50%]"
          style={{
            width: '95%',
            height: '32%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(closest-side, rgba(255,140,60,0.5), transparent 75%)',
            filter: 'blur(20px)',
            animation: 'ambiance-heat-pulse 4.5s ease-in-out infinite',
            transformOrigin: 'bottom center',
          }}
        />
        {/* Layered flame silhouette */}
        <svg
          className="absolute left-1/2 bottom-0"
          style={{ transform: 'translateX(-50%)', transformOrigin: 'bottom center' }}
          width="60%"
          height="42%"
          viewBox="0 0 100 140"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="flame-outer" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#c1272d" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#e8622a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffcf6b" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="flame-inner" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#e8622a" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ffb347" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#fff5cc" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M50,8 C24,42 16,72 30,98 C24,92 20,108 32,122 C42,134 58,134 68,122 C80,108 76,92 70,98 C84,72 76,42 50,8 Z"
            fill="url(#flame-outer)"
            style={{ animation: 'ambiance-flame-flicker 2.6s ease-in-out infinite', transformOrigin: 'bottom center' }}
          />
          <path
            d="M50,34 C34,58 30,78 40,98 C36,94 34,104 42,114 C48,122 58,122 64,114 C70,104 68,94 64,98 C74,78 68,58 50,34 Z"
            fill="url(#flame-inner)"
            style={{ animation: 'ambiance-flame-flicker 2s ease-in-out 0.3s infinite', transformOrigin: 'bottom center' }}
          />
        </svg>
        {embers.map((e, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              background: 'radial-gradient(circle, #fff5cc 0%, #ff8a3d 55%, transparent 75%)',
              animation: `ambiance-rise ${e.duration}s ease-in ${e.delay}s infinite`,
            }}
          />
        ))}
        {shimmers.map((s, i) => (
          <span
            key={i}
            className="absolute bottom-[28%] h-px rounded-full"
            style={{
              left: s.left,
              width: s.width,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              filter: 'blur(1px)',
              animation: `ambiance-shimmer-rise ${s.duration}s ease-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Water */}
      <div {...layerProps(activeElementId === 'water')}>
        {/* Deep wave bodies for real contrast against the teal background */}
        <Strip
          bottom="-4%"
          height={110}
          opacity={0.4}
          duration={21}
          viewBox="0 0 800 110"
          d="M0,55 C100,20 150,90 250,55 C350,20 400,90 500,55 C600,20 650,90 750,55 C800,38 800,38 800,38 L800,110 L0,110 Z M800,55 C900,20 950,90 1050,55 C1150,20 1200,90 1300,55 C1400,20 1450,90 1550,55 L1550,110 L800,110 Z"
          fill="rgba(6,48,66,0.4)"
        />
        <Strip
          bottom="-2%"
          height={80}
          opacity={0.5}
          duration={14}
          viewBox="0 0 800 80"
          d="M0,40 C100,10 150,70 250,40 C350,10 400,70 500,40 C600,10 650,70 750,40 C800,25 800,25 800,25 L800,80 L0,80 Z M800,40 C900,10 950,70 1050,40 C1150,10 1200,70 1300,40 C1400,10 1450,70 1550,40 L1550,80 L800,80 Z"
          fill="rgba(10,70,92,0.45)"
        />
        {/* Bright foam crest riding the front wave */}
        <Strip
          bottom="34%"
          height={80}
          opacity={0.85}
          duration={14}
          viewBox="0 0 800 80"
          d="M0,40 C100,10 150,70 250,40 C350,10 400,70 500,40 C600,10 650,70 750,40 C800,25 800,25 800,25 M800,40 C900,10 950,70 1050,40 C1150,10 1200,70 1300,40 C1400,10 1450,70 1550,40"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth={3}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '14%',
            left: '28%',
            width: 140,
            height: 70,
            background: 'radial-gradient(closest-side, rgba(255,255,255,0.6), transparent 75%)',
            filter: 'blur(10px)',
            animation: 'ambiance-caustic 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '26%',
            left: '60%',
            width: 110,
            height: 60,
            background: 'radial-gradient(closest-side, rgba(255,255,255,0.5), transparent 75%)',
            filter: 'blur(10px)',
            animation: 'ambiance-caustic 7.5s ease-in-out 1.2s infinite',
          }}
        />
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-white/70"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.1) 70%)',
              animation: `ambiance-bubble-rise ${b.duration}s ease-in ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Earth */}
      <div {...layerProps(activeElementId === 'earth')}>
        {/* Rolling-hill ground silhouette */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          height="30%"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,26 C15,12 35,10 50,20 C65,8 85,6 100,18 L100,40 L0,40 Z"
            fill="rgba(58,42,20,0.35)"
          />
          <path
            d="M0,34 C20,24 40,26 55,32 C72,22 88,24 100,30 L100,40 L0,40 Z"
            fill="rgba(42,58,24,0.4)"
          />
        </svg>
        {/* Swaying grass along the ridge */}
        {grass.map((g, i) => (
          <span
            key={i}
            className="absolute bottom-[26%] rounded-t-full"
            style={{
              left: g.left,
              width: 2,
              height: g.h,
              background: 'rgba(46,74,26,0.55)',
              transformOrigin: 'bottom center',
              animation: `ambiance-grass-sway ${g.duration}s ease-in-out ${g.delay}s infinite`,
            }}
          />
        ))}
        {motes.map((m, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: m.top,
              left: m.left,
              width: m.size,
              height: m.size,
              background: 'rgba(255,224,150,0.65)',
              filter: 'blur(0.5px)',
              animation: `ambiance-float ${m.duration}s ease-in-out ${m.delay}s infinite`,
            }}
          />
        ))}
        {fallingLeaves.map((l, i) => (
          <span
            key={i}
            className="absolute top-0 rounded-[70%_30%_70%_30%]"
            style={{
              left: l.left,
              width: l.size,
              height: l.size * 0.75,
              background: 'rgba(196,120,44,0.6)',
              animation: `ambiance-leaf-fall ${l.duration}s linear ${l.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
