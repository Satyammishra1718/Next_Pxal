'use client'

import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
import "./section_4.scss";

export default function Section_4() {
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
    <div className='section_4'>
      <div className='text'>
        <h1 className='subtext'>We focus on the following<br />aspects while working</h1>
      </div>
      <div className='big_box'>
       {/* box-1 */}
        <div className='small_box'>
            <div className='topic'><h2>AESTHETICS</h2></div>
            <div className='desc'><p>The visual component and pleasant sensations from using the product helps highlight your brand from the other companies</p></div>
        </div>
        {/* box-2 */}
        <div className='small_box'>
            <div className='topic'><h2>TECHNOLOGIES</h2></div>
            <div className='desc'><p>We make the interfaces are stylish and the functions are useful. We use modern technologies of web-development without outdated trash</p></div>
        </div>
        {/* box-3 */}
        <div className='small_box'>
            <div className='topic'><h2>DESIGN PRINCIPLES</h2></div>
            <div className='desc'><p>Creating captivating aesthetics and delightful user experiences sets your brand apart, using modern web technologies while avoiding outdated elements</p></div>
        </div>
      </div>

      <div className='together'>
        <div className='sub_together'>
        {!isMobile ? (
        <>
          <h1>Lets make next big<br />and impactful thing<br />together</h1>
          <h3>We Believe In Creating The Best Work And Being The Best To<br />Work With.</h3>
          </>
        ) : (
        <>
          <h1>Lets make next big and<br />impactful thing together</h1>
          <h3>We Believe In Creating The Best Work And Being The<br />Best To Work With.</h3>
        </>
        )}
          <div className='btn'><button>Let&apos;s Work Together</button></div>
        </div>
        {!isMobile ? (
        <div className='imgg'><img src="https://www.pxal.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhandBg.d1d85ff6.png&w=1080&q=100" alt="" /></div>
        ) : (
         <div className='imgg_mob'><img src="https://www.pxal.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpeopleSittingBg.b5c0ebdb.png&w=750&q=100" alt="" /></div>
        )}
      </div>
    </div>
  )
}
