import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

const CameraController = () => {
  const { camera, gl } = useThree();
  camera.fov = 90
  camera.position.setZ(140);
  
  
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = .1
    controls.maxDistance = 1000
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  return null;
}

  export default CameraController