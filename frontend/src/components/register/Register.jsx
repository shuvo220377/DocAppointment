import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/user/register',{
        name,email,password
      });
      if(res.status === 200){
        window.alert('registration successful');
        navigate('/login')
      }
    } catch (error) {
      window.alert('invalid registration');
    }
  }

  return (
    <>
    <div className='flex justify-center items-center p-10 lg:py-[100px]'>
        <div className=' p-5 shadow'>
        <h2 className='text-center text-[25px] text-gray-700'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='mt-2'>
                    <input 
                       type='text'
                       onChange={(e)=>setName(e.target.value)}
                       placeholder='Name'
                       className='border border-blue-300 py-2 px-3 outline-blue-400'
                     />
                </div>
                <div className='mt-2'>
                    <input 
                       type='email'
                       onChange={(e)=>setEmail(e.target.value)}
                       placeholder='Email'
                       className='border border-blue-300 py-2 px-3 outline-blue-400'
                     />
                </div>
                <div className='mt-2'>
                    <input 
                       type='password'
                       onChange={(e)=>setPassword(e.target.value)}
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