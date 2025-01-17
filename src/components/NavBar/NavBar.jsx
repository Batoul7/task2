import React, { useEffect, useState } from 'react';
import './navbar.css'
import '../Header/header.css'
import Schedule from '../Schedule/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../Data/NavLinkData';


const NavBar = () => {
    const [active, setActive] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false); 

   useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { 
                setIsSticky(true); 
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function activeLink(index) {
        if (active === index) {
            setActive(0);
        } else {
            setActive(index);
        }
    }

  return (
    <>
    <nav className={`navbar  ${isSticky ? 'sticky  ' : ''} `}>
        <div className='container flex'>
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
        </div>
  
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
