import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';

import CanvasLoader from '../Loader';
import Ball from './Ball';

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball icon={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default BallCanvas