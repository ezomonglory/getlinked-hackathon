/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const HeroMain = () => {
    return (
        <div className='items-center justify-center md:justify-normal  md:pl-[32px] lg:pl-[90px] md:mt-[100px] flex md:flex-row flex-col relative '>
            <div className='relative flex flex-col items-center justify-center md:block '>
                <div className='w-full'>
                    <div className='text-center md:text-left mt-[20px] md:mt-0  text-[32px] md:text-[48px] lg:text-[60px] font-[700] text-white lg:leading-[70.5px] leading-[40px]'>
                        <div className='relative inline-block'>
                            <img src="/images/bulb.svg" alt="fire" className='  md:top-[-20px] md:right-[25px] lg:w-[53px] lg:h-[73px] lg:top-[-50px] lg:right-[15px] top-[-35%] right-[8%] absolute w-[18px] h-[26px] ' />
                            <h1 className='clash-bold' >getlinked Tech</h1>
                        </div>
                        <div className='flex text-center items-center justify-center w-full'>
                            <h1 className='clash-bold'>Hackathon <span className='text-[#D434FE]' >1.0</span></h1>
                            <div className='flex items-center '>
                                <img src="/images/chain.svg" alt="chain" className='md:w-[75px] md:h-[75px] w-[33px] h-[33px] ' />
                                <img src="/images/fire.svg" alt="fire" className='  md:h-[50px] md:w-[50px] w-[23px] h-[23px]  ' />
                            </div>
                        </div>
                    </div>
                    <p className=' mt-[10px] md:mt-0 text-[16px] lg:text-[20px] font-[400]  md:leading-[33.2px] text-white '>Participate in getlinked tech Hackathon <br className='block md:hidden' /> 2023 stand <br className='hidden md:block' />
                        a chance to win a Big prize</p>
                </div>

                <div className='inline-block mt-[20px] lg:mt-[40px]'>
                    <Button text="Register" />
                </div>

                <div className='  flex items-center justify-center space-x-[12px] md:space-x-[16px] mt-[16px] md:mt-[24px] lg:mt-[50px] w-[255px] md:w-[285px]'>
                    <h1 className='text-white unica text-[48px] md:text-[60px] '>00 <span className='text-[14px] ml-[-10%] md:ml-[-20%] '>H</span></h1>
                    <h1 className='text-white unica text-[48px] md:text-[60px] '>00 <span className='text-[14px] ml-[-10%] md:ml-[-20%] '>M</span></h1>
                    <h1 className='text-white unica text-[48px] md:text-[60px] '>00 <span className='text-[14px] ml-[-10%] md:ml-[-20%] '>S</span></h1>
                </div>

                <Image src="/images/star-gray.svg" width={26} height={32} alt="fire" className='top-[-50px] right-[0px] hidden md:block absolute ' />
                <Image src="/images/star-gray.svg" width={26} height={32} alt="fire" className='bottom-[20%] right-[20%] hidden md:block absolute ' />
            </div>


            <div className=' h-[600px]  w-full lg::h-[600px]  md:w-[55%] relative md:absolute right-0  top-[-10%] '>
                <div className='hidden md:block bg-[#903AFF] blur-[50px] h-[150px] w-[300px] rounded-full absolute top-[15%] right-[10%] z-30 opacity-50'>
                </div>
                <img src="/images/heroblue.svg" alt='ball' className='absolute z-40 top-0 right-0  w-full h-auto' />
                <img src="/images/heroman.svg" alt='ball' className='absolute z-20 top-0 right-0  w-full h-auto' />
            </div>


        </div>
    )
}

export default HeroMain