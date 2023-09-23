import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

const HeaderModal = ({setOpen, contact}) => {

    const router = useRouter()

    return (
        <div className='headerModal py-[40px] px-[40px] z-[9999] fixed top-2 right-2 w-[90%] md:w-[350px] h-[500] lg:hidden   '>
            <div className='relaive w-[40px] h-[40px] flex items-center justify-center rounded-full absolute right-8   ' 
            style={{backgroundImage: 'url("/images/cancel.svg")',
            backgroundRepeat:"no-repeat",        
            backgroundSize:"cover",
            backgroundPosition:"cover"
            
            
        }}
            onClick={()=> {
                setOpen(false)
            }} >
                
                <h1 className=' text-white clash-bold ' >x</h1>
            </div>

            <div className=' flex flex-col gap-[30px] items-start mt-[50px] '>
                <ul className='flex flex-col space-y-[28px]'>
                    <li className=' cursor-pointer inter text-[18px] text-white font-[400] '>Timeline</li>
                    <li className=' cursor-pointer inter text-[18px] text-white font-[400] '>Overview</li>
                    <li className=' cursor-pointer inter text-[18px] text-white font-[400] '>FAQs</li>
                    <li onClick={()=> {
                        router.push("/Contact")
                    }} className={`${contact ? "contact" : ""} text-[18px] cursor-pointer inter text-white font-[400] `}>Contact</li>
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

export default HeaderModal