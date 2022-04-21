import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"

const LeftPlane = () => {
    const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
    return (
     <mesh  position={[-50, 0, 0]} rotation-x={0} rotation-y={Math.PI/2}>
         <planeGeometry args={[100, 100]} />
         <meshBasicMaterial color="#e67a00" alphaMap={alphaMap} transparent />
     </mesh>
   ) 
 }
 
 export default LeftPlane