import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Nellaiyappar from "../../../public/Tiruvelveli/NellaiyapparTemple.webp";
import agasthiyarfalls from "../../../public/Tiruvelveli/agasthiyar falls.webp";
import kalakad from "../../../public/Tiruvelveli/kalakad wildlife sanctuary.jpg";
import karayardam from "../../../public/Tiruvelveli/karayardam.jpg";
import mancholai from "../../../public/Tiruvelveli/mancholai.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from "@/Components/Home/HomeLayout/Layout"



const Locations: React.FC = () => {
    const router = useRouter();
    const { location } = router.query; 
  const locations = [
    {
      id: 1,
      category: 'Temple',
      title: 'Arulmigu Nellaiyappar Temple',
      description:
        'The Goddess Gandhimathi performed penance towards Lord Shiva to protect the world. A big temple in the city with five Gopurams, spreading over 850 feet long and 756 feet wide.',
      image: Nellaiyappar,
    },
    {
      id: 2,
      category: 'Waterfall',
      title: 'Agasthiyar Falls – Papanasam',
      description:
        'As per legend, Sage Agasthya prayed to Shiva here. The falls are part of the Tamiraparani River and offer a tranquil setting amidst the temple.',
      image: agasthiyarfalls,
    },
    {
      id: 3,
      category: 'Wildlife Sanctuary',
      title: 'Mundanthurai Tiger Reserve',
      description:
        'A National Tiger Reserve spanning 817 sq. km with 24 identified nature trails. Open all year, with the best season between September and January.',
      image: kalakad,
    },
    {
      id: 4,
      category: 'Hill Station',
      title: 'Manjolai Hill Station',
      description:
        'Located in the Kalakkad Mundanthurai Tiger Reserve Area, this scenic spot is also called “Poor Man’s Ooty.” Trekking and serene views are its highlights.',
      image: karayardam,
    },
    {
      id: 5,
      category: 'Dam',
      title: 'Karaiyar Dam',
      description:
        'A hub of activity with fishing, birdwatching, trekking, and hiking. The dam offers an incredible combination of natural beauty and human innovation.',
      image: mancholai,
    },
  ];

  return (
    <Layout>
    <div className="w-full flex flex-col gap-4 h-[100vh] p-2 bg-transparent">
        {/* Breadcrumb */}
      <div className="flex pt-6 items-center text-[#411256] font-medium text-sm mb-4">
        <Link href="/Destination" className="hover:underline">Destination</Link>
        <span className="mx-2">/</span>
        <span>{location}</span>
      </div>
      <div className="bg-white/80 rounded-lg p-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1} // Only 1 card visible for mobile
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile devices - 1 slide
            768: { slidesPerView: 2 }, // Tablets and above - 2 slides
            1024: { slidesPerView: 3 }, // Desktops and above - 3 slides
            1280: { slidesPerView: 4 }, // Large desktops - 4 slides
          }}
          className="h-full"
        >
          {locations.map((location) => (
            <SwiperSlide key={location.id} className="group flex items-end justify-start">
              <div className="relative w-full h-96 rounded-lg shadow-lg transform transition  hover:shadow-xl">
                <Image
                  src={location.image}
                  alt={location.title}
                  className="relative w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black opacity-70 rounded-lg"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <h1
                    // rel="noopener noreferrer"
                    // href="#"
                    className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700"
                  >
                    {location.category}
                  </h1>
                </div>
                <div className="absolute bottom-0  opacity-100 tab_01:group-hover:opacity-100  tab_01:opacity-0 transition-all duration-300">
                  <h2 className="z-10 p-5">
                    <p
                    //   rel="noopener noreferrer"
                    //   href="#"
                      className="font-medium text-lg text-white hover:underline"
                    >
                      {location.title}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">{location.description}</p>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="swiper-button-prev text-white"></div>
          <div className="swiper-button-next text-white"></div>
        </Swiper>
      </div>
    </div>
    </Layout>
  );
};

export default Locations;
