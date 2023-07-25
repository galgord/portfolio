import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';

import CanvasLoader from '../Loader';
import Computers from './Computers';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handelMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handelMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handelMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas