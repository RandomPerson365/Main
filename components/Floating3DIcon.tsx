'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

type IconType = 'sphere' | 'torus' | 'box' | 'cone' | 'dodecahedron';

function Shape({ type }: { type: IconType }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
      
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
        {type === 'torus' && <torusGeometry args={[0.8, 0.25, 16, 32]} />}
        {type === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {type === 'cone' && <coneGeometry args={[1, 1.5, 32]} />}
        {type === 'dodecahedron' && <dodecahedronGeometry args={[1]} />}
        <meshStandardMaterial color={hovered ? "#8b5cf6" : "#6366f1"} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export function Floating3DIcon({ type }: { type: IconType }) {
  // Prevent hydration mismatch for Three.js canvas by only rendering on client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />;
  }

  return (
    <div className="w-12 h-12">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <Shape type={type} />
      </Canvas>
    </div>
  );
}
