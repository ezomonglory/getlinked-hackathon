import React from 'react'

const TextHeader = ({header1, header2}) => {
  return (
    <div className=' clash-bold lg:text-[32px] md:text-[24px] text-[20px] font-[700] text-center md:text-left  md:leading-[40px] mb-[20px] '>
        <h1 className='text-white'>{header1}</h1>
        <h1 className='text-[#D434FE]'>{header2}</h1>
    </div>
  )
}

export default TextHeader