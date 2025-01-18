import React from 'react';
import { FiX } from 'react-icons/fi';
const locations = ['Tirunelveli', 'Chennai', 'Madurai', 'Coimbatore', 'Trichy'];

interface PopupLocationProps{
    IsLocationOpen:boolean;
    setLocationOpen:(value:boolean)=>void;
}

const PopupLocation:React.FC<PopupLocationProps> = ({IsLocationOpen,setLocationOpen}) => {
    if (!IsLocationOpen) return ;

  return (
    <div className="bg-transparent top-24 w-full fixed h-full flex justify-center  p-4">
        <div className=' bg-white w-[90%] h-[40%] rounded-2xl'>
            <div className=' flex justify-end p-3'>{/* Close Button */}
        <button
          onClick={()=>setLocationOpen(false)}
          className=" text-red-500 font-bold text-2xl"
        >
          <FiX className="text-2xl" />
        </button></div>
      <div className="bg-transparent  grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4 overflow-y-auto">
        {locations.map((location, index) => (
          <button
            key={index}
            type="button"
            className="px-4 py-2 h-[40px] font-semibold w-auto text-center rounded-full bg-black/10 hover:bg-gray-100 whitespace-nowrap"
          >
            {location}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default PopupLocation;
