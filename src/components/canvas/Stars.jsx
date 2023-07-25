import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef } from 'react';

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), {
    radius: 1.2
  });

  useFrame((state,delta) => {
    ref.current.rotation.y -= delta / 15;
    ref.current.rotation.x -= delta / 10;
  });

  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} rotation={[0, 0, 0]} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default Stars