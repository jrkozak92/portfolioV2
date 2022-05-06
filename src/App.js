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

  let currentCameraStation = useStore(state => state.currentCameraStation)

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
    useStore.subscribe(
      state => (currentCameraStation = state.currentCameraStation)
    )
  }, [])

  useEffect(()=>{
   
  },[currentCameraStation])
  
  return (
    <div id="container">
      <Canvas
        camera={{fov: 70, position: currentCameraStation}} >
        <OrbitControls/>
        <pointLight position={[-5,5,0]}/>
        <ambientLight intensity={.2}/>
        <SpinBox />
        <UpPlane />
        <DownPlane />
        <LeftPlane />
        <RightPlane />
        <FrontPlane />
        <BackPlane />
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
