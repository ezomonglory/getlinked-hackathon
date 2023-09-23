/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'
import JudgeText from './JudgeText'
import Button from './Button'
import Image from 'next/image'

const JudgingSection = () => {
    return (
        <div className='w-[90%] md:w-full mx-auto md:py-[60px] py-[30px] border-color '>
            <div className='flex flex-col md:flex-row  md:w-[90%]  mx-auto items-center md:gap-[60px] '>
                <div className=' w-[70%] md:w-[50%] xl:w-[50%] 2xl:w-[40%] md:mt-[60px] relative overflow-hiden '>
                    <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[40px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute bottom-[18%] left-[5%] md:bottom-[0px] md:left-[0px] z-0'>

                    </div>
                    <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] w-[14px] h-[15px] absolute md:top-[-120px] left-[120px]  ' />
                    <svg className='absolute top-[-8%] left-[13%] z-0 hidden md:block ' xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 134 134" fill="none">
                        <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_1_1027)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_1027" x1="120" y1="67" x2="3.69183" y2="67" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8F01FE" />
                                <stop offset="1" stop-color="#FF2674" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <img src="/images/star-gray.svg" alt="fire" className='md:bottom-[40%] mdLright-[40%]  absolute  bottom-[30%] right-[40%] md:w-[26px] md:h-[32px] w-[14px] h-[18px] ' />
                    <Image src="/images/star.svg" width={26} height={32} alt="star" className='absolute bottom-0 right-0 hidden md:block ' />
                    <div className='w-full  mx-auto relative z-20 mt-[30px] md:mt-0'>
                        <img src='/images/judge.svg' className='w-full z-20 ' alt="the big idea" />
                    </div>

                </div>

                <div className=' w-[85%] mt-[20px] md:mt-0 md:w-[50%] xl:w-[50%] flex flex-col items-center md:items-start relative'>
                    <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[40px] w-[200px] md:h-[150px] md:w-[150px] rounded-full absolute bottom-[18%] right-[5%] md:bottom-[-20%] md:right-[0%] z-0'>

                    </div>
                    <div className=''>
                        <TextHeader header1="Judging Criteria" header2="Key attributes" />
                    </div>
                    <JudgeText text1="Innovation and Creativity" text2="Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features." />

                    <JudgeText text1="Functionality" text2="Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution." />

                    <JudgeText text1="Impact and Relevance" text2="Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits." />

                    <JudgeText text1="Technical Complexity" text2="Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution." />

                    <JudgeText text1="Adherence to Hackathon Rules" text2="Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements." />

                    <div className='inline-block mt-[30px]'>
                        <Button text="Read More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JudgingSection