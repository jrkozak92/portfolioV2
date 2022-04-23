import create from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
    visToggle: true,
    toggleVis: (bool) => set((state) => ({ visToggle: bool })),
})

const useStore = create(
    devtools(store)
)
  

export default useStore