/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import RegisterInput from '../components/RegisterInput'
import Button from '../components/Button'
import Head from 'next/head'
import Header from '../components/Header'
import RegisterModal from '../components/RegisterModal'
import { useRouter } from 'next/navigation'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'

const Register = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [err, setErr] = useState("")
    const nameRef = useRef()
    const groupRef = useRef()
    const topicRef = useRef()
    const categoryRef = useRef()
    const numberRef = useRef()
    const mailRef = useRef()
    const policyRef = useRef()
    const [load, setLoad] = useState(false)

    const Submit = async () => {
        setLoad(true)
        const data = {
            email: mailRef.current.value,
            phone_number: numberRef.current.value,
            team_name: nameRef.current.value,
            group_size: Number(groupRef.current.value),
            project_topic: topicRef.current.value,
            category: Number(categoryRef.current.value),
            privacy_poclicy_accepted: true


        }

        console.log(data)


        axios.post("https://backend.getlinked.ai/hackathon/registration", data).then((res) => {
            console.log(res)
            setLoad(false)
            setOpen(true)

        }).catch((err) => {
            console.log(err.response.data.email)
            setErr(err.response.data.email)
            setLoad(false)
        })
    }

    return (
        <div >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=' bg-[#150E28] h-full relative '>

                {
                    open && (<RegisterModal />)
                }

                <div className='hidden lg:block'>
                    <Header />
                </div>
                <div className=' lg:hidden pt-[30px] pl-[30px] '
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    <img src='/images/bvck.svg' alt="start" className='w-[23px] h-[23px] ' />
                </div>
                <div className=' py-[80px] relative'>


                    <div className='w-[90%]  mx-auto flex flex-col md:flex-row items-center justify-center'>
                        <div className=' md:w-[50%]' >
                            <img src="/images/reg.svg" alt="3d model" />
                        </div>

                        <div className='contact-bg md:w-[50%] py-[40px]  '>
                            {err && (<p className='text-red-500 text-center '>{err} </p>)}
                            <div className='w-[80%] mx-auto '>
                                <h1 className='text-[32px] text-[#D434FE] mb-[20px] md:mb-[40px] clash-semi' >Register</h1>

                                <div className='flex items-end md:gap-[10px] mb-[10px] md:mb-[20px] '>
                                    <p className='text-white text-[14px] md:text-[16px] ' >Be part of this movement!</p>
                                    <svg width="101" height="1" viewBox="0 0 101 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="101" y2="0.5" stroke="#D434FE" stroke-dasharray="2 2" />
                                    </svg>

                                    <div className='ml-[-100px] flex '>
                                        <img src="/images/reg-wom.svg" alt="line" />
                                        <img src="/images/reg1.svg" alt="line" />
                                    </div>
                                </div>

                                <h1 className='text-white uppercase text-[24px] mb-[30px] ' >Create your Account</h1>

                                <div className='flex flex-col md:flex-row gap-[15px] md:gap-[30px] mb-[20px]  md:mb-[40px] ' >
                                    <RegisterInput label="Teams Name" ref={nameRef} placeholder="Enter the name of your group" type="text" />
                                    <RegisterInput label="Phone" ref={numberRef} placeholder="Enter your phone number" type="text" />

                                </div>

                                <div className='flex flex-col md:flex-row gap-[15px] md:ap-[30px]  mb-[20px]  md:mb-[40px]' >
                                    <RegisterInput label="Email" ref={mailRef} placeholder="Enter your email address" type="email" />
                                    <RegisterInput label="Project Topic" ref={topicRef} placeholder="What is your group project topic" type="text" />

                                </div>

                                <div className='flex flex-col w-full md:flex-row gap-[30px]' >
                                    <label className='w-full'>
                                        <h1 className='text-white' >Category</h1>
                                        <select placeholder='Select your category' ref={categoryRef} className=' p-[10px] bg-black boder-white border  text-white w-full '>
                                            <option value="1" disabled > Select  </option>
                                            <option className='text-white' value="1"> 1 </option>
                                            <option className='text-white' value="2"> 2 </option>
                                            <option className='text-white' value="3"> 3 </option>
                                            <option className='text-white' value="4"> 4 </option>
                                            <option className='text-white' value="5"> 5 </option>
                                        </select >
                                    </label>

                                    <label className='w-full'>
                                        <h1 className='text-white' >Group Size</h1>
                                        <select placeholder='Select your category' ref={groupRef} className=' p-[10px] bg-black boder-white border  text-white w-full '>
                                            <option value="1" disabled > Select your category </option>
                                            <option className='text-white' value="1"> 1 </option>
                                            <option className='text-white' value="2"> 2 </option>
                                            <option className='text-white' value="3"> 3 </option>
                                            <option className='text-white' value="4"> 4 </option>
                                            <option className='text-white' value="5"> 5 </option>
                                        </select >
                                    </label>

                                </div>

                                <p className='text-[#FF26B9] text-[12px] italic mt-[10px]  ' >Please review your registration details before submitting</p>

                                <div className='flex gap-[5px] mb-[30px] mt-[20px]'>
                                    <input ref={policyRef} type='checkbox' />
                                    <p className=' text-white text-[12px] ' > I agreed with the event terms and conditions and privacy policy</p>
                                </div>

                                <div className='flex items-center justify-center mt-[20px] cursor-pointer '
                                    onClick={() => {
                                        Submit()
                                    }}
                                >

                                    <div className=' inline-block text-[16px] text-white font-[400]  2xl:px-[52px] 2xl:py-[16px] px-[48px] py-[12px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] rounded-sm text-center' >
                                        {load ? <ClipLoader color='#fff' size={20} /> : "Register Now"}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* The blur lightning at the background  starts here */}
                    <div className='bg-[#903AFF] blur-[80px] md:blur-[100px] h-[120px] w-[200px] md:h-[150px] md:w-[300px] rounded-full absolute top-[18%] left-[5%] md:top-[25%] md:left-[1%] z-0'>

                    </div>
                    {/* The blur lightning at the background  ends here */}

                    {/* The second blur lightning at the background  starts here */}
                    <div className=' bg-[#903AFF] blur-[50px] md:blur-[120px] h-[40px] w-[100px] md:h-[350px] md:w-[200px] rounded-full absolute md:bottom-[-180px] lg:bottom-[0px] md:right-[-50px] lg:right-[50px] z-0 right-[-120px] bottom-0 hidden lg:block'>

                    </div>

                    {/* The second blur lightning at the background  starts here */}
                </div>

                {/* Absolute positions of the stars */}
                <img src='/images/star-gray.svg' alt="start" className='md:w-[21px] md:h-[25px] absolute bottom-[10%] left-[15%]' />

                <img src="/images/sata.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute top-[25%] left-[4%]   ' />

                <img src="/images/star.svg" alt="star" className='w-[13px] h-[15px] md:w-[26px] md:h-[32px] absolute bottom-[5%] right-[15%]   ' />

                <img src="/images/star-gray.svg" alt="fire" className='top-[20%] right-[15%] absolute w-[13px] h-[15px] md:w-[26px] md:h-[32px] ' />

                {/* Absolute position of the stars ends here */}


            </main>

        </div>

    )
}

export default Register