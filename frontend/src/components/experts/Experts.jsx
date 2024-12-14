import React from 'react';
import img1 from '../../assets/ex1.png';
import img2 from '../../assets/ex2.png';
import img3 from '../../assets/ex3.png';
import { Link } from 'react-router-dom';

const Experts = () => {

    const experts = [
        {
            name:'Dr. Ashikur Rahman',
            post:'Cardioloogist',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            rating:4.8,
            img:img3,
            id:1
        },
        {
            name:'Dr. Subrina',
            post:'Neurologist',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            rating:4.8,
            img:img3,
            id:2
        },
        {
            name:'Dr. Suborna',
            post:'Gestroantorgolist',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            rating:4.8,
            img:img3,
            id:3
        },
    ]

  return (
    <>

        <h1 className='text-center md:text-[50px] py-5 lg:pt-[55px] font-semibold text-gray-700'>Our Expert Doctors</h1>

        <div className='flex justify-between items-center flex-col md:flex-row lg:pt-[55px] md:pt-[35px] lg:px-[50px] md:px-[35px]'>
            {
                experts.map((expert)=>(
                    <div className=' p-5 rounded transition-all shadow-md hover:shadow-2xl hover:pt-5'>
                        <img src={expert.img} alt='img' className='lg:w-[250px] lg:h-[300px]' />
                        <h3 className='text-[25px] text-gray-700 py-3'>{expert.name}</h3>
                        <span className='bg-blue-200 py-2 px-3 text-blue-700 rounded'>{expert.post}</span>
                        <p className='text-[18px] text-gray-500 py-3'>{expert.rating}(Ratings)</p>
                        <Link to={`/doctor/${expert.id}`}>
                            <button className='bg-blue-500 py-2 px-3 text-white rounded'>Book Appointment</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Experts