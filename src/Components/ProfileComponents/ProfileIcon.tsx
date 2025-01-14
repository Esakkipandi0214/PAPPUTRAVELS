'use client'

import { useState } from 'react'
// import Link from 'next/link'
import { User, LogOut, LogIn } from 'lucide-react'
import { Button } from "@/Components/ui/button"
import { Avatar, AvatarFallback } from "@/Components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import ProfilePopup from './ProfilePopup'
import LoginPage from './LoginPage'


interface ProfileIconProps {
  isLoggedIn: boolean
  onLogout: () => void
  setIsLoggedIn: (value: boolean) => void;
}

export default function ProfileIcon({ isLoggedIn, onLogout,setIsLoggedIn }: ProfileIconProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem onClick={() =>{setIsLoginOpen(false); setIsProfileOpen(true)}}>
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={() => {setIsProfileOpen(false);setIsLoginOpen(true);}}>
            {/* <Link href="/login"> */}
              <LogIn className="mr-2 h-4 w-4" />
              <span>Log in</span>
            {/* </Link> */}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
      {isProfileOpen && <ProfilePopup onClose={() => setIsProfileOpen(false)} />}
      {isLoginOpen &&  <LoginPage setIsLoggedIn={setIsLoggedIn} onClose={() => setIsLoginOpen(false)} />}
    </DropdownMenu>
  )
}

