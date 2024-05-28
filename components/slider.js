import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import required modules
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper/core';
SwiperCore.use([Navigation, Autoplay, Pagination, Mousewheel, Keyboard]);

import Image from 'next/image';

const swipeImages = [
  {
    id: 1,
    src: '/images/top/playfulweek.jpg',
    alt: 'Playfulweek',
    href: '',
  },
  {
    id: 2,
    src: '/images/top/home5.jpg',
    alt: 'VR people',
    href: '',
  },
  {
    id: 3,
    src: '/images/top/semi.jpg',
    alt: 'Semi',
    href: '',
  },
  {
    id: 4,
    src: '/images/top/raser.jpg',
    alt: 'Raser',
    href: '',
  },
  {
    id: 5,
    src: '/images/top/game.jpg',
    alt: 'Game',
    href: '',
  },
  {
    id: 6,
    src: '/images/top/home3.jpg',
    alt: 'Many Sota standing in front of people',
    href: '',
  },
];

function SlideImage(props) {
  return (
    <>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gray-400 mix-blend-multiply z-10' />
        <Image
          className='block h-full w-full'
          src={props.swipeImage.src}
          layout='fill'
          alt={props.swipeImage.alt}
        />
      </div>
      <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 z-10'>
        <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
          <Image
            className='block lg:hidden h-8 w-auto'
            height='100%'
            width='100%'
            src='/playful.svg'
            alt='Playful Laboratory Logo'
          />
          <span className='block text-yellow-500'>Playful</span>
          <span className='block text-white'>Laboratory</span>
        </h1>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      className='mySwiper'
    >
      {swipeImages.map((swipeImage) => (
        <SwiperSlide key={swipeImage.id}>
          <SlideImage swipeImage={swipeImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
