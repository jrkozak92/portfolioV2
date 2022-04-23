import { useState, useRef, useEffect } from 'react'
import useStore from './Store'
import { useFrame, extend } from '@react-three/fiber'
import { Object3D } from 'three'
import '../App.css';
extend({ Object3D })


const SpinBox = () => {
    // const visToggle = useRef(useStore.getState().visToggle)
    let visToggle = useStore((state) => state.visToggle)
    const toggleVis = useStore(state => state.toggleVis)
  
    const toggleBox = (event) => {
      event.stopPropagation()
      if (visToggle !== false){
        toggleVis(false)
        console.log('Toggle at SpinBox');
      }
    }
  
    useEffect(()=>{
      useStore.subscribe(
        state => (visToggle = state.visToggle)
      )
    }, [])

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
   
    return (
        <>
            <group ref={boxGroup}>
                <object3D ref={boxAnchor} position={[0,0,0]}/> 
                <mesh ref={spinBox} position={[-90, 0, 0]} rotation-x={0} rotation-y={0} onClick={toggleBox} >
                    <boxGeometry args={[15,15,15]} />
                    <meshStandardMaterial color="purple" transparent visible={visToggle}/>
                </mesh>
            </group>
        </>
    )
}

export default SpinBox