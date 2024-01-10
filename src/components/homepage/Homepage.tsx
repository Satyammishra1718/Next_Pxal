'use client'

import React, { useState, useEffect } from 'react'
import "./homepage.scss";

export default function Homepage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='homepage'>
      <div className='home_text_content'>
        <h1 className='larger-text'>Designs that connect, <br />
         solutions that deliver</h1>
         {isMobile ? (
        <p>We hold firm to our vision of achieving your <br /> business 
             goals by developing digital assets that <br /> best fit you.</p>
         ) :(
        <p>We hold firm to our vision of achieving your business <br />
            goals by developing digital assets that best fit you.</p>
         )}
        <button className="btn">Book a Meeting</button>
      </div>
      <div className='home_img'><img src="https://www.pxal.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSparklesBg1.52aefaaf.png&w=1920&q=100" alt="" /></div>
    </div>
  )
}
