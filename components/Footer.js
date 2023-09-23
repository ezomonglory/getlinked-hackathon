/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
    return (
        <div className='py-[40px]'>
            <div className='w-[70%] md:w-[90%]   flex-col md:flex-row mx-auto flex justify-between gap-[50px] md:gap-0 relative '>
                <div className='md:w-[40%] flex flex-col gap-[40px]'>
                    <div>
                        <div>
                            <span className='  clash-bold text-[16px] lg:text-[36px] font-[700] text-white'>get</span><span className=' clash-bold text-[16px] lg:text-[36px] font-[700] text-[#D434FE]'>linked</span>
                        </div>
                        <p className='text-white text-[14px] '>
                            Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                        </p>
                    </div>


                    <div className='flex gap-[10px] items-center'>
                        <h1 className='text-white text-[14px]  '>Terms of Use</h1>
                        <hr className='h-[15px] w-[2px] bg-[#D434FE]' />
                        <h1 className='text-white text-[14px]  '>Privacy Policy </h1>
                    </div>

                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[#D434FE] mont-bold text-[16px] font-[600] ' >Useful Links</h1>
                    <h1 className='text-white text-[14px] '>Overview</h1>
                    <h1 className='text-white text-[14px] '>Timeline</h1>
                    <h1 className='text-white text-[14px] '>FAQs</h1>
                    <h1 className='text-white text-[14px] '>Register</h1>
                    <div className='flex space-x-[16px]'>
                        <h2 className='text-[#D434FE] text-[16px] font-[400]  '>Follow us</h2>
                        <img src="/images/ig.svg" className='w-[24px] h-[24px] ' alt='ig' />
                        <img src="/images/x.svg" className='w-[24px] h-[24px] ' alt='ig' />
                        <img src="/images/fb.svg" className='w-[24px] h-[24px] ' alt='ig' />
                        <img src="/images/in.svg" className='w-[24px] h-[24px] ' alt='ig' />
                    </div>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[#D434FE] font-[600] mont-bold   '>Contact Us</h1>

                    <div className='flex items-center gap-[10px] '>
                        <img src='/images/call.svg' className='w-[12px] h-[12px] ' alt="call" />
                        <h1 className=' text-[14px] text-white '>+234 6707653444</h1>
                    </div>

                    <div className='flex items-start gap-[10px] '>
                        <img src='/images/loc.svg' className='w-[12px] h-[12px] ' alt="call" />
                        <h1 className=' text-[14px] text-white '>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</h1>
                    </div>
                </div>

                {/* Absolute positions of the stars */}
                <img src='/images/sata.svg' alt="start" className=' md:w-[21px] md:h-[25px] absolute bottom-[-10%] md:bottom-[-30%] left-[50%]' />

                <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[55%] left-[-4%]   ' />

                <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[45%] right-[-1%]   ' />

                <img src="/images/star-gray.svg" alt="fire" className='top-[10%] right-[15%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

                {/* Absolute position of the stars ends here */}

            </div>





            <p className='text-center text-white mt-[80px]'>All rights reserved. © getlinked Ltd.</p>

        </div>
    )
}

export default Footer   