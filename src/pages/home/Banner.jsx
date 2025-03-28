import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/PS5.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Discount on</h4>
        <h1>Game Station</h1>
        <p>Relive the classics or discover new adventures! We stock a wide range of video games and board games, from retro gems to the latest releases. Your gaming journey starts here.
        </p>
        <button className='btn'><Link to="/shop">EXPLORE NOW</Link></button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt=""  />
      </div>

    </div>
  )
}

export default Banner