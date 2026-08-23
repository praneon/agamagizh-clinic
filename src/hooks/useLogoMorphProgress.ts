import { useEffect, type RefObject } from 'react';
import { useMotionValue, MotionValue } from 'motion/react';

/**
 * 0 while the hero logo slot is still at its resting position, 1 once it has
 * scrolled all the way up to where the dock anchor naturally sits.
 * Shared by MorphingLogo (which uses it to lerp position/size) and the
 * Pancha Mahabhuta section (which uses it to know exactly when to reveal
 * its own logo) so the handoff between the two never overlaps or gaps.
 *
 * `dockAnchorRef` must point at an element that is never `position: sticky`
 * — once the docked logo's own slot becomes sticky-pinned, its rect no
 * longer reflects its true document position.
 *
 * The scroll range is recomputed from scratch on every scroll frame rather
 * than cached, so there's no stale-range state that can ever drift or get
 * stuck on a "garbage" value — whatever the two elements' real positions
 * are right now is always what drives the number.
 */
export function useLogoMorphProgress(
  heroSlotRef: RefObject<HTMLElement>,
  dockAnchorRef: RefObject<HTMLElement>
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const heroEl = heroSlotRef.current;
      const anchorEl = dockAnchorRef.current;
      if (!heroEl || !anchorEl) return;

      const scrollY = window.scrollY;
      const start = heroEl.getBoundingClientRect().top + scrollY;
      const end = Math.max(
        anchorEl.getBoundingClientRect().top + scrollY,
        start + 1
      );

      const t = Math.min(1, Math.max(0, (scrollY - start) / (end - start)));
      progress.set(t);
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
    // Re-measure once more shortly after mount in case fonts/images
    // settling shifted layout after the first paint.
    const settleTimer = window.setTimeout(update, 300);

    return () => {
      window.removeEventListener('scroll', onTick);
      window.removeEventListener('resize', onTick);
      window.clearTimeout(settleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return progress;
}
