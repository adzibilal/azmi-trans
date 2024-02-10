'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

const HeroSlider = () => {
    return (
        <>
            <Swiper
                className='mySwiper'
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 1
                    }
                }}
                loop={true}
                modules={[Autoplay]}>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 4
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 5
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 6
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 7
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 8
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] flex items-center justify-center'>
                        Slide 9
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSlider
