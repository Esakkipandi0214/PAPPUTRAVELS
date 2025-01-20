import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Swiper v8+
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import {LocationDatas} from './locationdata'

const LocationSlider = () => {
  return (
    <div className="bg-transparent  rounded-md">
    <h2 className="text-xl font-bold mb-4 text-[#411256] pl-5 ">Locations</h2>
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}   
      navigation
      breakpoints={{
        640: { slidesPerView: 2 },   // Show 2 slides on medium screens
        768: { slidesPerView: 3 },   // Show 3 slides on tablets
        1024: { slidesPerView: 3 },  // Show 3 slides on larger tablets
        1280: { slidesPerView: 4 },  // Show 4 slides on desktops
        1600: { slidesPerView: 5 },  // Show 5 slides on larger desktops
      }}
      className="w-full"
    >
      {LocationDatas.map((location, index) => (
        <SwiperSlide key={index}>
          <div 
        //   onClick={()=>handleLocationClick(location.name)}
          className="flex flex-col items-center text-center">
            <Image
              src={location.image}
              alt={location.name}
              className=" tab_01:w-40 w-36 h-36  tab_01:h-40 object-cover rounded-full mb-4 border-2 border-[#C65BCF]"
            />
            <h3 className="font-medium text-black">{location.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default LocationSlider