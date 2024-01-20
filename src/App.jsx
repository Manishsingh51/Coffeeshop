import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Button from "./layouts/Button"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'


const App = () => {
  return (
    <>
 <Navbar/>
 <Home/>
 <Menu/>
 <About/>    
<Footer/>
     

    </>



  )
}

export default App