import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className='flex justify-center items-center p-10 lg:py-[100px]'>
        <div className=' p-5 shadow'>
        <h2 className='text-center text-[25px] text-gray-700'>Registration Form</h2>
            <form>
                <div className='mt-2'>
                    <input 
                       type='text'
                       placeholder='Name'
                       className='border border-blue-300 py-2 px-3 outline-blue-400'
                     />
                </div>
                <div className='mt-2'>
                    <input 
                       type='email'
                       placeholder='Email'
                       className='border border-blue-300 py-2 px-3 outline-blue-400'
                     />
                </div>
                <div className='mt-2'>
                    <input 
                       type='password'
                       placeholder='Password'
                       className='border border-blue-300 py-2 px-3 outline-blue-400'
                     />
                </div>
                <button className='py-2 px-3 bg-blue-500 text-white mt-2 w-full hover:bg-blue-600 transition-all'>Register</button>
            </form>
            <p className='py-2 text-[16px]'> have an account?<Link to='/login' className='text-blue-500'>Login</Link></p>
        </div>
    </div>
</>
  )
}

export default Register