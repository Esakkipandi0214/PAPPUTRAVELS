import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Swiper v8+
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link"; // Import Link for navigation
import { useRouter } from "next/router";

// Images
import Tirunelveli from "../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Thoothukudi from "../../../public/Thoothukudi/ThoothukudiLogo.jpg";
import Kanyakumari from "../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Madurai from "../../../public/Madurai/MaduraiLogo.webp";
import Theni from "../../../public/Theni/TheniLogo.jpg";
import Tenkasi from "../../../public/Tenkasi/TenkasiLogo.jpg";
import Ooty from "../../../public/Ooty/OotyLogo.jpg";






import Temple from "../../../public/LocationsImages/Temple.jpg";

export const Vehicle = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const vehicles = [
    { id: 1, type: "Car", name: "Toyota Camry", details: "Sedan, 2020 Model", image: Tirunelveli },
    { id: 2, type: "Bike", name: "Harley Davidson", details: "Cruiser, 2019 Model", image: Kanyakumari },
    { id: 3, type: "Three Wheeler", name: "Auto Rickshaw", details: "Electric, 2022 Model", image: Temple },
    { id: 4, type: "Car", name: "Honda Accord", details: "Sedan, 2021 Model", image: Tirunelveli },
    { id: 5, type: "SUV", name: "Tesla Model X", details: "Electric, 2023 Model", image: Kanyakumari },
    { id: 6, type: "Bike", name: "Ducati Panigale", details: "Sport, 2022 Model", image: Temple },
  ];

  const locations = [
    { name: "Tirunelveli", image: Tirunelveli },
    { name: "Thoothukudi", image: Thoothukudi },
    { name: "Kanyakumari", image: Kanyakumari },
    { name: "Madurai", image: Madurai },
    { name: "Theni", image: Theni },
    { name: "Tenkasi", image: Tenkasi },
    { name: "Ooty", image: Ooty },
  ];

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLocationClick = (Location:string) => {
    router.push(`/Location/${Location}`); // Navigates to the home page
  };

  return (
    <div className="space-y-6 overflow-y-auto bg-[#1C325B] h-screen p-6">

      {/* Search Bar */}
      <div className="p-3 flex fixed items-center rounded-lg bg-[#4C6B56] w-[90%] tab_01:w-[95%] justify-end space-x-2">
        <input
          type="text"
          placeholder="Search for a vehicle..."
          className="p-2 border rounded-md tab_01:w-[20%] w-[90%] text-gray-800"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-[#2D7D4D] text-white px-4 py-2 rounded-md hover:bg-[#1F5C39] transition-colors"
          onClick={() => console.log("Search clicked!")}
        >
          Search
        </button>
      </div>
      {/* Breadcrumb */}
      <div className="flex fixed translate-y-16  items-center text-white text-sm mb-4">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span>Destination</span>
      </div>

      <div className="w-full pt-28 flex flex-col gap-6">
        {/* Vehicle Details Section */}
        <div className="bg-[#F8FAFC] p-4 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#131010]">Vehicles</h2>
          {filteredVehicles.length > 0 ? (
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
              {filteredVehicles.map((vehicle) => (
                <SwiperSlide key={vehicle.id}>
                  <div className="bg-white relative w-full h-full rounded-lg  transition-shadow">
                    <div className="absolute top-0 left-0 right-0 p-4 z-10">
                      <h3 className="font-medium text-xl text-[#131010]">{vehicle.name}</h3>
                      <p className="text-gray-700">{vehicle.details}</p>
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

        {/* Round Locations Section */}
        <div className="bg-transparent rounded-md">
          <h2 className="text-xl font-semibold mb-4 text-[#F8FAFC]">Locations</h2>
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
            {locations.map((location, index) => (
              <SwiperSlide key={index}>
                <div 
                onClick={()=>handleLocationClick(location.name)}
                className="flex flex-col items-center text-center">
                  <Image
                    src={location.image}
                    alt={location.name}
                    className=" tab_01:w-40 w-36 h-36  tab_01:h-40 object-cover rounded-full mb-4 border-2 border-white"
                  />
                  <h3 className="font-medium text-white">{location.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
