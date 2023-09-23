/* eslint-disable react/display-name */
import React from 'react'

const RegisterInput = React.forwardRef(({ label, type, placeholder } , ref ) => {
  return (
    <div className='w-full'>
        <label className='w-full'>
            <h1 className='text-white mb-[10px]'>{label}</h1>            
            <input type={type} ref={ref} placeholder={placeholder} className='border text-white w-full border-white rounded-md p-[10px] bg-transparent ' />            
        </label>
    </div>
  )
});

export default RegisterInput