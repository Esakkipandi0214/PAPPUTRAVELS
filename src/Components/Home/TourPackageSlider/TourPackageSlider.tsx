"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Button } from "@/Components/ui/button";
import { tourPackages, TourPackage } from "@/Components/Home/TourPackageSlider/tourPackages";

const TourPackageCard: React.FC<{ package: TourPackage }> = ({ package: tourPackage }) => (
  <Card className="w-full h-auto md:h-[400px] flex flex-col justify-between">
    <CardHeader className="p-0.5">
      <div className="relative w-full h-40">
        <Image
          src={tourPackage.imageUrl}
          alt={tourPackage.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </CardHeader>
    <CardContent className="p-4 flex-grow">
      <CardTitle className="flex items-center gap-4 mb-2">
        <span className="font-bold text-sm lg1:text-lg">{tourPackage.title}</span>
      </CardTitle>
      <CardDescription className="text-sm gap-1 items-center flex mb-4">
        <span className="font-bold text-sm lg1:text-lg">&#8377; {tourPackage.price}</span>/<span className="text-lg text-gray-500">{tourPackage.duration}</span>
      </CardDescription>
      <CardDescription
        className="tab_01:text-sm  mb-4 line-clamp-2 overflow-hidden"
        title={tourPackage.description} // Tooltip for full description on hover
      >
        {tourPackage.description}
      </CardDescription>
    </CardContent>
    <div className="p-2">
      <Button
        variant="ghost"
        className="relative text-white font-semibold mx-2 w-[40%] tab_01:w-[60%]  lg1:w-[30%] bg-[#2d0c3c] rounded-lg"
      >
        Explore Now
      </Button>
    </div>
  </Card>
);

const TourPackageSlider: React.FC = () => {
  return (
    <div className="relative w-full  lg1:px-16 px-6 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent className="flex space-x-4">
          {tourPackages.map((tourPackage) => (
            <CarouselItem
              key={tourPackage.id}
              className="basis-full md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <TourPackageCard package={tourPackage} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Position arrows inside the carousel container */}
        <CarouselPrevious className="absolute top-32 lg1:top-1/2 left-4 lg1:-left-10 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100" />
        <CarouselNext className="absolute top-32  lg1:top-1/2  lg1:-right-10 right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100" />
      </Carousel>
    </div>
  );
};

export default TourPackageSlider;
