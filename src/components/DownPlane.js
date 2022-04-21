const DownPlane = () => {
    return (
     <mesh  position={[0, -50, 0]} rotation-x={-Math.PI/2} rotation-y={0}>
         <planeGeometry args={[100.1, 100.1]} />
         <meshBasicMaterial color="white"/>
     </mesh>
   ) 
 }
 
 export default DownPlane