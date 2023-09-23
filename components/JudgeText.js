import React from 'react'

const JudgeText = ({ text1, text2 }) => {
    return (
        <div className='mb-[15px]'>
            <h1 className='text-[#FF26B9] text-center md:text-left text-[16px] font-[700] md:leading-[10px]  '>{text1}: <span className='text-white text-[14px] text-center md:text-left md:leading-[20px] 2xl:leading-[28px] font-[400] ' >{text2}</span></h1>

        </div>
    )
}

export default JudgeText