import React from "react";
import FavouriteLocation from "./FavouriteLocation";
const Explore = () => {
  return (
    <>
    <div className="text-center  items-stretch pt-32 tab_01:pt-[12%]  w-full">
        <div className=" flex flex-col gap-4">
      <h1 className=" tab_01:text-7xl text-4xl font-bold text-[#F6F5F5] gap-5 flex justify-center items-center">PAPPU <p className=" text-[#FFF3CF]">TRAVELS</p></h1>
      <p className=" tab_01:text-6xl text-lg text-white">Discover new places and adventures</p>
      </div>
    </div>
      <FavouriteLocation/>
      </>
  );
};

export default Explore;
