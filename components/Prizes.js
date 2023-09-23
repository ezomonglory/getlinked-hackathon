/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextHeader from './TextHeader'
import PrizesMain from './PrizesMain'

const Prizes = () => {
    return (
        <div className='py-[40px] relative overflow-hidden border-color'>
            {/* The blur lightning at the background  starts here */}
            <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[40px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute top-[18%] left-[5%] md:top-[25%] md:left-[15%] z-0'>

            </div>
            {/* The blur lightning at the background  ends here */}


            {/* Absolute positions of the stars */}
            <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute top-[15%] left-[20%]' />

            <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[55%] right-[5%]   ' />

            <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[35%] right-[50%]   ' />

            <img src="/images/star-gray.svg" alt="fire" className='bottom-[5%] left-[15%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

            <img src="/images/star-gray.svg" alt="fire" className='bottom-[0%] right-[15%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

            {/* Absolute position of the stars ends here */}

            <div className='flex justify-between items-start  w-[70%] mx-auto '>
                <img src='/images/sata.svg' alt="start" className='md:w-[21px] md:h-[25px] ' />
                <div className='text-left'>
                    <TextHeader header1="Prizes and" header2="Rewards" />
                    <p className='text-white'>Highlight of the prizes or rewards for winners  and <br className='hidden md:block' /> for participants </p>
                </div>
            </div>

            <div className=' mt-[20%] md:mt-[15%] '>
                <PrizesMain />
            </div>

            {/* The second blur lightning at the background  starts here */}
            <div className='bg-[#903AFF] blur-[50px] md:blur-[80px] h-[40px] w-[100px] md:h-[350px] md:w-[100px] rounded-full absolute md:bottom-[-180px] lg:bottom-[0px] md:right-[-50px] lg:right-[0px] z-0 right-[-120px] bottom-0'>

            </div>

            {/* The second blur lightning at the background  starts here */}
        </div>
    )
}

export default Prizes