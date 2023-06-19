// @ts-nocheck
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'

import { useControls } from 'leva'

// import TestEffect from '$/effects/TestEffect'
import BrightnessDown from '$/effects/BrightnessDown'
import BrightnessUp from '$/effects/BrightnessUp'

export default function Effects() {
  const {
    enableBloom,
    enableDepthOfField,
    enableNoise,
    enableVignette,
    luminanceSmoothing,
    luminanceThreshold,
    intensity,
    levels,
    radius,
  } = useControls('Effects', {
    enableBloom: {
      value: false,
      label: 'Bloom',
    },
    enableDepthOfField: {
      value: false,
      label: 'Depth of Field',
    },
    enableNoise: {
      value: false,
      label: 'Noise',
    },
    enableVignette: {
      value: false,
      label: 'Vignette',
    },
    luminanceSmoothing: {
      value: 0.5,
      min: 0,
      max: 1,
      label: 'Smoothing',
    },
    luminanceThreshold: {
      value: 0.1,
      min: 0,
      max: 2,
      label: 'Threshold',
    },
    intensity: {
      value: 0.5,
      min: 0,
      max: 10,
      label: 'Intensity',
    },
    levels: {
      value: 1,
      min: 0,
      max: 10,
      step: 1,
      label: 'Levels',
    },
    radius: {
      value: 4,
      min: 0,
      max: 10,
      label: 'Radius',
    },
  })

  return (
    <EffectComposer>
      {enableDepthOfField && (
        <DepthOfField
          worldFocusDistance={10}
          focalLength={0.02}
          bokehScale={20}
          height={1024}
        />
      )}
      {enableBloom && (
        <Bloom
          luminanceSmoothing={luminanceSmoothing}
          luminanceThreshold={luminanceThreshold}
          intensity={intensity}
          levels={levels}
          radius={radius}
          height={1024}
        />
      )}
      {enableNoise && <Noise opacity={0.015} />}
      {enableVignette && <Vignette eskil={false} offset={0.1} darkness={0.8} />}
      <BrightnessDown param={0.25} />
      {/* <BrightnessUp param={0.1} /> */}
    </EffectComposer>
  )
}
