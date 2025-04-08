import React from 'react'

const PlayStation = () => {
  return (
    <>
    <div className="section__container">
      <h2 className="section__header">PlayStation Studios</h2>
        <p className="section__subheader">
          PlayStation Studios is a collection of world-class game development
          studios that create exclusive games for PlayStation platforms. With a
          focus on innovation, storytelling, and immersive gameplay, these
          studios are dedicated to delivering unforgettable gaming experiences.
        </p>
      </div>
      <div className='w-full'>
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-studios-banner-hero-desktop-01-en-01may24?$3200px$" alt="" />
      </div>
      <div className='container mx-auto flex flex-col md:flex-row mt-10'>
        <div className='w-1/2 space-y-2'>
            <p className='text-4xl font-semibold text-gray-500'>Playstation Studios</p>
            <p className='text-2xl md:w-[600px]'>This organisation has defined gaming for generations. Our collective of studios and teams span the globe – and together – advance gaming and the positive impact it has on people’s lives.</p>
            <p className='text-2xl md:w-[600px]'>PlayStation Studios is the fabric that binds us together, with the boldness and spirit to explore, the passion to invent and reinvent, and the confidence to let imagination lead the way.</p>
        </div>
        <div className='w-1/2'>
            <img src="https://i.pinimg.com/736x/03/08/ae/0308aeded22e1c08461cc6ff46d56d3f.jpg" alt="" />
        </div>

      </div>
    </>
  )
}

export default PlayStation