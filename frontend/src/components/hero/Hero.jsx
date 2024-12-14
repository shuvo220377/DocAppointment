import React from 'react';
import img01 from '../../assets/5.png';
import AccessibleIcon from '@mui/icons-material/Accessible';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Hero = () => {

  const service = [
    {
      name:'Help',
      icon : <AccessibleIcon style={{ width: '100px', height: '100px' }} />,
      desc:'We always try to help our patient untill their satisfication.'
    },
    {
      name:'Security',
      icon : <VpnLockIcon style={{ width: '100px', height: '100px' }} />,
      desc:'We always try to secure client information.'
    },
    {
      name:'Emergency',
      icon : <MedicalServicesIcon style={{ width: '100px', height: '100px' }} />,
      desc:'We always try to help our patient untill their satisfication.'
    }
  ]

  return (
    <>
        <div className='flex flex-col md:flex-row items-center pt-10 px-10 gap-5'>
            <div className='lg:w-[570px]'>
                <h1 className='lg:text-[45px] font-[600] text-gray-700 leading-[55px]'>Our goal is our customer 
                <span className='text-blue-600'> satisfication.</span> you can believe on us.</h1>
                <p className='text-gray-800 py-4 font-[400] text-[22px]'>you can visit our clinic any time.we try to make our patient happy.
                there are many doctors here.you can choose your own.</p>
                <button className='bg-blue-600 py-2 px-3 text-white rounded'>Book a Appointment</button>
            </div>

            <div className='flex justify-end'>
                <img className='' src={img01} alt='img' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center text-gray-700 text-[22px] py-[35px] gap-5'>
              {
                service.map((service)=>(
                  <div className='text-center hover:shadow-lg rounded-md transition-all'>
                      <span style={{width:100,height:100}}>{service.icon}</span>
                      <h3 className='text-[35px] text-semibold'>{service.name}</h3>
                      <p className='lg:pt-5'>{service.desc}</p>
                  </div>
                ))
              }
            </div>



    </>
  )
}

export default Hero