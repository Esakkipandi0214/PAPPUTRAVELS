'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
// import { useRouter } from 'next/navigation'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
// import Cookies from 'js-cookie'  // Import js-cookie for storing the JWT
// import { decodeToken } from '../../Services/Profile/decodeToken'; 

interface ProfilePopupProps {
  onClose: () => void
  setIsLoggedIn: (value: boolean) => void;
  setName:(value:string)=>void;
}

export default function AuthPage({ onClose ,setIsLoggedIn,setName}: ProfilePopupProps) {
  const [isLoginMode, setIsLoginMode] = useState(true) // Toggle between login and register
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setuserName] = useState('')
  // const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoginMode && password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    const userData = {
      username: name,
      email: email,
      password: password,
      role: "user"
    }

    try {
      const response = await fetch("/api/users", {
        method: 'POST', // Use POST for login and PUT for registration
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (response.ok) {
        const data = await response.json()

        console.log("Fetch login data:", data.data)
        
        // Serialize the object before storing it in the cookie
        localStorage.setItem('authToken', JSON.stringify(data.data));
        setName(data.data.name)
// Cookies.set('authToken', JSON.stringify(data.data), { expires: 1 });// Store the raw token, as it is the value to be used
          alert('Login Successful!');
          setIsLoggedIn(true)
          onClose();
       

        console.log(isLoginMode ? 'Login success:' : 'Registration success:', data)
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData)
        alert(`Error: ${errorData.message || 'Something went wrong!'}`)
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error. Please try again later.')
    }
  }

  return (
    <div className="flex fixed   inset-4 tab_01:inset-0 bg-transparent  items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-2xl font-bold">
            {isLoginMode ? 'Login' : 'Register'}
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setuserName(e.target.value)}
                  required={!isLoginMode}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLoginMode && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={!isLoginMode}
                />
              </div>
            )}
            <Button type="submit" className="w-full">
              {isLoginMode ? 'Log in' : 'Register'}
            </Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              {isLoginMode ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-blue-500 underline hover:text-blue-700"
              >
                {isLoginMode ? 'Register' : 'Log in'}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
