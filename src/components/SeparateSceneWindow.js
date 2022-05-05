import * as THREE from 'three'
import { useState, useRef } from 'react'
import { useFrame, createPortal } from '@react-three/fiber'
import { useFBO, OrbitControls, PerspectiveCamera } from '@react-three/drei'

const SeparateSceneWindow = ({ children, ...props }) => {
    const cam = useRef()
    const fbo = useFBO()
    const [scene] = useState(() => new THREE.Scene())

    useFrame((state) => {
        cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse)
        state.gl.setRenderTarget(fbo)
        state.gl.render(scene, cam.current)
        state.gl.setRenderTarget(null)
    })
    return (
        <>
            <mesh {...props}>
                <planeGeometry  args={[100, 100]} />
                <meshBasicMaterial map={fbo.texture} />
            </mesh>
            <PerspectiveCamera manual ref={cam} fov={70} aspect={1} onUpdate={(c) => (c.updateProjectionMatrix())} />
            {createPortal(children, scene)}
        </>
    )
}

export default SeparateSceneWindow