import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='py-20' id='tentang-kami'>
            <div className='max-con'>
                <div className='grid grid-cols-[1.5fr_2fr] gap-3 items-center'>
                    <div className=''>
                        <Image
                            width={1000}
                            height={1000}
                            alt=''
                            src='/images/about-us.png'
                        />
                    </div>
                    <div className=''>
                        <div className='text-3xl font-bold text-zinc-800'>
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

                        <div className="bg-yellow-primary px-10 py-2 text-xl mt-5 rounded-md w-max font-semibold cursor-pointer hover:scale-105">Selengkapnya</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
