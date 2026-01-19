import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; 
import * as THREE from "three";

const WaveMesh = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      positions[i + 2] = Math.sin(x * 0.4 + time) * 0.5;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 1.0, 0]}>
      <planeGeometry args={[30, 15, 64, 64]} />
      <meshBasicMaterial color="#003a5e" /> 
    </mesh>
  );
};

const Rig = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(t * 0.3) * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2 + Math.cos(t * 0.5) * 0.4, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const Wave3D = () => {
  return (
    <div className="wave-3d-container">
      <div className="wave-wrapper">
        <Canvas camera={{ position: [0, 2, 10], fov: 40 }}>
          <Suspense fallback={null}>
            <WaveMesh />
            <Rig />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Wave3D;