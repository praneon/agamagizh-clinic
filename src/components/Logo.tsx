import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimate } from 'motion/react';
import { SectionState } from './PanchaMahabhutaScroll';

interface LogoProps {
  onElementClick: (elementId: string) => void;
  activeElementId?: string | null;
  sectionState?: SectionState;
}

export const Logo: React.FC<LogoProps> = ({
  onElementClick,
  activeElementId,
  sectionState = 'none',
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [scope, animate] = useAnimate();
  const isInitialRender = useRef(true);
  const prevState = useRef({ activeElementId, sectionState });

  useEffect(() => {
    fetch('/Logo.svg')
      .then((res) => res.text())
      .then((text) => {
        // Parse SVG and remove ring nodes deterministically before render.
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, 'image/svg+xml');

        // Remove known ring nodes from both grouped and ungrouped variants.
        svgDoc.querySelectorAll('#g114, #path114').forEach((node) => node.remove());

        // Fallback for unnamed outer ring variants.
        svgDoc
          .querySelectorAll('ellipse[fill="none"][stroke="#000000"][stroke-width="6.5"]')
          .forEach((node) => node.remove());

        const rootSvg = svgDoc.querySelector('svg');
        if (rootSvg) {
          rootSvg.setAttribute('width', '100%');
          rootSvg.setAttribute('height', '100%');
        }

        const serialized = new XMLSerializer().serializeToString(svgDoc);
        setSvgContent(serialized);
      })
      .catch((err) => console.error('Error loading logo:', err));
  }, []);

  useEffect(() => {
    if (!svgContent || !scope.current) return;

    // Set up interactions for paths ONLY when SVG content changes
    const pathIds = ['path12', 'path13', 'path14', 'path10', 'path11'];
    const idToElementMap: Record<string, string> = {
      path12: 'space',
      path13: 'air',
      path14: 'fire',
      path10: 'water',
      path11: 'earth',
    };

    pathIds.forEach((id) => {
      const path = scope.current.querySelector(`#${id}`) as SVGPathElement;
      if (path) {
        path.style.cursor = 'pointer';
        path.style.transformOrigin = 'center';
        path.onclick = (e) => {
          e.stopPropagation();
          onElementClick(idToElementMap[id]);
        };
      }
    });

    // Keep outer ring hidden at all times.
    const ringGroup = scope.current.querySelector('#g114') as SVGElement;
    if (ringGroup) {
      ringGroup.style.display = 'none';
    }
    const ring = scope.current.querySelector('#path114') as SVGElement;
    if (ring) {
      ring.style.display = 'none';
      ring.style.transformOrigin = 'center';
    }
  }, [svgContent, onElementClick, scope]);

  useEffect(() => {
    if (!svgContent || !scope.current) return;

    // Only run animations if state has changed
    const activeIdChanged = prevState.current.activeElementId !== activeElementId;
    const sectionStateChanged = prevState.current.sectionState !== sectionState;

    if (!activeIdChanged && !sectionStateChanged && !isInitialRender.current) return;

    const pathIds = ['path12', 'path13', 'path14', 'path10', 'path11'];
    const idToElementMap: Record<string, string> = {
      path12: 'space',
      path13: 'air',
      path14: 'fire',
      path10: 'water',
      path11: 'earth',
    };

    // 1. Handle Element Animations (Paths)
    pathIds.forEach((id) => {
      const isActive = activeElementId === idToElementMap[id];
      const isAnyActive = activeElementId !== null;

      animate(
        `#${id}`,
        {
          opacity: isAnyActive ? (isActive ? 1 : 0.4) : 1,
          filter: isActive
            ? 'brightness(1.3) drop-shadow(0 0 30px rgba(255,255,255,0.9)) drop-shadow(0 0 10px rgba(255,255,255,1))'
            : 'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))',
          scale: isActive ? 1.12 : 1,
        },
        {
          duration: 0.4,
          ease: 'easeOut',
        }
      );
    });

    prevState.current = { activeElementId, sectionState };
    isInitialRender.current = false;
  }, [svgContent, activeElementId, sectionState, animate, scope]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="logo-container w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center p-4"
      ref={scope}
      dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
    />
  );
};
