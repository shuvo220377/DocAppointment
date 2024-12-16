import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:px-[150px] p-3 justify-between items-center bg-blue-900 text-white lg:pt-[50px] pt-16 lg:pb-[50px]'>
      
        <div className='flex flex-row items-center text-[16px] gap-5 font-semibold'>
          <ul>
          <h className='text-[25px] font-bold py-5'>DocAppointment</h>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div className='flex flex-row items-center text-[16px] gap-5 font-semibold'>
          <ul>
          <h className='text-[25px] font-bold py-5'>For Patient</h>
            <li>FAQ'S</li>
            <li>Find a Doctors</li>
            <li>Find Ambulience</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cancelation Policy</li>
            <li>Find Reports</li>
          </ul>
        </div>
        <div className='flex flex-row items-center text-[16px] gap-5 font-semibold'>
          <ul>
          <h className='text-[25px] font-bold py-5'>For Doctors/Organizations</h>
            <li>Login as Doctor</li>
            <li>Work With Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Refund Policy</li>
            <li>Account Deletation</li>
          </ul>
        </div>
      </div>
      <a href='https://github.com/shuvo220377'><h3 className='text-center bg-blue-900 py-3 text-white'>&copy;github.com/shuvo220377</h3></a>
    </>
  )
}

export default Footer