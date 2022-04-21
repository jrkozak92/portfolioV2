


const BackPlane = () => {
   return (
    <mesh  position={[0, 0, -50]} rotation-x={0} rotation-y={0}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshStandardMaterial color="purple"/>
    </mesh>
  ) 
}

export default BackPlane