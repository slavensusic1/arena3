import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'




// import required modules
import { EffectFlip,  Navigation } from 'swiper/modules';
import { FreeMode, Pagination } from 'swiper/modules';

const SwiperReact = ({pic1, pic2, pic3, pic4, pic5, pic6, slides}) => {
  return (

    <Swiper
    slidesPerView={slides}
    spaceBetween={20}
    freeMode={true}
    pagination={{
    clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
        <SwiperSlide> <img src={pic1.src} className='w-full h-auto'/> </SwiperSlide>
        <SwiperSlide> <img src={pic2.src} className='w-full h-auto' /> </SwiperSlide>
        {/* <SwiperSlide> <img src={pic3.src} /> </SwiperSlide> */}
        <SwiperSlide> <img src={pic4.src} className='w-full h-auto'/> </SwiperSlide>
        <SwiperSlide> <img src={pic5.src} className='w-full h-auto'/> </SwiperSlide>
        <SwiperSlide> <img src={pic6.src} className='w-full h-auto'/> </SwiperSlide>


    </Swiper>
  );
}
export default SwiperReact