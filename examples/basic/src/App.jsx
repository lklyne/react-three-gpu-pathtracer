import { extend, useThree, Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stats,
  Bounds,
  useTexture,
  Circle,
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense, useLayoutEffect, useEffect, useRef, useState } from 'react'
import { button, folder, Leva, useControls } from 'leva'
import { Pathtracer, usePathtracer, usePathtracedFrames } from '@react-three/gpu-pathtracer'
import * as THREE from 'three'

import Controls from './Controls'
import Lights from './Lights'

import { ACESFilmicToneMapping, sRGBEncoding } from 'three'

function UI({ infoRef }) {
  const { renderer } = usePathtracer()

  useFrame(() => {
    if (infoRef.current) {
      infoRef.current.children[0].textContent = `${renderer.frames} frames`
      infoRef.current.children[1].textContent = `${renderer.samples} samples`
    }
  }, [])

  return null
}

function Thing() {
  const { reset } = usePathtracer()

  return (
    <>
      <OrbitControls onChange={() => reset()} makeDefault enableDamping={false} />
      <PerspectiveCamera position={[0, 10, 0]} fov={40} makeDefault />
      {/* <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh> */}
      <mesh position={[0, -1, 0]} scale={[10, 1, 10]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="#a06464" />
      </mesh>
    </>
  )
}

export default function App() {
  const infoRef = useRef()
  const opts = Controls()

  const positionRef = useRef()

  return (
    <>
      <Leva
        collapsed
        titleBar={{
          title: 'Options',
        }}
      />
      <Canvas
        gl={{
          outputEncoding: sRGBEncoding,
          toneMapping: ACESFilmicToneMapping,
        }}
      >
        {!opts.Environment_Visible && <color attach="background" args={['#000']} />}

        <Suspense fallback={null}>
          <Pathtracer
            samples={opts.Rendering_Samples}
            bounces={opts.Rendering_Bounces}
            resolutionFactor={opts.Rendering_Factor}
            tiles={opts.Rendering_Tiles}
            enabled={opts.Rendering_Enabled}
            backgroundIntensity={opts.Environment_Intensity}
            backgroundBlur={opts.Environment_Blur}
            frames={24}
          >
            <Lights />
            <Environment preset={opts.Environment_Preset} background={opts.Environment_Visible} />
            <Thing />
            <UI infoRef={infoRef} />
          </Pathtracer>
        </Suspense>
      </Canvas>
      <Stats />
      {/* <Tag /> */}
      <div className="info" ref={infoRef}>
        <p>0 frames</p>
        <p>0 samples</p>
      </div>
    </>
  )
}
