import React from 'react'
import NavBar from './Component/NavBar'
import Hero from './Component/Hero'
import ProductViewer from './Component/ProductViewer'
import gsap from 'gsap' 
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
    </main>
  )
}

export default App
