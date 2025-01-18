import React, { useState, ReactNode } from "react";
import Homesearch from "@/Components/Home/Homeheader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
          <Homesearch search={search} setSearch={setSearch} />
      

      {/* Main Content */}
      <main className="  bg-[#ece7ee] z-30  mt-16  tab_01:mt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 PAPPU TRAVELS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
