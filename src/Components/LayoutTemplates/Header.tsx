import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/AppLogo/logo2.webp'

const Header = () => {
  return (
    <header className=" bg-transparent tab_01:bg-white/30 mx-auto tab_01:backdrop-blur-md w-[100%] tab_01:w-[50%] text-white tab_01:rounded-full  py-2 px-10 tab_01:shadow-lg">
      <div className="max-w-7xl mx-auto bg-transparent flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl hidden tab_01:block bg-transparent font-bold">
          <Link legacyBehavior href="/">
            {/* Set specific width and height for the logo */}
            <Image 
              src={Logo} 
              alt="App Logo" 
              width={60}  // Adjust width as needed
              height={60} // Adjust height as needed
              className="object-contain rounded-full border" // Ensures the image doesn't stretch or overflow
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className=' hidden tab_01:block'>
          <ul className="flex space-x-6">
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300"> {/* Added hover effect */}
              <Link legacyBehavior href="/home">
                <a className="text-[#FFFDF0]">Destination</a>
              </Link>
            </li>
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300"> {/* Added hover effect */}
              <Link legacyBehavior href="/sports">
                <a className="text-[#FFFDF0]">About us</a>
              </Link>
            </li>
            <li className="text-[#FFFDF0] font-medium hover:text-gray-300"> {/* Added hover effect */}
              <Link legacyBehavior href="/news">
                <a className="text-[#FFFDF0]">Contact us</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative w-full tab_01:w-auto">
          <input
            type="text"
            className="pl-3 w-full tab_01:w-auto pr-4 py-2 rounded-3xl bg-gray-200 text-gray-800"
            placeholder="Search"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
