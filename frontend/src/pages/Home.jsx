import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Work from '../components/Home/Work'
import Newsletter from '../components/Home/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
