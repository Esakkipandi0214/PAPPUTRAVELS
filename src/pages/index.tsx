import React from 'react';
// import Layout from '@/Components/LayoutCode/Layout'
import Header from '@/Components/LayoutTemplates/Header';
import Image from 'next/image';
import bgImage from '../../public/AppLogo/background_image.jpg'
import SocialMediaSidebar from '@/Components/LayoutTemplates/socialMedia';
import Explore from '@/Components/Home/ContentHome';
const index = () => {
  return (
    <div className=" h-[90vh]   Res_390:h-[100vh] w-full overflow-y-hidden  relative">
      {/* Background Image */}
      <div className="w-full h-full overflow-y-hidden relative">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill" // Makes the image cover the container
          objectFit="cover" // Ensures the image covers the container without distortion
          priority // Optimizes loading
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute overflow-y-hidden inset-0 px-1  pt-6 py-2 w-full h-[90%] tab_01:h-full">
        <Header />
        <SocialMediaSidebar/>
        <Explore/>
        {/* <p className="text-red-500">Pappu</p> */}
      </div>
    </div>
  );
};

export default index;
