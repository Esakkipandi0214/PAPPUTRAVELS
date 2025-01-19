export interface TourPackage {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    imageUrl: string;
  }
  
  export const tourPackages: TourPackage[] = [
    {
      id: "1",
      title: "Tropical Paradise Getaway",
      description: "Enjoy white sandy beaches and crystal clear waters in this tropical paradise.",
      price: 1299,
      duration: "7 days",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "2",
      title: "Mountain Adventure Expedition",
      description: "Embark on a thrilling journey through majestic mountains and lush forests.",
      price: 1499,
      duration: "10 days",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "3",
      title: "Cultural City Explorer",
      description: "Immerse yourself in the rich history and vibrant culture of iconic cities.",
      price: 1099,
      duration: "5 days",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "4",
      title: "Safari Wildlife Experience",
      description: "Witness the wonders of nature up close in this unforgettable safari adventure.",
      price: 2199,
      duration: "8 days",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "5",
      title: "Island Hopping Cruise",
      description: "Explore multiple exotic islands in luxury on this relaxing cruise package.",
      price: 1799,
      duration: "12 days",
      imageUrl: "/placeholder.svg?height=400&width=600"
    }
  ];
  
  