import Image from 'next/image';
import Link from 'next/link';
import React, { useState ,useEffect} from 'react'
import Logo from "../../../public/AppLogo/logo2.webp";
import { FiMapPin } from "react-icons/fi";
import PopupLocation from './PopupLocation';
import ProfileIcon from '@/components/Home/HomeProfile'

interface HeaderProps{
    search:string;
    setSearch:(value:string) => void;
}

const Homeheader:React.FC<HeaderProps> = ({search,setSearch}) => {
    const [IsLocationOpen,setLocationOpen] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    
      useEffect(()=>{
        handleUpdateLocalProfileData()
      },[])
    
      const handleUpdateLocalProfileData = () => {
        const storedData = localStorage.getItem('authToken');
        
        if (storedData) {
          // const parsedData = JSON.parse(storedData);
          setIsLoggedIn(true)
        }else{
          setIsLoggedIn(false)
        }
      };
    
      const handleLogout = () => {
        localStorage.removeItem("authToken")
        setIsLoggedIn(false)
      }

  return (
    <>
    <div className=" px-1  tab_01:px-10 lg1:px-28 h-[10%] flex fixed z-40 shadow-2xl  bg-white w-full items-center justify-between  space-x-2">
         {/* Logo */}
         <div className="tab_01:flex flex items-center gap-2 tab_01:gap-10  ">
            <div>
          <Image
            src={Logo}
            alt="App Logo"
            width={50}
            height={50}
            className="object-contain rounded-full border"
          />
          </div>
          <div className=' hidden tab_01:flex gap-2'>   
    <input
      type="text"
      placeholder="Search for a vehicle..."
      className="p-2 border rounded-md tab_01:w-[70%] w-[90%] text-gray-800"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button
      className="bg-[#2d0c3c] text-white px-4 py-2 rounded-md  transition-colors"
      onClick={() => console.log("Search clicked!")}
    >
      Search
    </button>
    </div>
    <div onClick={()=>setLocationOpen(true)} className="flex gap-1 items-center cursor-pointer rounded-3xl hover:border  relative  hover:border-slate-200 hover:shadow-2xl p-3 text-gray-700">
      <FiMapPin className="text-red-500 text-xl" />
      <span className="">Location</span>
    </div>
    <div>

    </div>
        </div>
        <div className=' flex gap-7 p-2 tab_01:p-0 tab_01:items-center ' >
            <div>
       <nav className="hidden    lg1:block">
          <ul className="flex space-x-6 ">
            <li className="text-[#C65BCF] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/">
                <a className="text-[#411256] hover:border-b-2 hover:border-b-[#7a5988]">Home</a>
              </Link>
            </li>
            <li className="text-[#C65BCF] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/AboutUs">
                <a className="text-[#421869] hover:border-b-2 hover:border-b-[#7a5988] ">About us</a>
              </Link>
            </li>
            <li className="text-[#C65BCF] font-medium hover:text-gray-300">
              <Link legacyBehavior href="/ContactUs">
                <a className="text-[#421869] hover:border-b-2 hover:border-b-[#7a5988] ">Contact us</a>
              </Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className=' tab_01:p-0 p-4'>
        <ProfileIcon isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout} />
        </div>
        </div>
  </div>
  <PopupLocation IsLocationOpen={IsLocationOpen} setLocationOpen={setLocationOpen}/>
  </>
  )
}

export default Homeheader