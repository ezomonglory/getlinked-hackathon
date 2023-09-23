import Image from 'next/image'
import React from 'react'
import HeroTop from './HeroTop'
import HeroMain from './HeroMain'

const Hero = () => {
    return (
        <div className='mt-[24px] border-color h-[700px] md:h-full lg:pb-[100px]  overflow-hidden '>
          <HeroTop />
          <HeroMain />
        </div>
    )
}

export default Hero