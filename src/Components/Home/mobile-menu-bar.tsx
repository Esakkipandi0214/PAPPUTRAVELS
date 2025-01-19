"use client"

import { Home, Heart, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [ 
    { icon: Heart, label: "Wishlist" },
  { icon: Home, label: "Home" },
  { icon: Menu, label: "Menu" },
]

interface MobileMenuProps{
    activeItem:string;
    setActiveItem:(value:string)=> void;
}

export const MobileMenuBar:React.FC<MobileMenuProps>=({activeItem, setActiveItem})=> {

  return (
    <div className="fixed bottom-4  lg1:hidden left-4 right-4 bg-background/80 backdrop-blur-md rounded-full shadow-lg">
      <nav className="flex justify-around items-center h-16">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center h-full w-full rounded-full relative transition-all duration-300 ease-in-out",
              activeItem === item.label ? "text-primary" : "text-muted-foreground"
            )}
            onClick={() => setActiveItem(item.label)}
          >
            {/* Background animation */}
            <span
              className={cn(
                "absolute inset-0 rounded-full bg-primary/10 z-0 transition-transform duration-300",
                activeItem === item.label ? "scale-90" : "scale-0"
              )}
            ></span>

            {/* Icon and label */}
            <div className="relative z-10 flex flex-col items-center transition-transform duration-150 hover:scale-90">
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}
