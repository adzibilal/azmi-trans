'use client'
import { handleWa } from '@/constants/wa'
import Image from 'next/image'
import React from 'react'

const Armada = () => {
    return (
        <div className='py-40 bg-zinc-50' id='armada'>
            <div className='max-con'>
                <div className='text-center text-zinc-800 font-bold text-4xl uppercase'>
                    Armada Kami
                </div>
                <div className='text-center text-zinc-500 mt-5 w-[90%] mx-auto mb-10'>
                    Andalkan Kenyamanan dan Keamanan Bersama Azmi Trans, Di Azmi
                    Trans, kami memahami pentingnya kenyamanan dan keamanan
                    dalam perjalanan Anda. Itulah sebabnya kami menyediakan
                    armada kendaraan yang modern, terawat, dan dikemudikan oleh
                    pengemudi profesional. Mari jelajahi pilihan armada kami:
                </div>

                <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 bg-white rounded-lg shadow-lg overflow-hidden items-center mb-10'>
                    <Image
                        width={1000}
                        height={500}
                        alt=''
                        src='/images/armada1.png'
                    />
                    <div className='px-5 max-md:pb-5'>
                        <div className='text-2xl font-semibold mb-2'>
                            Untuk Perjalanan Pribadi <br />
                            atau Kelompok Kecil:
                        </div>
                        <div className='mt-2'>
                            <b>Avanza:</b> Pilihan ekonomis dan nyaman untuk 7
                            penumpang. Cocok untuk perjalanan pribadi, wisata
                            keluarga, dan perjalanan bisnis.
                        </div>
                        <div className='mt-2'>
                            <b>Innova Reborn:</b> Kemewahan dan kenyamanan
                            ekstra untuk 7 penumpang. Nikmati interior luas,
                            kursi nyaman, dan fitur hiburan lengkap.
                        </div>

                        <div onClick={handleWa} className='bg-yellow-primary font-semibold uppercase w-max px-5 py-2 rounded-md hover:opacity-90 cursor-pointer mt-5'>
                            Booking
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 bg-white rounded-lg shadow-lg overflow-hidden items-center mb-10'>
                    <Image
                        width={1000}
                        height={500}
                        alt=''
                        src='/images/armada2.png'
                    />
                    <div className='px-5 max-md:pb-5'>
                        <div className='text-2xl font-semibold mb-2'>
                            Untuk Perjalanan Grup Sedang:
                        </div>
                        <div className='mt-2'>
                            <b>Hiace:</b> Ideal untuk 14 penumpang. Cocok untuk
                            rombongan wisata, perjalanan sekolah, atau acara
                            kantor. Ruang bagasi yang lega untuk membawa barang
                            bawaan Anda.
                        </div>

                        <div onClick={handleWa} className='bg-yellow-primary font-semibold uppercase w-max px-5 py-2 rounded-md hover:opacity-90 cursor-pointer mt-5'>
                            Booking
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 bg-white rounded-lg shadow-lg overflow-hidden items-center mb-10'>
                    <Image
                        width={1000}
                        height={500}
                        alt=''
                        src='/images/armada3.png'
                    />
                    <div className='px-5 max-md:pb-5'>
                        <div className='text-2xl font-semibold mb-2'>
                            Untuk Perjalanan Grup Besar:
                        </div>
                        <div className='mt-2'>
                            <b>Isuzu Elf:</b> Pilihan hemat untuk 20 penumpang. Cocok
                            untuk perjalanan rombongan besar, perjalanan wisata,
                            dan keperluan transportasi perusahaan.
                        </div>

                        <div onClick={handleWa} className='bg-yellow-primary font-semibold uppercase w-max px-5 py-2 rounded-md hover:opacity-90 cursor-pointer mt-5'>
                            Booking
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Armada
