/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FaqText = ({ text }) => {
    return (
        <div className='flex border border-transparent border-b-[#D434FE] pb-[5px] mb-[20px] '>
            <h1 className='text-[14px] text-white leading-[28px] font-[400] flex-grow'> {text} </h1>
            <h1 className='text-[20px] text-[#D434FE] ' >+</h1>           
        </div>
    )
}

export default FaqText