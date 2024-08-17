import React, { useState } from 'react';
import './navbar.css'
import './../header.css'
import Schedule from './Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const [active, setActive] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const links = [
        { 
            href: '#home', 
            text: 'Home' 
        },
        { 
            href: '#properties', 
            text: 'Properties', 
        },
        { 
            href: '#properties', 
            text: 'Property Details', 
        },
        { 
            href: '#contact', 
            text: 'Contact Us',
        }, 
    ];

    function activeLink(index) {
        setActive(index);
    }

  return (
    <>
    <nav className="container flex">
        <div className="logo">
            <h1>VILLA</h1>
        </div>
        <ul className="links">
            {links.map((link, index) => (
                <li key={index}
                className={active === index ? 'active' : ''} 
                onClick={() => activeLink(index)}>
                    <a href={link.href}>
                    {link.text}
                  </a>
                </li>
            ))}    
        </ul>
        <Schedule display={""}/>
        <FontAwesomeIcon icon={faBarsStaggered} className='bars' onClick={() => setIsSidebarOpen(true)}/>
        </nav>
        
            <div className={`sidebar ${isSidebarOpen ? ' open' : ''}`}>
                <ul className='sidebar-links'>
                    <FontAwesomeIcon icon={faClose} className='close' onClick={() => setIsSidebarOpen(false)} />
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
        </>
  )
}

export default NavBar;
