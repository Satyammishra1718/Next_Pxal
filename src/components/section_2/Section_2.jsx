'use client'

import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
import "./section_2.scss";

export default function Section_2() {
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
    <div className='section_2'>
      <div className='text'>
        <p className='sub_text'>-Hello, we are team Pxal, A creative agency,
          designing & developing creative digital
          assets for brands.</p>
      </div>
      <div className='images_text'>
        <div className='images'>
              <div className='imgg_1'><img src="https://www.pxal.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSection2image1.94b32f26.png&w=1080&q=100" alt="" /></div>
              <div className='imgg_2'><img src="https://www.pxal.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSection2image2.448ca6e5.png&w=640&q=100" alt="" /></div>
        </div>
        <div className='text'>
          <h1>From concept to creation,<br />
            we bring your vision to life</h1>
            <h3>At Pxal, we&apos;re passionate about creating innovative designs and solutions that help our clients achieve their goals. Our team of skilled designers and developers work together to deliver exceptional digital experiences that stand out in today&apos;s fast-paced digital landscape</h3>
          <div className='btn_work'><button>Let&apos;s Work Together</button></div>
        </div>
      </div>
    </div>
  );
}  