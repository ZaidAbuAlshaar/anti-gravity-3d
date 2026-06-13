'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Types ─── */
interface ModelProps {
  url: string;
}

/* ─── 3D Model ─── */
function FreedomModel({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const clock = useRef(0);

  // Enhance all materials for the premium look
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.envMapIntensity = 1.8;
        mat.needsUpdate = true;
      }
    }
  });

  // Floating + very slow idle rotation
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    clock.current += delta;
    // Gentle float
    groupRef.current.position.y = Math.sin(clock.current * 0.6) * 0.08;
    // Subtle idle sway
    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = Math.sin(clock.current * 0.3) * 0.03;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.6, 1.6, 1.6]}>
      <primitive object={scene} />
    </group>
  );
}

/* ─── Loading Spinner (inside Canvas) ─── */
function LoadingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 1.5;
  });
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.4, 0.04, 16, 60]} />
      <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} wireframe />
    </mesh>
  );
}

/* ─── Scene ─── */
function Scene() {
  return (
    <>
      {/* Adaptive DPR for performance */}
      <AdaptiveDpr pixelated />

      {/* Ambient */}
      <ambientLight intensity={0.3} />

      {/* Key light – cool blue from top-left */}
      <directionalLight
        position={[-4, 6, 4]}
        intensity={2.5}
        color="#93c5fd"
        castShadow
      />

      {/* Fill light – subtle warm from right */}
      <pointLight position={[5, 2, -3]} intensity={1.2} color="#bfdbfe" />

      {/* Rim / back light for silhouette */}
      <pointLight position={[0, -3, -4]} intensity={0.8} color="#1d4ed8" />

      {/* Blue under-glow */}
      <pointLight position={[0, -1.5, 0]} intensity={1.5} color="#3b82f6" distance={4} decay={2} />

      {/* Environment map for reflections */}
      <Environment preset="city" />

      {/* Model */}
      <Suspense fallback={<LoadingMesh />}>
        <FreedomModel url="/models/freedom-model.glb" />

        {/* Soft shadow beneath the model */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.25}
          scale={5}
          blur={2.5}
          far={3}
          color="#3b82f6"
        />
      </Suspense>
    </>
  );
}

/* ─── Exported Canvas Wrapper ─── */
export default function ModelCanvas() {
  const [ready, setReady] = useState(false);

  return (
    <div className="model-canvas-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* HTML Loading overlay */}
      {!ready && (
        <div className="canvas-loader">
          <div className="canvas-loader-ring" />
          <span className="canvas-loader-text">Loading Model</span>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        shadows
        onCreated={() => setReady(true)}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
