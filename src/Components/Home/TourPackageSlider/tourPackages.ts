import Tirunelveli from "../../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Thoothukudi from "../../../../public/Thoothukudi/ThoothukudiLogo.jpg";
import Kanyakumari from "../../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Madurai from "../../../../public/Madurai/MaduraiLogo.webp";
import Theni from "../../../../public/Theni/TheniLogo.jpg";
import { StaticImageData } from "next/image";

export interface TourPackage {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    imageUrl: string | StaticImageData;
  }

 
  
  export const tourPackages: TourPackage[] = [
    {
      id: "1",
      title: "Tranquil Tirunelveli Retreat",
      description: "Experience the serene beauty of Tirunelveli, with its ancient temples and lush greenery.",
      price: 1299,
      duration: "3 days",
      imageUrl: Tirunelveli
    },
    {
      id: "2",
      title: "Kanyakumari Coastal Delight",
      description: "Discover the southernmost tip of India, where the ocean meets the sky in a spectacular view.",
      price: 1499,
      duration: "2 days",
      imageUrl: Thoothukudi
    },
    {
      id: "3",
      title: "Charming Chettinad Heritage Tour",
      description: "Explore the grandeur of Chettinad with its unique mansions, delicious cuisine, and cultural richness.",
      price: 1199,
      duration: "4 days",
      imageUrl: Kanyakumari
    },
    {
      id: "4",
      title: "Ooty Hill Station Escape",
      description: "Relax in the misty hills of Ooty, surrounded by tea plantations and breathtaking views.",
      price: 1999,
      duration: "5 days",
      imageUrl: Madurai
    },
    {
      id: "5",
      title: "Majestic Madurai Pilgrimage",
      description: "Visit the historic city of Madurai, home to the stunning Meenakshi Amman Temple.",
      price: 999,
      duration: "2 days",
      imageUrl: Theni
    }
  ];
  
  
  