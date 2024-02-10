import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai'

const Perjalanan = () => {
    return (
        <div className='py-20 bg-zinc-50' id='perjalanan'>
            <div className='max-con'>
                <div className='text-center text-zinc-800 font-bold text-4xl uppercase'>
                    Jadwal Perjalanan Azmi Trans
                </div>
                <div className='text-center text-zinc-500 mt-5 w-[90%] mx-auto mb-10'>
                    Berikut adalah jadwal perjalanan Azmi Trans
                </div>

                <div className='grid grid-cols-3 gap-3 max-md:grid-cols-1'>
                    <div className='bg-white shadow-md text-center px-10 py-5 flex flex-col items-start justify-center rounded-2xl'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-yellow-primary rounded-full text-4xl text-white p-1'>
                                <AiFillClockCircle />
                            </div>
                            <div className=''>
                                <div className='font-semibold mt-2 text-xl'>
                                    Pangandaran - Bandung
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        09.00 WIB
                                    </div>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        13.00 WIB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-md text-center px-10 py-5 flex flex-col items-start justify-center rounded-2xl'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-yellow-primary rounded-full text-4xl text-white p-1'>
                                <AiFillClockCircle />
                            </div>
                            <div className=''>
                                <div className='font-semibold mt-2 text-xl'>
                                    Pangandaran - Jakarta
                                </div>
                                <div className='flex gap-3 mt-2'>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        16.00 WIB (PP)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-md text-center px-10 py-5 flex flex-col items-start justify-center rounded-2xl'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-yellow-primary rounded-full text-4xl text-white p-1'>
                                <AiFillClockCircle />
                            </div>
                            <div className=''>
                                <div className='font-semibold mt-2 text-xl text-left'>
                                    Bandung/Majalaya - Pangandaran
                                </div>
                                <div className='flex gap-3 mt-2 flex-wrap'>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        09.00 WIB
                                    </div>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        13.00 WIB
                                    </div>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        16.00 WIB
                                    </div>
                                    <div className='bg-yellow-primary/10 text-yellow-600 font-semibold px-2 py-1 rounded-sm'>
                                        20.00 WIB (PP)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perjalanan
