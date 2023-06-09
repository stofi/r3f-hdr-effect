import { Suspense } from 'react'

import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Debug, Physics } from '@react-three/rapier'

import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

import Scene from '#/Scene'
import Effects from '$/Effects'

export default function Experience(props: { enableDebug?: boolean }) {
  return (
    <>
      <Leva hidden={!props.enableDebug} />
      <Canvas
        flat={true}
        shadows={true}
        dpr={2}
        camera={{
          position: [5, 5, 5],
        }}
      >
        <color args={['lightblue']} attach='background' />
        <Suspense>
          <Physics>
            <Effects />
            <Scene />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}
