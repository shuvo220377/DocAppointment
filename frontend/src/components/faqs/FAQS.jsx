import React from 'react'
import Faq from './Faq'

const FAQS = () => {

    

    const faqs = [
        {
            id:1,
            question:'What is DocAppointment?',
            desc:'DocAppointment is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:2,
            question:'What Services do DocAppointment Provide?',
            desc:'DocAppointment is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:3,
            question:'Do I need to register to avail services?',
            desc:'DocAppointment is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:4,
            question:'How much is the service charge?',
            desc:'DocAppointment is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
        {
            id:5,
            question:'Do you have any refund policy?',
            desc:'DocAppointment is an online platform for integrated healthcare services, which is operated by Sasthya Seba Limited and used by doctors, patients, clinics and hospitals.'
        },
    ]


  return (
    <>
        <div className='py-8 bg-gray-100 mt-7 lg:px-[200px]'>
            <div>
            {
                faqs.map((faq, index)=>
                   <Faq key={faq.id} {...faq} />
                )
            }
            </div>
        </div>
    </>
  )
}

export default FAQS