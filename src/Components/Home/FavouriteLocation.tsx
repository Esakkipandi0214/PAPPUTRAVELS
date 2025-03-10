import React from "react";
import { FaCar, FaShuttleVan  } from "react-icons/fa"; // Correct named import
import { useRouter } from "next/router";
const FavouriteLocation = () => {
  const router = useRouter();
  const locations = [
    { name: "Four Wheelers",Type:"FourWheeler", description: "Plan Trip", Icon: <FaCar className="text-white/50 text-3xl" /> },
    { name: "Three Wheelers",Type:"ThreeWheeler", description: "Explore City", Icon: <FaShuttleVan className="text-white/50 text-3xl"/> },
  ];

  const handleBack = (VechicleType:string) => {
    console.log(VechicleType)
    router.push(`/Destination`); // Navigates to the home page
  };

  return (
    <div className=" hidden relative w-full z-30  h-[55%] Res_412:h-[65%]  tab_01:h-[40%] justify-start   px-4  tab_01:justify-center   tab_01:items-start overflow-x-hidden gap-3 items-center">
      <div className="flex absolute w-full bottom-3 Res_412:bottom-0   justify-start p-1   px-4  tab_01:justify-center   tab_01:items-start overflow-x-auto gap-3 items-center" >
      {locations.map((location, index) => (
        <div
          key={index}
        onClick={()=>handleBack(location.Type)}
          className="flex  flex-shrink-0 bg-white/15 justify-between tab_01:p-2 p-2 rounded-lg items-center space-x-4 w-[50%] sm:w-[200px]"
        >
          {/* <FaCar className="text-white/50 text-3xl" /> */}
         {location.Icon} 
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
