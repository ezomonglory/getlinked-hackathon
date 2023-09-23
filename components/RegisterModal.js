/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

const RegisterModal = () => {
    const Router = useRouter()

    return (
        <div className='fixed register-mod w-full h-screen flex items-center justify-center z-50 '  >
            <div className=' w-[90%] lg:w-[50%] pop-up p-[40px] '>
                <div className='flex relative justify-center items-center'>
                    <img src='/images/reg-check.svg' alt="check" className='' />
                    <img src='/images/reg-man.svg' alt="check" className='  md:ml-[-15%] ml-[-30%]  lg:ml-[-7%] ' />
                </div>

                <div>
                    <h1 className=' text-[20px] md:text-[40px] text-white text-center mb-[10px] ' >Congratulations <br className='hidden md:block' />  you have successfully Registered!</h1>

                    <div className='flex flex-col justify-center items-center  mb-[40px] ' >
                        <p className='text-white  '>Yes, it was easy and you did it! </p>
                        <div className='flex '>
                            <p className='text-white text-center ' > check your mail box for next step</p>
                            <img src='/images/emoji.svg' alt="check" className='' />

                        </div>
                    </div>
                </div>

                <div className='cursor-pointer' onClick={() => {
                    Router.push("/")
                }}>
                    <Button text="Back" />
                </div>
            </div>
        </div>
    )
}

export default RegisterModal