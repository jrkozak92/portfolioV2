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
    const boxGroup = useRef()
    useFrame(({ clock })=>{
        boxGroup.current.rotation.y = clock.getElapsedTime()
        boxGroup.current.rotation.z = Math.sin(clock.getElapsedTime())/3
    })

    
    const hideBox = (event) => {
        event.stopPropagation()
        setVisToggle(0)
    }
    //Try memoizing the mesh components and look into useLayoutEffect or anything that will keep boxAnchor from rerendering
    
    // useEffect(()=>{
    //     spinBox.current.scale = ([visToggle, visToggle, visToggle])
    // }, [visToggle])
    
    return (
        <>
            <group ref={boxGroup}>
                <object3D ref={boxAnchor} position={[0,0,0]}/> 
                <mesh ref={spinBox} position={[-90, 0, 0]} rotation-x={0} rotation-y={0} onPointerOver={(event)=>{hideBox(event)}} visible={false}>
                    <boxGeometry args={[15,15,15]} />
                    <meshStandardMaterial color="purple"/>
                </mesh>
            </group>
        </>
    )
}

export default SpinBox