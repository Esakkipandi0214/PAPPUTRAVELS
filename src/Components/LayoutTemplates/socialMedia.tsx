import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"; // Importing icons

const SocialMediaSidebar = () => {
  return (
    <div className="fixed  tab_01:top-1/3 bottom-24 left-0 flex flex-col space-y-4 p-2">
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12  rounded-r-lg text-white  transition-all duration-300"
      >
        <FaInstagram size={24} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12  rounded-r-lg text-white  transition-all duration-300"
      >
        <FaFacebookF size={24} />
      </a>

      {/* Twitter */}
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12  rounded-r-lg text-white  transition-all duration-300"
      >
        <FaTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialMediaSidebar;
