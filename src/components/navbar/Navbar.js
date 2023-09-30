import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Esaan Logo - green 1.png'
import spoon from '../../assets/spoon 1.png'
import navburger from '../../assets/Nav Burger.svg'
import xnav from '../../assets/X Navburger.svg'
import mobileNavLogo from '../../assets/Esaan Logo - cream 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './NavbarStyles.css';


export default function Navigation() {
    
    

    const [showNavbar, setNavbar] = useState("false");

    const ToggleClass = () => {
        setNavbar(!showNavbar);
    }



   
    return ( 
        <header id='navigation'> 
                <div className='logo__image'> 
                    <a href='/' aria-label='homepage'>  <img src={logo} alt='Esaan, thai home cooking, logo'  /> </a>  
                </div>
                <div className='nav__bar'>
                <nav className={showNavbar ? 'nav' : 'responsive__nav'}>
                    
                    <ul className='mobile__links'> 
                    <div className='mobile__only mobile__logo__image'> 
                        <img src={mobileNavLogo} alt='Esaan logo in light tan color' />
                    </div>
                    <NavLink className='mobile__only' to='/' aria-label='home'> 
                        <span onClick={ToggleClass}> home </span> 
                    </NavLink>
                    <NavLink to="/Menu" className={({ isActive }) => (isActive ? 'active' : null)} aria-label='menu'> 
                        <span className="hover-effect" onClick={ToggleClass}> menus </span> 
                    </NavLink> 
                    <NavLink to="/Info" className={({ isActive }) => (isActive ? 'active' : null)} aria-label='info'> 
                        <span className="hover-effect" onClick={ToggleClass}> info & hours </span> 
                    </NavLink>
                    <NavLink to="https://www.2dinein.com/r/1232/restaurants/delivery/Asian/Thai-Esaan-Portland" target='_blank' 
                    className={({ isActive }) => (isActive ? 'active' : null)} aria-label='to go ordering via 2DineIn website'> 
                        <span className='hover-effect' onClick={ToggleClass}> 
                              2dinein delivery
                        </span>
                    </NavLink>
                        <span className='mobile__only' aria-label='address'>65 portland st. portland, me</span>
                        <span className='mobile__only' aria-label='phone number'>207-536-0752</span>
                    </ul> 
                    <ul> 
                        <a href="https://www.instagram.com/thaiesaanportland/" target='_blank' aria-label='instagram'> <FontAwesomeIcon size='lg' icon={faInstagram}> </FontAwesomeIcon> </a>
                        <a href="https://www.facebook.com/thaiesaanportland"  target='_blank' aria-label='facebook'> <FontAwesomeIcon size='lg' icon={faFacebook}> </FontAwesomeIcon> </a>
                        <a href="mailto: thaiesaanportland@gmail.com" target='_blank' aria-label='email Esaan'> <FontAwesomeIcon size='lg' icon={faEnvelope}> </FontAwesomeIcon> </a>
                        <a href="tel:12075360752" aria-label='call Esaan'> <FontAwesomeIcon size='lg' icon={faPhone}> </FontAwesomeIcon>  </a>   
                    </ul>
                    

                    <div className='nav__spoon__image mobile__only'> 
                            <img className='spoon' alt='spoon logo for mobile' src={spoon} />
                    </div>
                    
                    
                </nav>

                <div id='nav__container'>
                        <div onClick={ToggleClass} className={showNavbar ? 'icon' : 'close'} id="square" aria-label='navigation button for dropdown menu'> 
                            <span className='line top'> </span>
                            <span className='line middle'> </span>
                            <span className='line bottom'> </span>
                        </div>     
                    </div>
                </div>
        </header>
           
    );

    
};