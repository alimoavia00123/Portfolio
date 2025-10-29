import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Portfolio from './component/Portfolio'
import Projects from './component/Projects'
import CustomerReviews from './component/CustomerReviews'
import Footer from './component/Footer'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Projects/>
    <CustomerReviews/>
    <Footer/>    
    </div>
  )
}

export default App
