import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'motion/react';

interface MorphingLogoProps {
  // The hero's logo slot — where the travelling logo starts.
  heroSlotRef: React.RefObject<HTMLElement>;
  // The Pancha Mahabhuta section's logo slot — where it comes down to rest.
  dockSlotRef: React.RefObject<HTMLElement>;
  // 0 at rest in the hero, 1 once docked. Shared with the docked logo so
  // the handoff between the two never overlaps or gaps.
  progress: MotionValue<number>;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Position must have fully converged on the dock slot *before* the opacity
// crossfade (which starts at OPACITY_FADE_START) begins. Two things make
// this need a wide buffer, not just enough to zero out the hero-rect pull:
// the dock slot's own position:sticky container is still transitioning
// into its pinned state in this same scroll range, and its rect can read
// one frame stale right at that exact transition — so position needs
// several frames of margin to self-correct before anything becomes
// visible at that spot, not just to reach t=1.
const POSITION_LOCK_T = 0.6;
const OPACITY_FADE_START = 0.985;

// A single logo image that stays in sync with scroll: on every scroll frame
// it reads `progress` and the live on-screen rects of the hero slot and the
// docked slot, and lerps its own position/size between them.
//
// This listens to raw window scroll/resize events directly rather than
// motion's `useMotionValueEvent(progress, 'change', …)` — under rapid
// direction reversals that cross-component change-event relay can drop an
// update, leaving the overlay rendering a stale position even though
// `progress` itself has already settled on the correct value. Reading
// `progress.get()` fresh off the same event that drives it avoids that.
export const MorphingLogo: React.FC<MorphingLogoProps> = ({ heroSlotRef, dockSlotRef, progress }) => {
  const left = useMotionValue(0);
  const top = useMotionValue(0);
  const width = useMotionValue(0);
  const height = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const heroEl = heroSlotRef.current;
      const dockEl = dockSlotRef.current;
      if (!heroEl || !dockEl) return;

      const t = progress.get();
      const posT = Math.min(1, t / POSITION_LOCK_T);
      const heroRect = heroEl.getBoundingClientRect();
      const dockRect = dockEl.getBoundingClientRect();

      left.set(lerp(heroRect.left, dockRect.left, posT));
      top.set(lerp(heroRect.top, dockRect.top, posT));
      width.set(lerp(heroRect.width, dockRect.width, posT));
      height.set(lerp(heroRect.height, dockRect.height, posT));
    };

    update();

    let ticking = false;
    const onTick = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onTick, { passive: true });
    window.addEventListener('resize', onTick);
    const settleTimer = window.setTimeout(update, 300);

    return () => {
      window.removeEventListener('scroll', onTick);
      window.removeEventListener('resize', onTick);
      window.clearTimeout(settleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hand off to the docked, interactive logo right as it arrives — fades
  // out over the same last stretch the docked copy fades in over.
  const opacity = useTransform(progress, [OPACITY_FADE_START, 1], [1, 0]);

  return (
    <motion.div
      aria-hidden
      className="fixed z-40 pointer-events-none"
      style={{ left, top, width, height, opacity }}
    >
      {/* p-4 matches Logo.tsx's own container padding exactly, so the
          visible ring is the same diameter as the docked logo at handoff —
          without it the two don't coincide and the crossfade ghosts. */}
      <img alt="" className="block w-full h-full object-contain p-4 box-border" src="/Logo.svg" />
    </motion.div>
  );
};
