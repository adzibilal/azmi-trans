'use client'
import { handleWa } from '@/constants/wa'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='py-10'>
            <div className='max-con' id='tentang-kami'>
                <div className='grid grid-cols-[1.5fr_2fr] gap-3 items-center max-md:grid-cols-1'>
                    <div className=''>
                        <Image
                            width={1000}
                            height={1000}
                            alt=''
                            src='/images/about-us.png'
                        />
                    </div>
                    <div className='max-md:text-center'>
                        <div className='text-3xl font-bold text-zinc-800 max-md:text-2xl'>
                            Azmi Trans Solusi Perjalanan Aman, <br /> Nyaman,
                            dan Ekonomis
                        </div>
                        <div className='text-zinc-500 mt-5'>
                            Azmi Trans adalah perusahaan transportasi yang
                            berlokasi di Bandung, Jawa Barat. Kami telah
                            berpengalaman selama bertahun-tahun dalam
                            menyediakan layanan perjalanan antar kota yang aman,
                            nyaman, dan ekonomis. Kami berkomitmen untuk
                            memberikan pelayanan terbaik bagi para pelanggan
                            kami dengan menggunakan armada kendaraan yang
                            terawat dan pengemudi yang profesional.
                        </div>

                        <div
                            className='bg-yellow-primary px-10 py-2 text-xl mt-5 rounded-md w-max font-semibold cursor-pointer hover:scale-105 max-md:mx-auto'
                            onClick={handleWa}>
                            Selengkapnya
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
