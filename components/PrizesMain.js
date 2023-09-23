/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PrizeAward from './PrizeAward'

const PrizesMain = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-[95%] mx-auto '>

        <div className=' w-[90%] md:w-[40%] mt-[-15%]'>
        <img src='/images/cup.svg' alt="cup" className='w-full' />
        </div>

        <div className='w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-[3%]  justify-center flex mt-[30%] md:mt-0 '>
            <div className='w-[30%]'>
            <PrizeAward bg="second" text="2nd" amount="N300,00" src="/images/second.svg" color="#D434FE" />
            </div>
            <div className='w-[40%]'>
            <PrizeAward bg="first" text="1st" amount="N400,00" src="/images/first.svg" color="#903AFF" />
            </div>
            <div className='w-[30%]'>
            <PrizeAward bg="third" text="3rd" amount="N150,00" src="/images/third.svg" color="#D434FE" />
            </div>
        </div>
    </div>
  )
}

export default PrizesMain