import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/AppLogo/logo2.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent tab_01:bg-white/30 mx-auto tab_01:backdrop-blur-md w-[100%] tab_01:w-[50%] text-white tab_01:rounded-full py-2 px-10 tab_01:shadow-lg">
      <div className="max-w-7xl mx-auto bg-transparent flex justify-between items-center">
        {/* Logo */}
        <div className="tab_01:block hidden">
          <Image
            src={Logo}
            alt="App Logo"
            width={50}
            height={50}
            className="object-contain rounded-full border"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="tab_01:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {!isMenuOpen && 
              // Cross Icon
              
             (
              // Hamburger Icon
              <>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </>
            )}
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden tab_01:block">
          <ul className="flex space-x-6">
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/Destination">
                <a className="text-[#FFFDF0]">Destination</a>
              </Link>
            </li>
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/AboutUs">
                <a className="text-[#FFFDF0]">About us</a>
              </Link>
            </li>
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/ContactUs">
                <a className="text-[#FFFDF0]">Contact us</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar for Both Small and Large Screens */}
        <div className="relative w-full tab_01:w-auto flex items-center ml-4">
          <input
            type="text"
            className="pl-3 pr-4 py-2 rounded-3xl bg-gray-200 text-gray-800 w-full tab_01:w-auto"
            placeholder="Search"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>

      {/* Mobile Full-Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center z-50">
          <div className=" w-full  h-full py-10">
          <span className="text-2xl w-full px-4 text-red-500 "> <button onClick={()=>setIsMenuOpen(false)} className=" ">✖</button></span>
          {/* Logo */}
          <div className="mb-6 flex justify-center items-center">
            <Image
              src={Logo}
              alt="App Logo"
              width={100}
              height={100}
              className="object-contain rounded-full border"
            />
          </div>

          {/* Menu Links */}
          <ul className="space-y-6 w-full text-center text-xl">
            <li>
              <Link legacyBehavior href="/Destination">
                <a
                  className="text-white font-medium hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Destination
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/AboutUs">
                <a
                  className="text-white font-medium hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/ContactUs">
                <a
                  className="text-white font-medium hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
