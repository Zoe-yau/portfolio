import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; 
import * as THREE from "three";

const WaveMesh = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position;

    const pa = pos.array;

    for (let i = 0; i < pa.length; i += 3) {
      const x = pa[i];
      const y = pa[i + 1];
      
      const wave1 = Math.sin(x * 0.3 + time) * 0.4;
      const wave2 = Math.sin(y * 0.5 + time * 1.2) * 0.2;
      
      pa[i + 2] = wave1 + wave2;
    }
    
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[40, 20, 128, 128]} />
      <meshStandardMaterial 
        color="#004B7B" 
        roughness={0.2}
        metalness={0.1}
        wireframe={false} 
      />
    </mesh>
  );
};

const Rig = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(new THREE.Vector3(Math.sin(t * 0.1) * 1, 2, 8), 0.02);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const Wave3D = () => {
  return (
    <div className="wave-wrapper">
      <Canvas 
        camera={{ position: [0, 5, 10], fov: 45 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <pointLight position={[-10, -5, -10]} color="#7dd3fc" intensity={1} />
          
          <WaveMesh />
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Wave3D;