import { GroupProps } from '@react-three/fiber'

import CustomMaterial from '$/materials/CustomMaterial'
import CustomMaterialHDR from '$/materials/CustomMaterialHDR'

interface SphereProps extends GroupProps {
  color?: string
  hdr?: boolean
}

export default function Sphere(props: SphereProps) {
  const groupProps = { ...props }
  delete groupProps.color
  delete groupProps.hdr

  return (
    <group {...groupProps}>
      <mesh castShadow position-y={1}>
        <sphereGeometry args={[1, 12, 8]} />
        {props.hdr ? (
          <CustomMaterialHDR color={props.color} />
        ) : (
          <CustomMaterial color={props.color} />
        )}
      </mesh>
    </group>
  )
}
