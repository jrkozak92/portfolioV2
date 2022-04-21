const RightPlane = () => {
    return (
     <mesh  position={[50, 0, 0]} rotation-x={0} rotation-y={-Math.PI/2}>
         <planeGeometry args={[100.1, 100.1]} />
         <meshBasicMaterial color="orange"/>
     </mesh>
   ) 
 }
 
 export default RightPlane