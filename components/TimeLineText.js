import React from 'react'

const TimeLineText = ({header, text, style}) => {
  return (
    <div className='w-full'>
        <h1 className={`text-[#D434FE] text-[16px] md:text-[24px] font-[700] mont-bold ${style}`}>{header}</h1>
        <p className={`text-white font-[400]  md:text-[14px] leading-[23px] ${style} `}>{text}</p>
    </div>
  )
}

export default TimeLineText