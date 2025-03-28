import React from 'react'
const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
      <div className='footer__col'>
        <h4>CONTACT INFO</h4>
        <p>
          <span><i className="ri-map-pin-2-fill"></i></span>
          Pratapgunj, Vadodara
        </p>
        <p>
          <span><i className="ri-mail-fill"></i></span>
          support@gamelife.com
        </p>
        <p>
          <span><i className="ri-phone-fill"></i></span>
          +91 96 244 38565
        </p>
      </div>

      <div className='footer__col'>
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Conditions</a>
      </div>

      <div className='footer__col'>
        <h4>USEFUL LINKS</h4>
        <a href="/">Help</a>
        <a href="/dashboard/orders">Track your order</a>
        <a href="/">Return Policy</a>
        <a href="/">Privacy Policy</a>
      </div>

      <div className='footer__col'>
        <h4>ABOUT</h4>
        <p>Welcome to <span className='text-black'>GameLife</span>, the one-stop shop for all your gaming needs! Whether you're a casual player or a hardcore gamer, we’ve got you covered with the latest consoles, accessories, and top-rated games for PlayStation, Xbox, and PC.</p>
      </div>

      
    </footer>

    <div className='footer__bar'>
        Copyright 2025 by GameLife. All rights reserved.
    </div>
    </>
  )
}

export default Footer