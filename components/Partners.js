/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Partners = () => {
    return (
        <div className='py-[40px]  mx-auto border-color relative '>

            {/* Absolute positions of the stars */}
            <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[25%] left-[25%]' />

            <img src="/images/sata.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[40%] right-[45%]   ' />




            <img src="/images/star.svg" alt="fire" className='bottom-[10%] right-[25%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

            {/* Absolute position of the stars ends here */}

            <h1 className= 'clash-bold  text-white md:text-[32px] font-[700] leading-[28px] text-center mb-[10px] md:mb-[20px] '>Partners and Sponsors</h1>
            <p className='text-center text-white text-[14px] leading-[16px] md:leading-[28px] font-[400] '>Getlinked Hackathon 1.0 is honored to have the following major <br className='hidden md:block' /> companies as its partners and sponsors</p>


            <div className=' mt-[40px] py-[40px] md:py-[80px] rounded-md border border-1  mx-auto border-[#D434FE] md:mt-[60px] flex items-center justify-center w-[90%] md:w-[70%] lg:w-[800px] ' >
                {/* I am using a flex so it will be responsive for all screen size */}
                <div className='relative w-[80%] lg:w-[700px] mx-auto text-white flex flex-col gap-5 '>
                    <div className='flex items-cente justify-between'>
                        <div className='border-2 border-transparent border-b-[#D434FE]  w-[30%] h-[120px] items-center justify-center flex '>
                            <img src="/images/p1.svg" alt="partner1" className=' w-[50%]' />
                        </div>
                        <hr className='  h-[100px] w-[2px] bg-[#D434FE] ' />
                        <div className=' border-2 border-transparent border-b-[#D434FE]  w-[30%] h-[120px] flex items-center justify-center'>
                            <img src="/images/p2.svg" alt="partner1" className=' w-[70%]' />
                        </div>
                        <hr className='  h-[100px] w-[2px] bg-[#D434FE] ' />
                        <div className=' border-2 border-transparent border-b-[#D434FE]  w-[30%] h-[120px] flex items-center justify-center'>
                            <img src="/images/p3.svg" alt="partner1" className=' w-[50%]' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=' border border-transparent  w-[30%] h-[100px] flex items-center justify-center '>
                            <img src="/images/p4.svg" alt="partner1" className=' w-[50%]' />
                        </div>
                        <hr className=' bottom-[-15px] left-[210px] h-[100px] w-[2px] bg-[#D434FE] ' />
                        <div className='  border border-transparent  w-[30%] h-[100px] flex items-center justify-center '>
                            <h1 className=" typo md:text-[32px] lg:text-[48px] text-center" >Pay<span className='text-[#00A3FF]'>box</span></h1>
                        </div>
                        <hr className=' bottom-[-15px] right-[226px] h-[100px] w-[2px] bg-[#D434FE] ' />
                        <div className=' border border-transparent  w-[30%] h-[100px] flex items-center justify-center '>
                            <div className='flex items-center gap-[10px] justify-center w-full '>
                                <h1 className='  text-[12px] md:text-[22px] lg:text-[38px] text-white typo '>Vuzual</h1>
                                <div className=''>
                                    <h1 className=' typo  text-[12px] md:text-[22px] lg:text-[38px] text-[#F00]  lg:leading-[40px] mt-[5px] md:mt-[10px] lg:mt-[15px] '>Plus</h1>
                                    <p className=' text-[3.5px] md:text-[6px] typo lg:text-[10px]  ' > Design Studios</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Partners
