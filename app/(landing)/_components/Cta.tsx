'use client'
import { handleWa } from '@/constants/wa'
import React from 'react'

const Cta = () => {


    return (
        <div className='bg-yellow-primary'>
            <div className='max-con py-20 flex flex-col items-center justify-center'>
                <div className='font-bold text-center text-2xl max-w-4xl'>
                    Pesan tiket Anda sekarang dan nikmati perjalanan yang aman
                    dan nyaman bersama Azmi Trans!
                </div>

                <div
                    onClick={handleWa}
                    className='bg-zinc-800 text-white animate-bounce px-5 py-2 text-xl rounded-md mt-10 cursor-pointer'>
                    Pesan Tiket Sekarang
                </div>
            </div>
        </div>
    )
}

export default Cta
