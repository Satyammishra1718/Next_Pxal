import React from 'react'
import "./service.scss";

export default function Service() {
  return (
    <div className='service'>
      <div className='text'>
        <h1 className='subtext'>WHAT WE<br />DO</h1>
      </div>
      {/* service-1 */}
      <div className='index'>
        <div className='position'>
            <div className='number'>01</div>
            <div className='name'>UI/UX DESIGN</div>
        </div>
        <div className='desc'>
            <div className='line'></div>
            <p className='content'>
            Our designers will turn your imagination into reality in only a couple of days. We specialize in creating intuitive interfaces that are easy to navigate and visually appealing. Contact us today to learn more about our UI/UX design services and how we can help take your website to the next level.
            </p>
        </div>
      </div>
      {/* service-2 */}
      <div className='index'>
        <div className='position'>
            <div className='number'>02</div>
            <div className='name'>WEB DEVELOPMEMT</div>
        </div>
        <div className='desc'>
            <div className='line'></div>
            <p className='content'>
            Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.
            </p>
        </div>
      </div>
      {/* service-3 */}
      <div className='index'>
        <div className='position'>
            <div className='number'>03</div>
            <div className='name'>APP DEVELOPMEMT</div>
        </div>
        <div className='desc'>
            <div className='line'></div>
            <p className='content'>
            We specialize in building custom mobile apps for both iOS and Android platforms that are user-friendly, scalable, and secure. From concept to launch, we work closely with you to ensure that your app meets your business needs and exceeds your users' expectations.
            </p>
        </div>
      </div>
    </div>
  )
}
