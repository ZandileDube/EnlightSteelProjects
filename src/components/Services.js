import React from 'react'
import './Service.css'
// import servImg from './images/R.png'
import { Gi3DStairs, GiConcreteBag } from 'react-icons/gi'
import { GrElevator } from 'react-icons/gr'
import { FaWarehouse } from 'react-icons/fa'
const Services = () => {
    return (
        <div className='services' id='Services'>
            <div className='container'>
                <h1>WE OFFER</h1>
                <span className='line'></span>
                <p>We preach <b>“CUSTOMER FIRST”</b> principle to create new value through total customer satisfaction in <b>PRICE | QUALITY | SERVICE & DELIVERY.</b></p>

                <div className='content'>

                    <div className='serviceStairs'>
                        <Gi3DStairs size={50} />
                        <h3>Staircases</h3>
                        <h3>Ballastrades & Hands Rails</h3>
                        <h3>Gates & Security Doors</h3>

                    </div>

                    <div className='serviceConcrete'>
                        <GiConcreteBag size={50} />
                        <h3>Concrete</h3>
                        <h3>Civils Works</h3>
                    </div>
                    <div className='Elevator'>
                        <GrElevator size={50} />
                        <h3>Lift Shafts</h3>
                        <h3>Carpots</h3>
                        <h3>Shop Fronts</h3>
                    </div>
                    <div className='serviceWarehouse'>
                        <FaWarehouse size={50} />
                        <h3>Structural Steel/Warehouses</h3>
                        <h3>Fabrication & Installation of Solar Panel Structures</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services