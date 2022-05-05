import { Suspense } from "react"
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
        <SeparateSceneWindow scale={.9} position={[0, 0, 50.01]} rotation-x={0} rotation-y={0}>
          
        </SeparateSceneWindow>
      </Suspense>
    </>
  ) 
}

export default BackPlane