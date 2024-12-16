import React, { useState } from 'react'

const Faq = ({ question, desc }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => { setOpen(!open) }} className='w-full cursor-pointer bg-white m-3 p-5 transition-all rounded shadow-md'>
                <h3 className='lg:text-[25px] md:text-[22px] text-blue-950' >{question}</h3>
                {open && <div>

                    <> <hr className='py-1 text-black' />
                     <p className=' lg:text-[20px]'>{desc}</p> 
                     </>

                </div>}
            </div>
        </>
    )
}

export default Faq