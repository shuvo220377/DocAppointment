import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const menu = [
        {
            path:'/',
            displayName:'Home'
        },
        {
            path:'/services',
            displayName:'Services'
        },
        {
            path:'/about',
            displayName:'About'
        },
        {
            path:'/contact',
            displayName:'Contact'
        }
    ]

  return (
    <>
        <div className='flex justify-between items-center py-5 px-8 bg-white shadow-md'>
            <Link to='/' className='text-[20px] font-extrabold'>Doc<span className='text-blue-500'>Appointment</span></Link>
            <div className='hidden md:flex items-center gap-5 text-gray-800'>
                {
                    menu.map(item=>(
                        <ul className='text-[16px]'>
                            <li>
                                <Link to={item.path}>{item.displayName}</Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Navbar