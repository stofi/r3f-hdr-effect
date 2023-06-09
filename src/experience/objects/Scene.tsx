import { Environment, OrbitControls } from '@react-three/drei'

import { useControls } from 'leva'

import Sphere from '#/Sphere'

export default function Scene() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[3, 10, -5]} castShadow />

      <hemisphereLight intensity={0.5} args={['lightblue', 'lightgreen']} />

      {/* <Environment preset='sunset' background={false}></Environment> */}

      <Sphere color={'red'} position={[-1.5, 0, 0]} />
      <Sphere color={'red'} position={[1.5, 0, 0]} hdr />

      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry args={[10, 10]} />

        <meshStandardMaterial color={'#5c5c5c'} roughness={0.8} />
      </mesh>
    </>
  )
}
