import React, { useState,useEffect, ReactNode } from "react";
import HomesearchNew from "../Homeheader";
import { MobileMenuBar } from "@/Components/Home/mobile-menu-bar"
import { MenuOverlay } from "@/Components/Home/MenuOverly"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState("");
   const [activeItem, setActiveItem] = useState("Home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    useEffect(()=>{
      if(activeItem === "Menu"){
        setIsMenuOpen(true)
      }else{
        setIsMenuOpen(false)
      }
    },[activeItem])

  return (
    <div className="flex flex-col bg-[#ece7ee] min-h-screen">
      {/* Header */}
      <HomesearchNew search={search} setSearch={setSearch} />

      {/* Main Content */}
      <main className="flex-1 bg-transparent z-30 mt-16 tab_01:mt-20">
        {children}
      </main>
        <MobileMenuBar setActiveItem={setActiveItem} activeItem={activeItem}/>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => { setActiveItem("Home");setIsMenuOpen(false);}} />
    </div>
  );
};

export default Layout;
