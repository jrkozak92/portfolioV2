import './App.css';
import React, { Suspense, useState, useEffect, useRef } from 'react'
import useStore from './components/Store'
import { OrbitControls } from '@react-three/drei'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SpinBox from './components/SpinBox'
import UpPlane from './components/UpPlane'
import DownPlane from './components/DownPlane'
import LeftPlane from './components/LeftPlane'
import RightPlane from './components/RightPlane'
import FrontPlane from './components/FrontPlane'
import BackPlane from './components/BackPlane'

const App = () => {
  //Store Definition
  let visToggle = useStore((state)=> state.visToggle)
  // const visToggle = useRef(useStore.getState().visToggle)
  const toggleVis = useStore(state => state.toggleVis)

  console.log('visToggle: ', visToggle)

  const cameraStations = {
    front: [0,0,-160],
    back: [0,0,160],
    right: [160,0,0],
    left: [-160,0,0],
    top: [0,-160,0],
    bottom: [0,160,0]
  }

  const toggleBox = (event) => {
    event.stopPropagation()
    if (visToggle !== true){
      toggleVis(true)
      console.log('Toggle at App');
    }
  }

  useEffect(()=>{
    useStore.subscribe(
      state => (visToggle = state.visToggle)
    )
  }, [])
  
  return (
    <div id="container">
      <Canvas
        camera={{fov: 70, position: cameraStations.front}} >
        <OrbitControls/>
        <pointLight position={[-5,5,0]}/>
        <ambientLight intensity={.2}/>
        <SpinBox />
        <UpPlane />
        <DownPlane />
        <LeftPlane />
        <RightPlane />
        <FrontPlane />
        <BackPlane/>
      </Canvas>
      { visToggle ?
          null
            :
          <div id="box-icon-box">
            <div id="box-icon" onClick={(event)=>{toggleBox(event)}}></div>
          </div>
      }
    </div>
  );
}

export default App;
