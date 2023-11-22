import { extend } from '@react-three/fiber'

import { PhysicalSpotLight } from 'three-gpu-pathtracer'
extend({ PhysicalSpotLight })

export default function Lights() {
  const light1 = new PhysicalSpotLight('#fff', [])
  const light2 = new PhysicalSpotLight('#fff', [])

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
          intensity={20.0}
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
          intensity={20.0}
          radius={0.5}
          castShadow
        />
        <primitive object={light2.target} position={[0, 0, -1]} />
      </group>

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

      {/* <mesh ref={boxRef} position={[2, 0, 2]} scale={[1, 1, 1]}>
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
