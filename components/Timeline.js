/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TimeLineText from './TimeLineText'
import TimeLineNumber from './TimeLineNumber'

// using an array so i can loop through the datas to make my code simple and clean
const data = [
    {
        header: "Hackathon Announcement",
        text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
        number: "1",
        h1_style: "text-left",
        style: "text-right"
    },
    {
        header: "Teams Registration begins",
        text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        number: "2",
        style: "text-left"
    },
    {
        header: "Teams Registration ends",
        text: "Interested Participants are no longer Allowed to register",
        number: "3",
        h1_style: "text-left",
        style: "text-right"
    },
    {
        header: "Announcement of the accepted teams and ideas",
        text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        number: "4",
        style: "text-left"
    },

    {
        header: "Getlinked Hackathon 1.0 Offically Begins",
        text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
        number: "5",
        h1_style: "text-left",
        style: "text-right"
    },
    {
        header: "Demo Day",
        text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        number: "6",
        style: "text-left"
    },







]


const Timeline = () => {
    return (
        <div className='w-[90%] mx-auto md:w-full py-[60px] relative border-color  '>

            {/* Absolute positions of the stars */}
            <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[15%] left-[20%]' />

            <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[45%] right-[20%]   ' />

            <img src="/images/star-gray.svg" alt="fire" className='bottom-[10%] left-[10%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

            {/* Absolute position of the images ends here */}

            <div className='flex flex-col items-center mb-[80px] '>
                <h1 className='md:text-[32px] md:font-[700] text-white clash-bold '>Timeline</h1>
                <p className='  text-center md:text-[14px] md:font-[400] text-white '>Here is the breakdown of the time we anticipate <br /> using for the upcoming event.</p>
            </div>

            <div className='md:flex flex-col gap-[10px] hidden '>
                {data.map((data, index) => {
                    if (index === 0 || index === 2 || index === 4) {
                        return (
                            <div key={index} className='flex  items-center lg:items-end md:w-[80%] mx-auto '>
                                <div className='w-[40%] '>
                                    <TimeLineText header={data.header} text={data.text} style={data.style} />
                                </div>
                                <div className='w-[20%] '>
                                    <TimeLineNumber number={data.number} />
                                </div>
                                <div className='w-[40%] '>
                                    <h1 className={`text-[#D434FE] text-[24px] font-[700] ${data.h1_style} `}> November 18, 2023 </h1>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className='flex items-center  md:w-[80%] mx-auto '>
                                <div className='w-[40%] '>
                                    <h1 className={`text-[#D434FE] text-[24px] text-right font-[700] `}> November 18, 2023 </h1>
                                </div>
                                <div className='w-[20%] '>
                                    <TimeLineNumber number={data.number} />
                                </div>
                                <div className='w-[40%] '>
                                    <TimeLineText header={data.header} text={data.text} style={data.style} />
                                </div>
                            </div>
                        )
                    }

                })}



            </div>

            <div className='md:hidden flex flex-col space-y-[40px]'>
                {data.map((data, index) => {

                    return (
                        <div  key={index} className='flex gap-4'>
                        <TimeLineNumber number={data.number} />
                        <div className='flex flex-col justify-between'>
                            <TimeLineText header={data.header} text={data.text} style="text-left" />
                            <h1 className={`text-[#D434FE] text-[16px] font-[700] `}> November 18, 2023 </h1>
                        </div>
                    </div>                      
                    )
                }

                )}

            
            </div>
        </div>



    )
}

export default Timeline