import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const HeaderAccents = () => {
    return (
        <div className='bg-yellow-primary'>
            <div className='max-con py-2'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <FaWhatsapp />
                        <div className='font-bold'>08912983294</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAccents
