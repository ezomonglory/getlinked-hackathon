/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PrizeAward = ({ bg, src, text, amount, color}) => {
    return (
        <div className="w-full mont-bold">


            <div className={`${bg} relative  `}>
                <img src={src} alt="medal1 " className={`${text === "1st" ? "w-[200px] h-[200px] top-[-55%] lg:left-[0] md:left-[10%] left-[1%] " : "md:top-[-35%] top-[-50%] left-[3%] lg:left-[0] md:left-[10%] w-[150px] h-[150px] "} absolute  `} />

                <div className='mt-[70px] md:mt-[100px] text-center w-full'>
                    <h1 className='text-white text-[14px] md:text-[40px] font-[700] leading-[27px] '>{text}  </h1>
                    <p className='text-white text-[14px] md:text-[24px]'>Runner</p>
                    <p className={` text-[16px] md:text-[32px] font-[700] mt-[20px] ${text === "1st" ? "text-[#903AFF]" : "text-[#D434FE]"} `}>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default PrizeAward