'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

const TRAIL_COUNT = 7;
const BURST_PARTICLE_COUNT = 16;
const BURST_DURATION_MS = 1100;
const MAX_ACTIVE_BURSTS = 12;

type StarParticle = {
  id: string;
  x: number;
  y: number;
  z: number;
  rx: string;
  ry: string;
  rz: string;
  size: number;
  delay: number;
  duration: number;
  scaleFrom: number;
  scaleTo: number;
  color: string;
  variant: 1 | 2 | 3;
};

type StarBurst = {
  id: number;
  x: number;
  y: number;
  particles: StarParticle[];
};

const PARTICLE_COLORS = [
  'color-mix(in oklch, var(--primary) 72%, white)',
  'color-mix(in oklch, var(--secondary) 75%, white)',
  'color-mix(in oklch, var(--accent) 70%, white)',
] as const;

export function CursorTrail() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const burstTimeoutsRef = useRef<number[]>([]);
  const burstIdRef = useRef(0);
  const pointerRef = useRef({ x: -100, y: -100 });
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [burstEnabled, setBurstEnabled] = useState(false);
  const [bursts, setBursts] = useState<StarBurst[]>([]);

  const createStarBurst = (x: number, y: number): StarBurst => {
    const id = burstIdRef.current;
    burstIdRef.current += 1;

    const particles = Array.from({ length: BURST_PARTICLE_COUNT }, (_, index) => {
      const angle = (Math.PI * 2 * index) / BURST_PARTICLE_COUNT + (Math.random() - 0.5) * 0.25;
      const distance = 48 + Math.random() * 92;
      const depth = (Math.random() - 0.5) * 180;

      return {
        id: `${id}-${index}`,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        z: depth,
        rx: `${(Math.random() - 0.5) * 220}deg`,
        ry: `${(Math.random() - 0.5) * 280}deg`,
        rz: `${(Math.random() - 0.5) * 680}deg`,
        size: 8 + Math.random() * 11,
        delay: Math.random() * 120,
        duration: 650 + Math.random() * 350,
        scaleFrom: 0.35 + Math.random() * 0.3,
        scaleTo: 0.8 + Math.random() * 0.5,
        color: PARTICLE_COLORS[index % PARTICLE_COLORS.length],
        variant: ((index % 3) + 1) as 1 | 2 | 3,
      };
    });

    return { id, x, y, particles };
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => {
      setCursorEnabled(finePointer.matches && !reducedMotion.matches);
      setBurstEnabled(!reducedMotion.matches);
    };

    updateEnabled();

    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!cursorEnabled) {
      document.body.classList.remove('custom-cursor-enabled');
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    const points = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }));

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
    };

    const animate = () => {
      const { x, y } = pointerRef.current;
      points[0].x += (x - points[0].x) * 0.35;
      points[0].y += (y - points[0].y) * 0.35;

      for (let i = 1; i < points.length; i += 1) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      trailRefs.current.forEach((node, index) => {
        const point = points[index];
        if (!node || !point) return;
        node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${1 - index * 0.08})`;
      });

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [cursorEnabled]);

  useEffect(() => {
    if (!burstEnabled || typeof window === 'undefined') {
      setBursts([]);
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const burst = createStarBurst(event.clientX, event.clientY);

      setBursts((previousBursts) => [...previousBursts.slice(-(MAX_ACTIVE_BURSTS - 1)), burst]);

      const timeoutId = window.setTimeout(() => {
        setBursts((previousBursts) => previousBursts.filter((item) => item.id !== burst.id));
      }, BURST_DURATION_MS);

      burstTimeoutsRef.current.push(timeoutId);
    };

    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
      burstTimeoutsRef.current.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      burstTimeoutsRef.current = [];
    };
  }, [burstEnabled]);

  if (!cursorEnabled && !burstEnabled) return null;

  return (
    <>
      {burstEnabled && (
        <div className="pointer-events-none fixed inset-0 z-[99]">
          {bursts.map((burst) => (
            <span key={burst.id} className="star-burst" style={{ left: `${burst.x}px`, top: `${burst.y}px` }}>
              {burst.particles.map((particle) => (
                <span
                  key={particle.id}
                  className={`star-particle star-particle-v${particle.variant}`}
                  style={
                    {
                      '--star-x': `${particle.x}px`,
                      '--star-y': `${particle.y}px`,
                      '--star-z': `${particle.z}px`,
                      '--star-rx': particle.rx,
                      '--star-ry': particle.ry,
                      '--star-rz': particle.rz,
                      '--star-size': `${particle.size}px`,
                      '--star-delay': `${particle.delay}ms`,
                      '--star-duration': `${particle.duration}ms`,
                      '--star-scale-from': particle.scaleFrom,
                      '--star-scale-to': particle.scaleTo,
                      '--star-color': particle.color,
                    } as CSSProperties
                  }
                />
              ))}
            </span>
          ))}
        </div>
      )}

      {cursorEnabled && (
        <div className="pointer-events-none fixed inset-0 z-[100]">
          <span ref={cursorRef} className="cursor-core" />
          {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
            <span
              key={index}
              ref={(node) => {
                trailRefs.current[index] = node;
              }}
              className="cursor-trail-dot"
              style={{ opacity: 0.65 - index * 0.08 }}
            />
          ))}
        </div>
      )}
    </>
  );
}
