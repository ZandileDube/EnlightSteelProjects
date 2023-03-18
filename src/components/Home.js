import React from 'react'
// import bckgrundImage from './images/background-home.png'
import './Home.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About.js'


const Home = () => {

    const navigate = useNavigate();

    const navigateToAbout = () => {

        navigate('/About');
    };

    return (
        <div className='home' id='Home'>
            <div className='content'>
                <h1> YOUR TRUSTED STEEL COMPANY</h1>
                <span className='line'> </span>
                <button className='button' onClick={navigateToAbout} >Explore More </button>
                <Routes>
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </div>


    )
}


export default Home