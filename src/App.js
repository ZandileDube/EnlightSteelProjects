import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Photogallery from './components/Photogallery'
import ContactUs from './components/Contactus'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'


function App() {
 
  return (
    <BrowserRouter>
    <div>
<Navbar/>
<Home/>      
<About/>
<Services/>
<Photogallery/>
<ContactUs/>
 </div>
 </BrowserRouter>
  )
}

export default App