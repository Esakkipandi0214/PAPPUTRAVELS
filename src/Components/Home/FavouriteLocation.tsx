import React from "react";
import { MdLocationOn } from "react-icons/md";

const FavouriteLocation = () => {
  const locations = [
    { name: "New York", description: "Plan Trip" },
    { name: "Paris", description: "Explore City" },
    { name: "Tokyo", description: "Discover More" },
    { name: "London", description: "Visit Now" },
  ];

  return (
    <div className="flex relative w-full   h-[55%] Res_412:h-[65%]  tab_01:h-[40%] justify-start   px-4  tab_01:justify-center   tab_01:items-start overflow-x-hidden gap-3 items-center">
      <div className="flex absolute w-full bottom-3 Res_412:bottom-0   justify-start p-1   px-4  tab_01:justify-center   tab_01:items-start overflow-x-auto gap-3 items-center" >
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex  flex-shrink-0 bg-white/15 justify-between tab_01:p-2 p-2 rounded-lg items-center space-x-4 w-[50%] sm:w-[200px]"
        >
          <MdLocationOn className="text-white/50 text-3xl" />
          <span className="flex flex-col">
            <p className="text-white flex justify-start font-medium text-base">{location.name}</p>
            <p className="text-gray-800 flex justify-start text-sm">{location.description}</p>
          </span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FavouriteLocation;
