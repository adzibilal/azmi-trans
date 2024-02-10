import Image from 'next/image'
import React from 'react'
import {
    FaWhatsapp,
    FaMapPin,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaTiktok
} from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='bg-zinc-900'>
            <div className='max-con py-10'>
                <div className='grid grid-cols-3 gap-3 max-md:grid-cols-1'>
                    <div className=''>
                        <div className='w-[100px] h-[100px] bg-white flex items-center justify-center p-3 rounded-xl'>
                            <Image
                                width={300}
                                height={100}
                                alt=''
                                src='/images/logo.png'
                            />
                        </div>

                        <div className='flex items-center gap-3 mt-5'>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1 cursor-pointer'>
                                <FaWhatsapp />
                            </div>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1 cursor-pointer'>
                                <FaFacebook />
                            </div>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1 cursor-pointer'>
                                <FaTwitter />
                            </div>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1 cursor-pointer'>
                                <FaYoutube />
                            </div>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1 cursor-pointer'>
                                <FaTiktok />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border-b-2 border-b-yellow-primary w-max pb-1 text-white text-lg font-semibold mb-5'>
                            Kontak Kami
                        </div>
                        <div className='flex items-center gap-3 mb-2'>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1'>
                                <FaWhatsapp />
                            </div>
                            <div className='text-white'>082218299990</div>
                        </div>
                        <div className='flex items-center gap-3 mb-2'>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1'>
                                <AiFillMail />
                            </div>
                            <div className='text-white'>
                                azmitransbandung@gmail.com
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <div className='bg-yellow-primary text-white text-xl rounded-full p-1'>
                                <FaMapPin />
                            </div>
                            <div className='text-white'>
                                Gg. SD Pelangi, Sukamukti, Kec. Majalaya,
                                Kabupaten Bandung, Jawa Barat 40392
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='border-b-2 border-b-yellow-primary w-max pb-1 text-white text-lg font-semibold mb-5'>
                            Maps
                        </div>
                        <iframe
                            className='w-full'
                            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.633936663326!2d107.744558!3d-7.052228999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnMDguMCJTIDEwN8KwNDQnNDAuNCJF!5e0!3m2!1sid!2sid!4v1707548877936!5m2!1sid!2sid'
                            loading='lazy'></iframe>
                    </div>
                </div>

                <div className='text-center mt-10 text-white'>
                    ©2024 Azmi Trans Travel & Tour All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
