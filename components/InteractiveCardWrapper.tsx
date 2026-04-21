'use client';

import * as React from 'react';
import Tilt from 'react-parallax-tilt';
import { cn } from '@/lib/utils';

export function InteractiveCardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Tilt 
      tiltMaxAngleX={5} 
      tiltMaxAngleY={5} 
      perspective={1000} 
      className={cn('h-full w-full', className)}
      glareEnable={false} // We are using our custom glare effect below
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative overflow-hidden h-full w-full rounded-inherit bg-inherit border-inherit p-inherit flex flex-col group"
      >
        <div
          className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, color-mix(in oklch, var(--foreground) 6%, transparent), transparent 40%)`,
          }}
        />
        <div className="relative z-10 h-full flex flex-col">{children}</div>
      </div>
    </Tilt>
  );
}
