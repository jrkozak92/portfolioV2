import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"

const DownPlane = () => {
    const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
    return (
      <>
        <mesh  position={[0, -50, 0]} rotation-x={-Math.PI/2} rotation-y={0}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="white" alphaMap={alphaMap} transparent />
        </mesh>
        
      </>
   ) 
 }
 
 export default DownPlane