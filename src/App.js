import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import CameraController from './components/CameraController'
import SpinBox from './components/SpinBox'
import UpPlane from './components/UpPlane'
import DownPlane from './components/DownPlane'
import LeftPlane from './components/LeftPlane'
import RightPlane from './components/RightPlane'
import FrontPlane from './components/FrontPlane'
import BackPlane from './components/BackPlane'


const App = () => {
  const [visToggle, setVisToggle] = useState(1)
  
  const toggleBox = (event) => {
    event.stopPropagation()
    visToggle === 0 ? setVisToggle(1) : setVisToggle(0)
  }


  
  return (
    <div id="container">
      <Canvas
        camera={{fov: 70}} >
        <CameraController />
        <pointLight position={[-5,5,0]}/>
        <ambientLight intensity={.2}/>
        <SpinBox setVisToggle={setVisToggle} visToggle={visToggle}/>
        <UpPlane />
        <DownPlane />
        <LeftPlane />
        <RightPlane />
        <FrontPlane />
        <BackPlane />
      </Canvas>
      { visToggle === 1 ?
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
