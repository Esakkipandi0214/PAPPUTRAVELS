import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Swiper v8+
import "swiper/css";
import "swiper/css/navigation";
import {VechicleDatas} from './VechicleData'
import Image from 'next/image';

  const VechicleSlider = () => {
  return (
      <div className=" z-10 bg-transparent p-4 ">
      <h2 className="text-xl font-semibold mb-4 text-[#411256]">Vehicles</h2>
      {VechicleDatas.length > 0 ? (
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
          className="w-full "
        >
          {VechicleDatas.map((vehicle) => (
            <SwiperSlide key={vehicle.id}>
              <div className="bg-white relative w-full h-full rounded-lg  transition-shadow">
                <div className="absolute bottom-0 bg-black/50 left-0 right-0 p-1 rounded-t-xl z-10">
                  <h3 className=" font-medium text-lg text-white">{vehicle.name}</h3>
                  <p className="text-white text-base ">{vehicle.details}</p>
                </div>
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500">No vehicles found.</p>
      )}
    </div>
  )
}

export default VechicleSlider