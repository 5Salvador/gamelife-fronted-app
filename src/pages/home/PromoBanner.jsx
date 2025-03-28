import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
      <div className='banner__card'>
        <span><i class="ri-truck-line"></i></span>
        <h4>Free Delivery</h4>
        <p>Offers convenience and ability to shop from anywhere, anytime</p>

      </div>
      <div className='banner__card'>
        <span><i class="ri-money-dollar-circle-line"></i></span>
        <h4>100% Money Back Guaranty</h4>
        <p>Your Satisfaction is Our Priority: 100% Money Back Guarantee</p>

      </div>
      <div className='banner__card'>
        <span><i class="ri-user-voice-fill"></i></span>
        <h4>Strong Support</h4>
        <p>Strong Customer Support: We're Here to Help, Every Step of the Way</p>

      </div>
    </section>
  )
}

export default PromoBanner