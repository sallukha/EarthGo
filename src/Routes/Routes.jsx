import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Hero from '../components/Hero'
 import Community from '../ui/Community'
 import Community2 from '../ui/Community2'
 import AiPlaner from '../ui/AiPlaner'
 import PlacesFetch from "../ui/PlacesFetch"
import Footer from '../components/Footer'
const Routes = () => {
  return (
    <div>
       <Navbar />
      <Home />
      <Hero />
      <PlacesFetch />
      <Community />
      <Community2 />
      <AiPlaner />
      <Footer/>
    </div>
  )
}

export default Routes
