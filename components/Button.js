import React from 'react'

const Button = ({text}) => {
    return (
        <div className='text-[16px] text-white font-[400]  2xl:px-[52px] 2xl:py-[16px] px-[48px] py-[12px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] rounded-sm text-center' >
            {text}
        </div>
    )
}

export default Button