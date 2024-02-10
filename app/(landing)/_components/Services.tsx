import React from 'react'
import { FaHome, FaBoxOpen, FaTicketAlt } from 'react-icons/fa'

const Services = () => {
    return (
        <div className='py-40 bg-zinc-50' id='layanan'>
            <div className='max-con'>
                <div className='text-center text-zinc-800 font-bold text-4xl uppercase'>
                    Layanan Kami
                </div>
                <div className='text-center text-zinc-500 mt-5'>
                    Azmi Trans menawarkan berbagai layanan perjalanan antar
                    kota, antara lain:
                </div>

                <div className='grid grid-cols-3 gap-4 mt-14 max-md:grid-cols-1'>
                    <div className='bg-white shadow-md text-center p-5 flex flex-col items-center justify-center rounded-2xl py-10'>
                        <div className='rounded-full shadow-sm bg-yellow-primary mb-5 text-[100px] p-8 text-white'>
                            <FaHome />
                        </div>
                        <div className='text-yellow-primary font-bold text-xl mb-2'>
                            Jemput Depan Rumah
                        </div>
                        <div className='text-sm text-zinc-500'>
                            Kami menyediakan layanan jemput depan rumah untuk
                            memudahkan Anda dalam memulai perjalanan.
                        </div>
                    </div>
                    <div className='bg-white shadow-md text-center p-5 flex flex-col items-center justify-center rounded-2xl py-10'>
                        <div className='rounded-full shadow-sm bg-yellow-primary mb-5 text-[100px] p-8 text-white'>
                            <FaBoxOpen />
                        </div>
                        <div className='text-yellow-primary font-bold text-xl mb-2'>
                            Kirim Paket Kilat
                        </div>
                        <div className='text-sm text-zinc-500'>
                            Kami juga menyediakan layanan kirim paket kilat
                            untuk mengantarkan barang Anda dengan cepat dan
                            aman.
                        </div>
                    </div>
                    <div className='bg-white shadow-md text-center p-5 flex flex-col items-center justify-center rounded-2xl py-10'>
                        <div className='rounded-full shadow-sm bg-yellow-primary mb-5 text-[100px] p-8 text-white'>
                            <FaTicketAlt />
                        </div>
                        <div className='text-yellow-primary font-bold text-xl mb-2'>
                            Reguler/Private
                        </div>
                        <div className='text-sm text-zinc-500'>
                            Anda dapat memilih layanan reguler dengan harga yang
                            lebih terjangkau atau layanan private untuk
                            perjalanan yang lebih eksklusif.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
