import { useState, useRef, useEffect } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { Object3D } from 'three'
import '../App.css';
extend({ Object3D })


const SpinBox = ( {visToggle, setVisToggle} ) => {
    
    const spinBox = useRef()
    useFrame(({ clock })=>{
        spinBox.current.rotation.x = clock.getElapsedTime()
        spinBox.current.rotation.y = clock.getElapsedTime()
        spinBox.current.rotation.z = clock.getElapsedTime()
    })  

    const boxAnchor = useRef()
    useFrame(({ clock })=>{
        boxAnchor.current.rotation.y = clock.getElapsedTime()
        boxAnchor.current.rotation.z = Math.sin(clock.getElapsedTime())/3
    })

    const hideBox = (event) => {
        event.stopPropagation()
        setVisToggle(false)
    }

    useEffect(()=>{
        spinBox.current.material.visible = visToggle
    }, [visToggle])
    
    return (
        <>
            <object3D ref={boxAnchor} position={[0,0,0]}> 
                <mesh ref={spinBox} position={[-90, 0, 0]} rotation-x={0} rotation-y={0} onPointerOver={(event)=>{hideBox(event)}}>
                    <boxGeometry args={[15,15,15]} />
                    <meshStandardMaterial color="purple" />
                </mesh>
            </object3D>
        </>
    )
}

export default SpinBox