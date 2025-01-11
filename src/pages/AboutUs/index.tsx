import React from "react";
import Image from "next/image";
import bgImage from "../../../public/AppLogo/background_image.jpg";
import Raj from "../../../public/CEOS/RajAppa.jpg";
import RamakrishnaChittapa from "../../../public/CEOS/RamakrishnaChittappa.jpg";
import MurugaPerippa from "../../../public/CEOS/MurugaPerippa.jpg";
import KannanPeripa from "../../../public/CEOS/KannanPeripa.jpg";
import { FaArrowLeft } from "react-icons/fa"; // Import an icon
import { useRouter } from "next/router";


const AboutUs: React.FC = () => {
    const router = useRouter();

  const handleBack = () => {
    router.push('/'); // Navigates to the home page
  };
  return (
    <div className="relative min-h-screen">
        
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill" // Makes the image cover the entire container
          objectFit="cover" // Ensures the image covers the container without distortion
          priority // Optimizes loading
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-gray-800 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 py-16">
        <button
      onClick={handleBack}
      className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md  transition"
    >
      <FaArrowLeft className="mr-2 text-white" /> {/* Icon added here */}
      Home
    </button>
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {/* Left Section */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-transparent hover:border-white">
  <h2 className="text-2xl flex justify-center items-center tab_01:justify-start font-semibold mb-4">Our Story</h2>
  <p className="text-lg leading-7">
    Welcome to our travel service! We are passionate about providing safe, comfortable, and reliable bus journeys for our customers. 
    Our story began with a simple goal: to make travel more accessible and enjoyable for everyone.
  </p>
  <p className="mt-4 text-lg leading-7">
    Over the years, we have expanded our fleet and services to cater to diverse travel needs. From daily commutes to long-distance trips, 
    we are committed to offering top-notch experiences with modern amenities, punctual schedules, and exceptional customer care.
  </p>
</div>


            {/* Right Section */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-transparent hover:border-white">
  <h2 className="text-2xl flex justify-center items-center tab_01:justify-start font-semibold mb-4">Our Mission</h2>
  <p className="text-lg leading-7">
    Our mission is to revolutionize travel by providing safe, affordable, and comfortable bus journeys for everyone. 
    We strive to connect cities and communities, making travel a seamless and enjoyable experience for all our passengers.
  </p>
  <p className="mt-4 text-lg leading-7">
    At the core of our mission is a dedication to punctuality, customer satisfaction, and eco-friendly practices. 
    We are committed to reducing our carbon footprint and continuously improving our services to meet the evolving needs of travelers.
  </p>
</div>

          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">
            PAPPU GROUPS
            </h2>
            <div className=" tab_01:flex grid grid-cols-2  tab_01:flex-wrap justify-center gap-8">
            <div className=" flex flex-col gap-3 items-center justify-center text-center">
                <div>
                <Image
                  src={Raj}
                  alt="Raj Appa"
                  width={100}
                  height={70}
                  className="rounded-2xl border border-white"
                />
                </div>
                <div>
                <h3 className="text-lg text-white font-semibold mt-4">
                 RAJENDHRAN
                </h3>
                <p className="text-sm text-gray-300">CEO</p>
                </div>
              </div>
              <div className=" flex flex-col gap-3 items-center justify-center text-center">
                <div>
                <Image
                  src={KannanPeripa}
                  alt="Raj Appa"
                  width={100}
                  height={70}
                  className="rounded-2xl border border-white"
                />
                </div>
                <div>
                <h3 className="text-lg text-white font-semibold mt-4">
                 KANNAN
                </h3>
                <p className="text-sm text-gray-300">CEO</p>
                </div>
              </div>
              <div className=" flex flex-col gap-3 items-center justify-center text-center">
                <div>
                <Image
                  src={MurugaPerippa}
                  alt="Raj Appa"
                  width={100}
                  height={70}
                  className="rounded-2xl border border-white"
                />
                </div>
                <div>
                <h3 className="text-lg text-white font-semibold mt-4">
                 MURUGAN
                </h3>
                <p className="text-sm text-gray-300">CEO</p>
                </div>
              </div>
              <div className=" flex flex-col gap-3 items-center justify-center text-center">
                <div>
                <Image
                  src={RamakrishnaChittapa}
                  alt="Raj Appa"
                  width={100}
                  height={70}
                  className="rounded-2xl border border-white"
                />
                </div>
                <div>
                <h3 className="text-lg text-white font-semibold mt-4">
                 RAMAKRISHNAN
                </h3>
                <p className="text-sm text-gray-300">CEO</p>
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
