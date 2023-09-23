/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PrivacyList = ({text}) => {
  return (
    <div className='flex items-start gap-[10px] mb-[15px]  '>
        <img src="./images/check.svg" className='w-[17px] h-[17px]  ' alt="check"  />
        <p className='text-[14px] text-white '> {text} </p>
    </div>
  )
}

export default PrivacyList