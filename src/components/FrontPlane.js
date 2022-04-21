const FrontPlane = () => {
    return (
     <mesh  position={[0, 0, 50]} rotation-x={0} rotation-y={Math.PI}>
         <planeGeometry args={[100.1, 100.1]} />
         <meshStandardMaterial color="red"/>
     </mesh>
   ) 
 }
 
 export default FrontPlane