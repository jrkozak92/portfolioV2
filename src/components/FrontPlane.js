import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"

const FrontPlane = () => {
    const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
    return (
     <mesh  position={[0, 0, 50]} rotation-x={0} rotation-y={Math.PI}>
         <planeGeometry args={[100, 100]} />
         <meshBasicMaterial color="blue" alphaMap={alphaMap} transparent />
     </mesh>
   ) 
 }
 
 export default FrontPlane