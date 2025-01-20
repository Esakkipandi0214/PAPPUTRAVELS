"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/AppLogo/logo2.webp" // Update the path to your logo

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 text-[#421869] flex flex-col items-center justify-center z-50">
      <div className="w-full h-full py-10 pt-16 tab_01:pt-28 lg1:py-10 ">
        {/* Close Button */}
        <span className="text-2xl w-full px-4 text-red-500">
          <button onClick={onClose} className="hover:opacity-75">✖</button>
        </span>

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
            <Link legacyBehavior href="/">
              <a className="text-[#421869] font-medium " onClick={onClose}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/AboutUs">
              <a className="text-[#421869] font-medium " onClick={onClose}>
                About us
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/ContactUs">
              <a className="text-[#421869] font-medium " onClick={onClose}>
                Contact us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
