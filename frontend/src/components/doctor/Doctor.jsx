import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import img from '../../assets/ex3.png'
import DoctorAbout from './DoctorAbout';
import DoctorDetails from './DoctorDetails';

const Doctor = () => {

  const params = useParams();

  const[tab, setTab] = useState('about')


  return (
    <>
      <div className='flex flex-col md:flex-row lg:px-[50px] py-5 gap-5'>

        <div className='border border-gray-400 p-2 rounded shadow-md'>
          <img src={img} alt='image' />
          <h3 className='text-[23px] font-semibold text-gray-500 py-2'>Dr.Subrina</h3>
          <span className='bg-blue-200 font-semibold text-[18px] text-blue-500 py-2 px-3 rounded'>Nourologist</span>
          <p className='text-[16px] pt-2 font-semibold text-gray-500'>4.8(Ratings)</p>
        </div>

        <div className=''>
          <h3 className='text-[25px] text-gray-600'>Doctor Profile</h3>
          <div className='flex gap-5 text-[18px]'>
            <button onClick={()=>setTab('about')} className={`${tab === 'about' && 'border-b-2 border-blue-500 font-semibold'}`}>About</button>
            <button onClick={()=>setTab('details')} className={`${tab === 'details' && 'border-b-2 border-blue-500 font-semibold'}`}>Details</button>
          </div>
          <hr />

          {
            tab === 'about' ? <DoctorAbout /> : <DoctorDetails />
          }

        </div>

        <div className='p-3 border border-blue-300 flex'>
          <div className=''>
            <h3>Name : Dr. Sabrina</h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default Doctor