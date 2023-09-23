import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { useRouter } from "next/navigation"
import HeaderModal from './HeaderModal'



const Header = ({ contact }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between px-[34px] lg:px-[90px] py-[25px] border-color '>

            {
                open && (<HeaderModal contact={contact} setOpen={setOpen} />)
            }

            <div className='cursor-pointer clash-bold' 
            onClick={()=> {
                router.push("/")
            }}
            >
                <span className=' text-[16px] lg:text-[36px] font-[700] text-white'>get</span><span className='text-[16px] lg:text-[36px] font-[700] text-[#D434FE]'>linked</span>
            </div>

            <div className='block lg:hidden' onClick={()=> {
                setOpen(true)
            }} > 
            <Image src="/images/harmburger.svg" width={19} height={14} alt="menu" className='' />
            </div>

            <div className='lg:flex items-center justify-between  w-[60%] hidden'>
                <ul className='flex space-x-[52px]'>
                    <li className=' cursor-pointer text-[16px] text-white font-[400] '>Timeline</li>
                    <li className=' cursor-pointer text-[16px] text-white font-[400] '>Overview</li>
                    <li className=' cursor-pointer text-[16px] text-white font-[400] '>FAQs</li>
                    <li onClick={()=> {
                        router.push("/Contact")
                    }} className={`${contact ? "contact" : ""} text-[16px] cursor-pointer text-white font-[400] `}>Contact</li>
                </ul>

                <div 
                className='cursor-pointer'
                onClick={()=> {
                        router.push("/Register")
                    }} >

                <Button  text="Register" />
                </div>
            </div>
        </div>
    )
}

export default Header