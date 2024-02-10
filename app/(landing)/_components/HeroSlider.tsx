'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

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
                    <div className='bg-zinc-400 w-screen aspect-[21/8] max-md:aspect-video flex items-center justify-center overflow-hidden'>
                        <Image width={1920} height={1080} alt='' src='/images/slider1.png' loading='eager' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-zinc-400 w-screen aspect-[21/8] max-md:aspect-video flex items-center justify-center overflow-hidden'>
                        <Image width={1920} height={1080} alt='' src='/images/slider2.png' loading='eager' />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default HeroSlider
