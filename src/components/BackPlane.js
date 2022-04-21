import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"


const BackPlane = () => {
    const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
   return (
    <mesh  position={[0, 0, -50]} rotation-x={0} rotation-y={0}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="green" alphaMap={alphaMap} transparent />
    </mesh>
  ) 
}

export default BackPlane