'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Tirunelveli from "../../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Thoothukudi from "../../../../public/Thoothukudi/ThoothukudiLogo.jpg";
import Kanyakumari from "../../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Madurai from "../../../../public/Madurai/MaduraiLogo.webp";
import Theni from "../../../../public/Theni/TheniLogo.jpg";
// import Tenkasi from "../../../../public/Tenkasi/TenkasiLogo.jpg";
// import Ooty from "../../../../public/Ooty/OotyLogo.jpg";
// import { Button } from '@/Components/ui/button'

const slides = [
    {
      id: 1,
      category: 'Temple',
      title: 'Arulmigu Nellaiyappar Temple',
      description:
        'The Goddess Gandhimathi performed penance towards Lord Shiva to protect the world. A big temple in the city with five Gopurams, spreading over 850 feet long and 756 feet wide.',
      image: Tirunelveli,
    },
    {
      id: 2,
      category: 'Waterfall',
      title: 'Agasthiyar Falls – Papanasam',
      description:
        'As per legend, Sage Agasthya prayed to Shiva here. The falls are part of the Tamiraparani River and offer a tranquil setting amidst the temple.',
      image: Thoothukudi,
    },
    {
      id: 3,
      category: 'Wildlife Sanctuary',
      title: 'Mundanthurai Tiger Reserve',
      description:
        'A National Tiger Reserve spanning 817 sq. km with 24 identified nature trails. Open all year, with the best season between September and January.',
      image: Kanyakumari,
    },
    {
      id: 4,
      category: 'Hill Station',
      title: 'Manjolai Hill Station',
      description:
        'Located in the Kalakkad Mundanthurai Tiger Reserve Area, this scenic spot is also called “Poor Man’s Ooty.” Trekking and serene views are its highlights.',
      image: Madurai,
    },
    {
      id: 5,
      category: 'Dam',
      title: 'Karaiyar Dam',
      description:
        'A hub of activity with fishing, birdwatching, trekking, and hiking. The dam offers an incredible combination of natural beauty and human innovation.',
      image: Theni,
    },
  ];
// const slides = [
//   {
//     title: "Welcome to Our Platform",
//     description: "Discover amazing features and boost your productivity with our innovative solutions. We're here to help you succeed in every step of your journey.",
//     image: Tirunelveli,
//     cta: "Get Started",
//   },
//   {
//     title: "Powerful Analytics",
//     description: "Gain insights from your data with our advanced analytics tools and visualizations. Make informed decisions and drive your business forward with confidence.",
//     image: Thoothukudi,
//     cta: "Learn More",
//   },
//   {
//     title: "24/7 Support",
//     description: "Our dedicated team is always here to help you overcome any challenges. With round-the-clock support, you can focus on what matters most - growing your business.",
//     image:Kanyakumari,
//     cta: "Contact Us",
//   },
// ]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <section className="w-full  bg-[#411256]   py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                aria-hidden={currentSlide !== index}
              >
                <h2 className="text-4xl tab_01:text-2xl  lg1:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl text-white/80 mb-6">
                  {slide.description}
                </p>
                {/* <Button variant="secondary" size="lg">
                  {slide.cta}
                </Button> */}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className={`rounded-lg object-cover transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
        <button
          onClick={goToPrevSlide}
          className="absolute -left-10 hidden lg1:block top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute -right-10 top-1/2 hidden lg1:block transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-primary" />
        </button>
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

