/* eslint-disable @typescript-eslint/no-unused-vars */
import { Uniform, WebGLRenderer, WebGLRenderTarget } from 'three'
import React, { forwardRef, useMemo } from 'react'

import { Effect } from 'postprocessing'

const fragmentShader = /* glsl */ `
  uniform float param;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor;
    outputColor.rgb = inputColor.rgb * (1./ param);
    // outputColor.r = 10.;

  }
`

// Effect implementation
class TestEffectImpl extends Effect {
  static _param = 0.1
  constructor({ param = 0.1 } = {}) {
    super('MyCustomEffect', fragmentShader, {
      uniforms: new Map([['param', new Uniform(param)]]),
    })

    TestEffectImpl._param = param
  }

  update(
    renderer: WebGLRenderer,
    inputBuffer: WebGLRenderTarget,
    deltaTime?: number,
  ) {
    const paramUniform = this.uniforms.get('param')
    if (!paramUniform) return
    paramUniform.value = TestEffectImpl._param
  }
}

// Effect component
export const TestEffect = forwardRef<
  any,
  {
    param: number
  }
>(function TestEffect({ param }, ref) {
  const effect = useMemo(() => new TestEffectImpl({ param }), [param])

  return <primitive ref={ref} object={effect} dispose={null} />
})

export default TestEffect
