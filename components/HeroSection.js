import React from 'react'
import Header from './Header'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div className='relative' >
    <div className='z-20'>
        <Header />
        <Hero />
    </div>

    <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[100px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute top-[18%] left-[5%] md:top-[15%] md:left-[20%] z-0'>

    </div>
</div>
  )
}

export default HeroSection