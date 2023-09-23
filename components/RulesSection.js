/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'

const RulesSection = () => {
    return (
        <div className='w-[90%] md:w-full mx-auto md:py-[40px] py-[30px] border-color relative overflow-hidden'>


            {/* The blur lightning at the background  starts here */}
            <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[40px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute top-[18%] left-[5%] md:top-[25%] md:left-[15%] z-0'>

            </div>
            {/* The blur lightning at the background  ends here */}

            <div className='flex justify-between flex-col md:flex-row  md:w-[90%] lg:w-[85%] mx-auto items-center'>
                <div className=' w-[85%] mt-[20px] md:mt-0 md:w-[50%] order-2 md:order-1'>
                    <div className='flex justify-center md:justify-normal items-start space-x-4 md:space-x-20'>
                        <TextHeader header1="Rules and" header2="Guidelines" />
                        <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] hidden md:block w-[14px] h-[15px]' />
                    </div>
                    <p className='text-[14px] text-center md:text-left text-white leading-[28px] '>Our tech hackathon is a Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
                </div>
                <div className=' w-[70%] md:w-[70%] relative order-1 md:order-2'>
                    <div className='w-full  mx-auto'>
                        <img src='/images/Rules.svg' className='w-full ' alt="the big idea" />
                    </div>

                    {/* The second blur lightning at the background  starts here */}
                    <div className='bg-[#903AFF] blur-[50px] md:blur-[80px] h-[40px] w-[100px] md:h-[350px] md:w-[100px] rounded-full absolute md:bottom-[-180px] lg:bottom-[0px] md:right-[-50px] lg:right-[0px] z-0 right-[-120px] bottom-0'>

                    </div>

                    {/* The second blur lightning at the background  starts here */}
                </div>


            </div>

            <img src="/images/star.svg" alt="star" className='w-[26px] h-[32px] hidden md:block absolute bottom-[20%] left-[45%] ' />
           
        </div>
    )
}

export default RulesSection