"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { tourPackages, TourPackage } from "@/Components/Home/TourPackageSlider/tourPackages";

const TourPackageCard: React.FC<{ package: TourPackage }> = ({ package: tourPackage }) => (
  <Card className="w-full h-[400px] flex flex-col">
    <CardHeader className="p-0">
      <div className="relative w-full h-40">
        <Image
          src={tourPackage.imageUrl || "/placeholder.svg"}
          alt={tourPackage.title}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <CardTitle className="text-lg mb-2">{tourPackage.title}</CardTitle>
      <CardDescription className="text-sm mb-4">{tourPackage.description}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between items-center p-4 bg-gray-100">
      <span className="font-bold text-lg">${tourPackage.price}</span>
      <span className="text-sm text-gray-500">{tourPackage.duration}</span>
    </CardFooter>
  </Card>
);

const TourPackageSlider: React.FC = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
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
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100" />
      </Carousel>
    </div>
  );
};

export default TourPackageSlider;
