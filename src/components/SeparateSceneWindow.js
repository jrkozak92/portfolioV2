import * as THREE from 'three'
import { useState, useRef } from 'react'
import { useFrame, createPortal } from '@react-three/fiber'
import { useFBO, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import useStore from './Store'

const SeparateSceneWindow = ({ children, ...props }) => {
    const cam = useRef()
    const fbo = useFBO()
    const [scene] = useState(() => new THREE.Scene())
    let setCurrentCameraStation = useStore( state => state.setCurrentCameraStation )
    // I think fuck all this and use Bounds: https://github.com/pmndrs/drei#bounds
        // Looks like it might not provide for the flight path I want, but would be a good middleground
    //Pull set camera method from store and call it here, don't forget event.preventDefault()
    const backCameraStation = useStore(state => state.cameraStations.back)
    //constant assingment issue, check store

    useFrame((state) => {
        cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse)
        state.gl.setRenderTarget(fbo)
        state.gl.render(scene, cam.current)
        state.gl.setRenderTarget(null)
    })
    return (
        <>
            <mesh {...props} onClick={()=>{setCurrentCameraStation(backCameraStation)}}>
                <planeGeometry  args={[100, 100]} />
                <meshBasicMaterial map={fbo.texture} />
            </mesh>
            <PerspectiveCamera manual ref={cam} position={[0,0,15]} fov={70} aspect={1} onUpdate={(c) => (c.updateProjectionMatrix())} />
            {createPortal(children, scene)}
        </>
    )
}

export default SeparateSceneWindow