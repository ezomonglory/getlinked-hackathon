import Image from 'next/image'
import React from 'react'

const HeroTop = () => {
    return (
        <div className='lg:flex  justify-between items-center md:items-end md:pr-[55px]  '>
            <Image src="/images/star.svg" width={26} height={32} alt="star" className='ml-[13%] hidden md:block ' />
            <div className='flex flex-col items-center md:items-end  '>
                <div className='flex flex-col items-end' >
                    <h1 className=' text-white text-[16px]  md:text-[24px] lg:text-[32px] italic font-[700] mont-italic '>Igniting a Revolution in HR Innovation</h1>
                    <svg className='hidden md:block  ' xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
                        <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
                    </svg>

                    {/* For mobile  */}
                    <svg className='block md:hidden' xmlns="http://www.w3.org/2000/svg" width="117" height="11" viewBox="0 0 117 11" fill="none">
                        <path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" stroke-width="3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeroTop