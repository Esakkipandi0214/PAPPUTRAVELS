import Tirunelveli from "../../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Thoothukudi from "../../../../public/Thoothukudi/ThoothukudiLogo.jpg";
import Kanyakumari from "../../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Madurai from "../../../../public/Madurai/MaduraiLogo.webp";
import Theni from "../../../../public/Theni/TheniLogo.jpg";
import Tenkasi from "../../../../public/Tenkasi/TenkasiLogo.jpg";
import Ooty from "../../../../public/Ooty/OotyLogo.jpg";

import { StaticImageData } from "next/image";

export interface LocationData {
    name: string;
    image: string | StaticImageData;
  }

 
  
  export const LocationDatas: LocationData[] =  [
    { name: "Tirunelveli", image: Tirunelveli },
    { name: "Thoothukudi", image: Thoothukudi },
    { name: "Kanyakumari", image: Kanyakumari },
    { name: "Madurai", image: Madurai },
    { name: "Theni", image: Theni },
    { name: "Tenkasi", image: Tenkasi },
    { name: "Ooty", image: Ooty },
  ];
  
  
  