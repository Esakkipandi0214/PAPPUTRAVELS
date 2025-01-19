'use client'

import { useState, useEffect } from 'react'
import { User, LogOut, LogIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfilePopup from '../ProfileComponents/ProfilePopup'
import LoginPage from '../ProfileComponents/LoginPage'
import Image from 'next/image'

interface ProfileIconProps {
  isLoggedIn: boolean
  onLogout: () => void
  setIsLoggedIn: (value: boolean) => void;
}

export default function ProfileIcon({ isLoggedIn, onLogout, setIsLoggedIn }: ProfileIconProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLoginMouseOver, setLoginMouseOver] = useState(false)

  useEffect(() => {
    handleUpdateLocalProfileData()
  }, [])

  const handleUpdateLocalProfileData = () => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem('authToken')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setName(parsedData.name || "Guest")
        setProfileImage(parsedData.ImageUrl || null)
      }
    }
  }

  const renderProfileContent = () => {
    if (profileImage) {
      return <Image src={profileImage} alt="Profile" width={32} height={32} className="rounded-full" />
    }
    if (name) {
      return (
        <div className="flex items-center p-3 justify-center bg-[#2d0c3c] text-white rounded-full w-8 h-8">
          {name.charAt(0).toUpperCase()}
        </div>
      )
    }
    return (
      <div className="flex items-center justify-center bg-gray-400 text-white rounded-full w-8 h-8">
        ?
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {isLoggedIn ? renderProfileContent() : (
            <div
              onMouseOver={() => setLoginMouseOver(true)}
              onMouseOut={() => setLoginMouseOver(false)}
              className="bg-[#2d0c3c] rounded-full hover:bg-white hover:border hover:border-[#8174A0] px-4 py-2"
            >
              <button className={`font-bold ${isLoginMouseOver ? "text-black" : "text-white"}`}>
                Login
              </button>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem onClick={() => { setIsLoginOpen(false); setIsProfileOpen(true) }}>
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={() => { setIsProfileOpen(false); setIsLoginOpen(true) }}>
            <LogIn className="mr-2 h-4 w-4" />
            <span>Log in</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
      {isProfileOpen && <ProfilePopup onClose={() => setIsProfileOpen(false)} />}
      {isLoginOpen && <LoginPage setName={setName} setIsLoggedIn={setIsLoggedIn} onClose={() => setIsLoginOpen(false)} />}
    </DropdownMenu>
  )
}
