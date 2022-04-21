import { TextureLoader } from "three"
import { useLoader } from "@react-three/fiber"

const RightPlane = () => {
    const alphaMap = useLoader(TextureLoader, 'cubeAlphaMap.png')
    return (
     <mesh  position={[50, 0, 0]} rotation-x={0} rotation-y={-Math.PI/2}>
         <planeGeometry args={[100, 100]} />
         <meshBasicMaterial color="red" alphaMap={alphaMap} transparent />
     </mesh>
   ) 
 }
 
 export default RightPlane