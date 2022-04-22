import { useEffect, useRef } from 'react'
import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { Object3D } from 'three'
extend({ Object3D, OrbitControls })
// extend TransformControls if you want to use them

const CameraController = () => {
  const camTarget = useRef()
  const { camera, gl } = useThree();
  camera.position.setZ(140);
  camera.target = camTarget
  
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = .1
    controls.maxDistance = 1000
    // const transformControls = new TransformControls(camera, gl.domElement)
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return (
    <object3D ref={camTarget} position={[0,0,0]} />
  );
}

  export default CameraController