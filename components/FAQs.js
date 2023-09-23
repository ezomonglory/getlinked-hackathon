/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'
import FaqText from './FaqText'
import Image from 'next/image'

const FAQs = () => {
    return (
        <div className='w-[90%] md:w-full mx-auto md:py-[100px] py-[30px] border-color relative overflow-x-hidden'>


            <div className='flex justify-between flex-col md:flex-row  md:w-[90%] lg:w-[85%] mx-auto items-center md:gap-[50px]'>
                <div className=' w-[85%] mt-[20px] md:mt-0 md:w-[40%]  relative'>
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[-20px] md:top-[-40px] left-0' />

                    <div className=' md:mb-[50px]'>
                        <TextHeader header1="Frequently Ask" header2="Question" />

                        <p className='text-[14px] text-center md:text-left text-white leading-[28px] '>Our tech hackathon is
                            We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
                        </p>
                    </div>

                    <FaqText text="Can I work on a project I started before the hackathon?" />
                    <FaqText text="What happens if I need help during the hackathon?" />
                    <FaqText text="What happens if I don't have an idea for a project?" />
                    <FaqText text="Can I join a team or do I have to come with one?" />
                    <FaqText text="What happens after the hackathon ends" />


                </div>
                <div className=' w-[100%] md:w-[60%] relative  mt-[20%] md:mt-0 '>
                    <img src='/images/quest1.svg' className='absolute w-[30px] md:w-[50px]  top-[-5%] left-[10%] ' alt="question mark" />
                    <img src='/images/quest2.svg' className='absolute w-[40px] top-[-15%] left-[30%]' alt="question mark" />
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] w-[13px] absolute left-[45%]' />
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] w-[13px] top-[20%] absolute left-[20%]' />
                    <img src='/images/quest1.svg' className='absolute  w-[30px] md:w-[50px] top-[-5%] left-[60%] ' alt="question mark" />

                    <div className='w-full  mx-auto md:mt-[30px] lg:mt-0 mt-0'>
                        <img src='/images/FAQ.svg' className='w-full ' alt="the big idea" />

                    </div>

                    <img src="/images/star-gray.svg" alt="fire" className='bottom-[50%] left-[40px] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

                    <img src="/images/star.svg"  alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-0 right-[30px] md:right-0  ' />
                </div>


            </div>    

        </div >
    )
}

export default FAQs