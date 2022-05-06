import { Suspense, useRef } from "react"
import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"
import SeparateSceneWindow from "./SeparateSceneWindow"



const BackPlane = () => {
  const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
  return (
    <>
      <mesh  position={[0, 0, 50]} rotation-x={0} rotation-y={Math.PI}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="blue" alphaMap={alphaMap} transparent />
      </mesh>
      <Suspense fallback={null}>
        <SeparateSceneWindow scale={.9} position={[0, 0, 50.01]} rotation-x={0} rotation-y={0} cameraPosition={[0,0,100]}>
          <mesh position={[0,-50,0]} rotation-x={-Math.PI/2}>
            <planeGeometry args={[200,200]}/>
            <meshBasicMaterial color="green"/>
          </mesh>
        </SeparateSceneWindow>
      </Suspense>
    </>
  ) 
}

export default BackPlane