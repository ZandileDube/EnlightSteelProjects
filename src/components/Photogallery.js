import React from 'react'
import './Photogallery.css'
import galleryphoto1 from './images/photogallery1.jpg'
import galleryphoto2 from './images/photogallery2.jpg'
import galleryphoto3 from './images/photogallery3.jpg'
import galleryphoto4 from './images/photogallery4.jpg'
import galleryphoto5 from './images/photogallery5.jpg'
import galleryphoto6 from './images/photogallery6.jpg'


const Photogallery = () => {
    return (
        <div className='Photogallery' id='photogallery'>
            <div className='container'>
                <h1> Photo Gallery</h1>
                <span className='line'></span>
                <div className='gallery'>
                    <img src= {galleryphoto1} alt='gallery1'/>
                    <img src= {galleryphoto2} alt='gallery2'/>
                    <img src= {galleryphoto3} alt='gallery3'/>
                    <img src= {galleryphoto4} alt='gallery4'/>
                    <img src= {galleryphoto5} alt='gallery5'/>
                    <img src= {galleryphoto6} alt='gallery6'/>

                </div>
            </div>



        </div>
    )
}

export default Photogallery