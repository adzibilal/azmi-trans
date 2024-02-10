'use client'
import Image from 'next/image'
import React from 'react'
import HeaderAccents from './HeaderAccents'
import { navbarLinks } from '@/constants/links'
import Link from 'next/link'
import { handleWa } from '@/constants/wa'

const Navbar = () => {
    return (
        <>
            <HeaderAccents />
            <div className='shadow-xl sticky top-0 bg-white z-10'>
                <div className='max-con py-3 flex justify-between items-center'>
                    <Image
                        className='h-[60px] w-auto'
                        src='/images/logo.png'
                        width={300}
                        height={100}
                        alt='Asmi Trans Logo'
                    />

                    <div className='flex gap-3 max-md:hidden'>
                        {navbarLinks.map((link, index) => (
                            <Link
                                className='px-3 py-2 text-zinc-950 bg-white hover:bg-yellow-primary rounded-md transition-all duration-200 ease-out'
                                href={link.path}
                                key={index}>
                                <div className=''>{link.name}</div>
                            </Link>
                        ))}
                    </div>

                    <div
                        onClick={handleWa}
                        className='bg-yellow-primary font-semibold uppercase w-max px-5 py-2 rounded-md hover:opacity-90 cursor-pointer'>
                        Hubungi Kami
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
