/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'

const IntroductionSection = () => {
    return (
        <div className='w-[90%] md:w-full mx-auto md:py-[60px] py-[30px] border-color'>
            <div className='flex flex-col md:flex-row  md:w-[90%] lg:w-[80%] mx-auto items-center'>
                <div className=' w-[70%] md:w-[50%] relative'>
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[60px] left-0' />
                    <div className='w-full md:w-[70%] mx-auto'>
                        <img src='/images/bigBulb.svg' className='w-full ' alt="the big idea" />
                    </div>

                    <img src='/images/arrow.svg' alt="start" className='md:w-[49px] md:h-[60px] static items-center mx-auto md:absolute bottom-[-30px] right-[70px] w-[30px] h-[40px] ' />
                </div>

                <div className=' w-[85%] mt-[20px] md:mt-0 md:w-[50%] '>
                    <div className='flex justify-center md:justify-between items-center space-x-4'>
                    <TextHeader header1="Introduction to getlinked" header2="tech Hackathon 1.0" />
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] w-[14px] h-[15px]' />
                    </div>
                    <p className='text-[14px] text-center md:text-left text-white leading-[28px] '>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection