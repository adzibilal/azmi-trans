import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

const HeaderAccents = () => {
    return (
        <div className='bg-yellow-primary'>
            <div className='max-con py-2'>
                <div className='flex justify-between items-center max-md:flex-col'>
                    <div className='flex gap-3 items-center'>
                        <FaWhatsapp />
                        <div className='font-bold'>0838 7887 5304</div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <AiFillMail />
                        <div className='font-bold'>azmitransbandung@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAccents
