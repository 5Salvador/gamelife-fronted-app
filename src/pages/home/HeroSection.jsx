import React from 'react'
import card1 from "../../assets/card-1.jpeg"
import card2 from "../../assets/card-2.jpeg"
import card3 from "../../assets/card-3.jpeg"

const cards = [
  {
    id: 1,
    image: card1,
    trend: '2025 Trend',
    title: 'PS games',
  },
  {
    id: 2,
    image: card2,
    trend: '2025 Trend',
    title: 'Xbox games',
  },
  {
    id: 3,
    image: card3,
    trend: '2025 Trend',
    title: 'PC acessories',
  }
]

const HeroSection = () => {
  return (
   <section className='section__container hero__container'>
    {
      cards.map((card) => (
        <div key={card.id} className='hero__card'>
          <img src={card.image} alt="" />
          <div className='hero__content'>
            <p>{card.trend}</p>
            <h4>{card.title}</h4>
            <a href="/shop">Discover More</a>
          </div>
        </div>
      ))
    }

   </section>
  )
}

export default HeroSection