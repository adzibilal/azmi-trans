'use client'
import React, { useState, useEffect } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'

const Perjalanan = () => {
    const [routes, setRoutes] = useState([
        {
            start: 'Bandung',
            destinations: ['Jakarta', 'Tanggerang']
        },
        {
            start: 'Bandung',
            destinations: ['Tasik', 'Ciamis', 'Banjar', 'Pangandaran']
        },
        {
            start: 'Bandung',
            destinations: [
                'Cirebon',
                'Tegal',
                'Semarang',
                'Surabaya',
                'Probolinggo',
                'Banyuwangi',
                'Denpasar'
            ]
        },
        {
            start: 'Bandung',
            destinations: [
                'Cilacap',
                'Banjarnegara',
                'Kebumen',
                'Jogjakarta',
                'Solo',
                'Kediri',
                'Malang'
            ]
        }
    ])

    return (
        <div
            className='py-20 bg-gradient-to-r from-green-400 to-blue-500'
            id='perjalanan'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='text-center text-white font-bold text-4xl uppercase'>
                    Jadwal Keberangkatan Azmi Trans
                </div>
                <div className='text-center text-white mt-5 w-[90%] mx-auto mb-10'>
                    Berikut adalah Jadwal Keberangkatan Azmi Trans
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {routes.map((route, index) => (
                        <div
                            key={index}
                            className='bg-white shadow-lg text-center px-5 py-5 flex flex-col items-center justify-start rounded-2xl transform transition-transform hover:scale-105'>
                            <div className='flex items-center gap-3 mb-4 flex-col'>
                                <div className='bg-yellow-500 rounded-full text-4xl text-white p-2'>
                                    <AiFillClockCircle />
                                </div>
                                <div className='font-semibold text-xl text-gray-800'>
                                    Start {route.start}
                                </div>

                                <div className='border-t-2 border-dashed border-gray-400 w-2/3 pt-2'>
                                    Tujuan :
                                </div>
                            </div>
                            <div className='text-gray-600 flex flex-col'>
                                {route.destinations.map((destination, i) => (
                                    <div
                                        key={i}
                                        className='bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full inline-block m-1'>
                                        {destination}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Perjalanan
