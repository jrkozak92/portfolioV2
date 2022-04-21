import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { Object3D } from 'three'

extend({ Object3D })


const SpinBox = () => {
  const spinThis = useRef()
  useFrame(({ clock })=>{
    spinThis.current.rotation.x = clock.getElapsedTime()
    spinThis.current.rotation.y = clock.getElapsedTime()
    spinThis.current.rotation.z = clock.getElapsedTime()
  })  

  const boxAnchor = useRef()
  useFrame(({ clock })=>{
    boxAnchor.current.rotation.y = clock.getElapsedTime()
    boxAnchor.current.rotation.z = Math.sin(clock.getElapsedTime())/3
  })

  return (
        <object3D ref={boxAnchor} position={[0,0,0]}> 
            <mesh ref={spinThis} position={[-90, 0, 0]} rotation-x={0} rotation-y={0}>
                <boxGeometry args={[15,15,15]} />
                <meshStandardMaterial color="purple"/>
            </mesh>
        </object3D>
  )
}

export default SpinBox