import { extend } from '@react-three/fiber'

import { PhysicalSpotLight } from 'three-gpu-pathtracer'
extend({ PhysicalSpotLight })

export default function Lights() {
  const light1 = new PhysicalSpotLight('#fb8500', [])
  const light2 = new PhysicalSpotLight('#8338ec', [])
  const light3 = new PhysicalSpotLight('#0000ff', [])
  const light4 = new PhysicalSpotLight('#ff0000', [])

  return (
    <>
      <group>
        <primitive
          object={light1}
          position={[0, 5, 5]}
          angle={Math.PI / 10}
          decay={0}
          penumbra={1.0}
          distance={0.0}
          intensity={80.0}
          radius={0.5}
          castShadow
        />
        <primitive object={light1.target} position={[0, 0, 1]} />
      </group>

      <group>
        <primitive
          object={light2}
          position={[0, 5, -5]}
          angle={Math.PI / 10}
          decay={0}
          penumbra={1.0}
          distance={0.0}
          intensity={80.0}
          radius={0.5}
          castShadow
        />
        <primitive object={light2.target} position={[0, 0, -1]} />
      </group>

      <group>
        <primitive
          object={light3}
          position={[0, 5, -5]}
          angle={Math.PI / 16}
          decay={0}
          penumbra={1.0}
          distance={0.0}
          intensity={1200.0}
          radius={0.5}
          castShadow
        />
        <primitive object={light3.target} position={[0, 0, -0.75]} />
      </group>

      {/* <group>
        <primitive
          object={light4}
          position={[0, 5, 5]}
          angle={Math.PI / 16}
          decay={0}
          penumbra={1.0}
          distance={0.0}
          intensity={1200.0}
          radius={0.5}
          castShadow
        />
        <primitive object={light4.target} position={[0, 0, 0.75]} />
      </group> */}

      {/* <physicalSpotLight
        ref={lightRef}
        color={0xffffff}
        position={[0, 5, 0]}
        angle={Math.PI / 10}
        //   target={targetRef.current}
        decay={0}
        penumbra={1.0}
        distance={0.0}
        intensity={20.0}
        radius={0.5}
        castShadow
      /> */}

      {/* <mesh position={[0, -0.25, 0]} scale={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color="white" />
      </mesh> */}
      {/* <physicalSpotLight
        color={0xfb8500}
        position={[0, 5, 5]}
        angle={Math.PI / 10}
        target={boxRef.current}
        decay={0}
        penumbra={1.0}
        distance={0.0}
        intensity={50.0}
        radius={0.5}
        castShadow
      /> */}
    </>
  )
}
