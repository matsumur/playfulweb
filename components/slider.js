import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const swipeImages = [
  {
    id: 1,
    src: "/images/top/home1.png",
    alt: "People working on laptops",
    href: "/openlab2021",
  },
  {
    id: 2,
    src: "/images/top/home1.png",
    alt: "People working on laptops",
    href: "/people",
  },
  {
    id: 3,
    src: "/images/top/home1.png",
    alt: "People working on laptops",
    href: "/",
  },
  {
    id: 4,
    src: "/images/top/home1.png",
    alt: "People working on laptops",
    href: "",
  },
];

export default function App() {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {swipeImages.map((swipeImage) => (
        <SwiperSlide key={swipeImage.id}>
          {swipeImage.href ? (
            <a href={swipeImage.href}>
              <Image
                className="h-full w-full object-cover"
                src={swipeImage.src}
                layout="fill"
                alt={swipeImage.alt}
              />
            </a>
          ) : (
            <Image
              className="h-full w-full object-cover"
              src={swipeImage.src}
              layout="fill"
              alt={swipeImage.alt}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
