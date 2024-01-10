'use client'

import React, { useState, useEffect } from 'react'
import "./navbar.scss"

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='navbar'>
      <div className='logo-container'>
      <svg viewBox="0 0 31 47" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M0 22.8002H8V46.8002H0V22.8002Z" fill="#F4F4F4"></path>
        <path d="M0 0.000244141H8V10.2002H0V0.000244141Z" fill="#F4F4F4"></path>
        <path d="M10 0.200256H25V23.2003H10V0.200256Z" fill="#F4F4F4"></path>
        <path d="M25.6001 0.000244141H28.0001V2.40024H25.6001V0.000244141Z" fill="#F4F4F4"></path>
        <path d="M25.6001 7.20026H28.0001V9.60026H25.6001V7.20026Z" fill="#F4F4F4"></path>
        <path d="M26.7998 15.0002H29.1998V17.4002H26.7998V15.0002Z" fill="#F4F4F4"></path>
        <path d="M28 4.80023H30.4V7.20023L28.0001 7.20026L28 4.80023Z" fill="#F4F4F4"></path>
        <path d="M22.6001 0.000244141H25.0001V2.40024H22.6001V0.000244141Z" fill="#232323"></path>
        <path d="M22.6001 7.20026H25.0001V9.60026H22.6001V7.20026Z" fill="#232323"></path>
        <path d="M20.2002 9.60028L22.6001 9.60026L22.6002 12.0003H20.2002V9.60028Z" fill="#232323"></path>
        <path d="M22.6001 15.0002H25.0001V17.4002H22.6001V15.0002Z" fill="#232323"></path>
    </svg>
      </div>
      {isMobile ? (
      <div className="mob-hamburger">
        <svg viewBox="0 0 69 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="33" transform="translate(20 16)" fill="#18181B"></rect>
        <rect x="25" y="27" width="22" height="3" fill="#D9D9D9"></rect>
        <rect x="35" y="35" width="12" height="3" fill="#D9D9D9"></rect>
       </svg>
       </div>
      ) : (
      <div className='nav-sections'>
        <span>Services</span>
        <span>About</span>
        <span>Contact Us</span>
      </div>
      )}
    </div>
  )
}
