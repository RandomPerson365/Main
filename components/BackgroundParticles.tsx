'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function ParticleGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow rotation to give a dynamic feel across the whole background
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles count={200} scale={18} size={2} speed={0.3} color="hsl(var(--primary))" opacity={0.4} />
      <Sparkles count={80} scale={25} size={4} speed={0.15} color="hsl(var(--accent))" opacity={0.2} />
    </group>
  );
}

export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ParticleGroup />
      </Canvas>
    </div>
  );
}
