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
  return (
    <div id="container">
      <Canvas>
        <CameraController />
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
    </div>
  );
}

export default App;
