import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import {Link} from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
                        : (<FaBars size={30} style={{ color: '#000000' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="Home" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>Home</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to="About" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Services" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Photogallery" spy={true} smooth={true} offset={-75} duration={500} onClick={closeMenu}>Photogallery</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="ContactUs" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar