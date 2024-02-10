import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButton = () => {
    return (
        <>
            <div className='bg-green-500 hover:bg-green-600 text-white fixed right-10 bottom-10 rounded-full text-3xl p-2 cursor-pointer z-50'>
                <FaWhatsapp />
            </div>
        </>
    )
}

export default FloatingButton
