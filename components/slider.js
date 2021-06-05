import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function App(){
    return (
        <>
        <Swiper spaceBetween={10} centeredSlides={true} autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
        <SwiperSlide>
            <Image
                className="h-full w-full object-cover"
                src="/images/top/home1.png"
                layout="fill"
                alt="People working on laptops"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                className="h-full w-full object-cover"
                src="/images/top/home1.png"
                layout="fill"
                alt="People working on laptops"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                className="h-full w-full object-cover"
                src="/images/top/home1.png"
                layout="fill"
                alt="People working on laptops"
            />
        </SwiperSlide>
        </Swiper>
        </>
    )
}