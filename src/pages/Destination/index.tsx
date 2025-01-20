// import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
// import Link from "next/link"; // Import Link for navigation

// import { MobileMenuBar } from "@/Components/Home/mobile-menu-bar"
// import { MenuOverlay } from "@/Components/Home/MenuOverly"
import HeroCarousel from '@/Components/Home/Courosal/HeroCarousel'
import Layout from "@/Components/Home/HomeLayout/Layout"
import TourPackageSlider from '../../Components/Home/TourPackageSlider/TourPackageSlider'
import VechicleSlider from "@/Components/Home/VechicleSlider/vechicleSlider";
import LocationSlider from "@/Components/Home/Locations/LocationSlider";

export const Vehicle = () => {
  // const [activeItem, setActiveItem] = useState("Home")
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useEffect(()=>{
  //   if(activeItem === "Menu"){
  //     setIsMenuOpen(true)
  //   }else{
  //     setIsMenuOpen(false)
  //   }
  // },[activeItem])
  

  

  return (
    <Layout>
    <div className="space-y-6 pb-28 bg-transparent">

      
      {/* Hero Courosal */}
      <HeroCarousel />
      <TourPackageSlider/>
      
      <VechicleSlider/>
      
           {/* Round Locations Section */}
           <LocationSlider/>
       
      {/* <MobileMenuBar setActiveItem={setActiveItem} activeItem={activeItem}/>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => { setActiveItem("Home");setIsMenuOpen(false);}} /> */}
    </div>
    </Layout>
  );
};

export default Vehicle;
