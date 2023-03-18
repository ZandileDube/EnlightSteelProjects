import React from 'react'
import './About.css'
// import welding from './images/welding.jpg'

const About = () => {
  return (

    <div className='about' id='About'>
      <div className='container'>
        <h1>About</h1>
        <span className='line'></span>
        <div className='content'>

          <div className='aboutpic' >
            {/* <img src={welding} alt='hero' /> */}
            
          </div>
          <div className='abouttext'>
            <p> Enlight Steel Projects Pty Ltd is a South African 100% black owned Company that was established in 2018 under Management of Nkanyiso Enlightment Madlala. The business is funded by dynamic professionals from previously disadvantaged community of South Africa. The aim is to provide professional steel services. Our team members are well trained and are strictly instructed to follow the rules and regulations of the SHEQ standard.</p>
            <p> Enlight Steel Projects has been dormant because a lot of planning had been undergone in terms of what vision we’d like to see the company thrive towards.We also needed time to discover the right people that would fit into the company’s value chain. We’ve managed to complete all the fundamental registrations and necessary administration for the business and we believe that the foundation has been laid. </p>
            <p>The footprint of the company currently serves Gauteng Province with potential of expanding to other Provinces. </p>
            <button className='button'>VIEW OUR WORK </button>

          </div>
        </div>
        
      </div>
    </div>
  )
}
export default About 