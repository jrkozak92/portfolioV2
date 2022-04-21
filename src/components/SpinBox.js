import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
 

const SpinBox = () => {
  const spinThis = useRef()
  useFrame(({ clock })=>{
    spinThis.current.rotation.x = clock.getElapsedTime()
    spinThis.current.rotation.y = clock.getElapsedTime()
    spinThis.current.rotation.z = clock.getElapsedTime()
  })  

  return (
    <mesh ref={spinThis} position={[0, 0, -20]} rotation-x={0} rotation-y={0}>
        <boxGeometry args={[15,15,15]} />
        <meshStandardMaterial color="purple"/>
    </mesh>
  )
}

export default SpinBox