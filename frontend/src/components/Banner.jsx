import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "swiper/css/pagination"


const Banner = () => {
    return (
        <>
            <Swiper loop={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
                slidesPerView={1} className="imgContainer overflow-x-hidden flex">
                <SwiperSlide>
                    <img className='sliderEle' src="/images/1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='sliderEle' src="/images/3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='sliderEle' src="/images/4.png" alt="" />
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default Banner