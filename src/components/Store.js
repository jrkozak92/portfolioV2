import create from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
    visToggle: true,
    toggleVis: (bool) => set((state) => ({ visToggle: bool })),
    cameraStations: {
        front: [0,0,-160],
        back: [0,0,160],
        right: [160,0,0],
        left: [-160,0,0],
        top: [0,-160,0],
        bottom: [0,160,0]
      },
    currentCameraStation: [0,0,-160],
    setCurrentCameraStation: (choice) => {
        console.log("Setting camera position to: ", choice)
        set((state) => ({ currentCameraStation: choice }))
      }
})

const useStore = create(
    devtools(store)
)
  

export default useStore