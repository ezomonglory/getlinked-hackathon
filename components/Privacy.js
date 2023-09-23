/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'
import PrivacyList from './PrivacyList'
import Button from './Button'

const Privacy = () => {
    return (
        <div className=' py-[60px] md:py-[100px] border-color '>
            <div className='flex flex-col lg:flex-row  w-[80%] md:w-full mx-auto relative'>

                {/* Blur effect */}
                <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[40px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute bottom-[18%] left-[5%] md:bottom-[0px] md:left-[0px] z-0'>

                </div>
                {/* Blur effect ends here */}

                <div className='md:w-[70%] lg:w-[35%] mx-auto relative'>
                    {/* Absolute positions of the stars */}
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute bottom-[15%] left-[-10%] ' />

                    <img src="/images/star-gray.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[0%] right-[20%]' />

                    {/* Absolute positions of the stars ends here */}



                    <div className='text-white'>
                        <TextHeader header1="Privacy Policy and " header2="Terms" />
                        <p className='text-gray-300 text-[14px] text-center md:text-left mt-[-19px] mb-[24px] '>Last updated on September 12, 2023</p>
                        <p className='text-[14px] text-center md:text-left '>Below are our privacy & policy, which outline a lot of goodies. <br className='hidden md:block' /> it’s our aim to always take of our participant</p>
                    </div>

                    <div className='mt-[20px] p-[20px] md:px-[40px]  md:py-[60px] rounded-md border border-1 w-full mx-auto border-[#D434FE] md:mt-[60px]  '>

                        <p className='text-[14px] text-white mb-[24px] text-center md:text-left  '>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>

                        <div className='flex flex-col'>
                            <h1 className='text-[#D434FE] font-[700] mb-[5px] mont-bold  '>Licensing Policy</h1>
                            <p className='text-[14px] font-[700] text-white mb-[25px]  '>Here are terms of our Standard License:</p>

                            <PrivacyList text="The Standard License grants you a non-exclusive right to navigate and register for our event" />
                            <PrivacyList text="You are licensed to use the item available at any free source sites, for your project developement" />

                            <div className='flex items-center mt-[15px]'>
                                <div className='inline-block mx-auto'>
                                    <Button text="Read More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[80%] lg:mt-0 mt-[15%] md:w-[40%] mx-auto  relative '>

                    {/* Absolute positions of the stars */}
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[25%] left-[-10%]' />

                    <img src="/images/star-gray.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[20%] right-[20%]' />

                    <img src="/images/star-gray.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[10%] right-[0%]' />
                    <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[10%] left-[20%]' />

                    <img src="/images/sata.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[25%] left-[20%]' />


                    <img src="/images/star.svg" alt="fire" className='bottom-[10%] right-[25%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

                    {/* Absolute position of the stars ends here */}

                    <img src="/images/PM.svg" className='w-full relative md:mt-[40px] z-20 ' alt="privacy-image" />
                    <img src="/images/padlock.svg" className='w-full absolute top-[-30px] ' alt="privacy-image" />


                </div>
            </div>
        </div>
    )
}

export default Privacy