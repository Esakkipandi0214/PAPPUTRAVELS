import React, { useState, ReactNode } from "react";
import Homesearch from "@/components/Home/Homeheader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col bg-[#ece7ee] min-h-screen">
      {/* Header */}
      <Homesearch search={search} setSearch={setSearch} />

      {/* Main Content */}
      <main className="flex-1 bg-transparent z-30 mt-16 tab_01:mt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
