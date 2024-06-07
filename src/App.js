import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './style.css'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Ground from './Ground';
import Car from './Car';

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>
      <PerspectiveCamera makeDefault fov={50} position={[5, 5, 0]}/>
      
      <color args={[0, 0, 0]} attach='background'/>
      <Car />
      <spotLight 
        color={[1, 0.25, 0.7]}
        intensity={1000}
        angle={0.9}
        penumbra={0.7}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight 
        color={[0.09, 0.9, 0.1]}
        intensity={500}
        angle={0.9}
        penumbra={0.7}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
