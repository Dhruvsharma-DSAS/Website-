import { Environment,Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (

    <group name='lights'>
         {/* <Environment resolution={256}>
            <Lightformer
            form = "rect"
            intensity ={10}
            position={[-10,5,-5]}
            scale={10}
            rotation-y={Math.PI/2}
            />
            <Lightformer
            form = "rect"
            intensity ={10}
            position={[10,0,1]}
            scale={10}
            rotation-y={Math.PI/2}
            />
        </Environment> */}
     


      <spotLight
        position={[0, -10, 10]}
        angle={0.6}
        decay={0}
        intensity={Math.PI * 1.5}
      />

      <spotLight
        position={[0, 15, -5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.1}
      />


      <spotLight
        position={[0, 5, -15]}
        angle={0.5}
        decay={0.3}
        intensity={Math.PI * 0.9}
      />
    </group>
  )
}

export default StudioLights
