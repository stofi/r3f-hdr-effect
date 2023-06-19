// @ts-nocheck
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'

// import TestEffect from '$/effects/TestEffect'
import BrightnessDown from '$/effects/BrightnessDown'
import BrightnessUp from '$/effects/BrightnessUp'

export default function Effects() {
  return (
    <EffectComposer>
      <BrightnessDown param={0.25} />
      {/* <BrightnessUp param={0.1} /> */}
    </EffectComposer>
  )
}
