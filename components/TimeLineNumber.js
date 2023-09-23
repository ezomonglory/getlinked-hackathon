import React from 'react'

const TimeLineNumber = ({number}) => {
  return (
    <div className='flex flex-col items-center gap-[5px]'>
        <div className='w-[4px] h-[100px] bg-[#D434FE] '>

        </div>

        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-[#D434FE] '>
            {number}
        </div>
    </div>
  )
}

export default TimeLineNumber