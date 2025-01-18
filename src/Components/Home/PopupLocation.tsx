import React from 'react';
import { FiX } from 'react-icons/fi';

const locations = ['Tirunelveli', 'Chennai', 'Madurai', 'Coimbatore', 'Trichy'];

interface PopupLocationProps {
  IsLocationOpen: boolean;
  setLocationOpen: (value: boolean) => void;
}

const PopupLocation: React.FC<PopupLocationProps> = ({ IsLocationOpen, setLocationOpen }) => {
  if (!IsLocationOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex top-12 tab_01:top-20 justify-center bg-transparent p-2">
      <div className="bg-white w-full h-[60%] rounded-xl shadow-lg max-w-3xl">
        {/* Header */}
        <div className="flex justify-end items-center p-4 border-b">
          <button
            onClick={() => setLocationOpen(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <FiX className="text-2xl text-red-500" />
          </button>
        </div>

        {/* Location Buttons */}
        <div className="p-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {locations.map((location, index) => (
            <button
              key={index}
              type="button"
              className="py-2 text-sm font-medium text-center text-gray-700 rounded-lg bg-gray-100 hover:bg-gray-200 
              lg:w-32 lg:h-12" // Increased width and height for large screens
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
