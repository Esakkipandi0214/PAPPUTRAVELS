'use client'

import { X, Camera, Edit3 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import Image from 'next/image'

interface ProfilePopupProps {
  onClose: () => void
}

export default function ProfilePopup({ onClose }: ProfilePopupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profileImage, setProfileImage] = useState<string | null>(null) // No default image
  const [isEditing, setIsEditing] = useState(false) // Edit mode state

  useEffect(()=>{
    handleUpdateLocalProfileData()
  },[])

  const handleUpdateLocalProfileData = () => {
    const storedData = localStorage.getItem('authToken');
    
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      
      // Update state with values from the stored data
      setName(parsedData.name || 'John Doe'); // Assuming you may want to update 'name'
      setEmail(parsedData.email || 'john.doe@example.com');
      // You can also update the profileImage if stored in localStorage
      // setProfileImage(parsedData.profileImage || null);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      setProfileImage(URL.createObjectURL(file))
    }
  }

  const getInitials = (fullName: string) => {
    const names = fullName.split(' ')
    const initials = names.map(name => name[0]?.toUpperCase()).join('')
    return initials.slice(0, 2) // Return only the first two initials
  }

  return (
    <div className="fixed  inset-4  tab_01:inset-0   bg-transparent bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Profile Image or Initials Section */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span>{getInitials(name)}</span>
                )}
                {isEditing && (
                  <label
                    htmlFor="profile-image"
                    className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer"
                  >
                    <Camera className="h-4 w-4 text-gray-600" />
                  </label>
                )}
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Editable Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm ${
                  isEditing
                    ? 'focus:border-indigo-500 focus:ring-indigo-500'
                    : 'bg-gray-100 cursor-not-allowed'
                } sm:text-sm`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm ${
                  isEditing
                    ? 'focus:border-indigo-500 focus:ring-indigo-500'
                    : 'bg-gray-100 cursor-not-allowed'
                } sm:text-sm`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              {!isEditing ? (
                <Button
                  variant="secondary"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                      variant="default" // Replace "primary" with a supported variant
                    onClick={() => {
                      setIsEditing(false)
                      alert("Changes saved!")
                    }}
                  >
                    Save Changes
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
