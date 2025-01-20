import Tirunelveli from "../../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Kanyakumari from "../../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Temple from "../../../../public/LocationsImages/Temple.jpg";

import { StaticImageData } from "next/image";

export interface VechicleData {
    id: number;
    type: string;
    name: string;
    details: string;
    image: string | StaticImageData;
  }

 
  
  export const VechicleDatas: VechicleData[] =  [
    { id: 1, type: "Car", name: "Toyota Camry", details: "Sedan, 2020 Model", image: Tirunelveli },
    { id: 2, type: "Bike", name: "Harley Davidson", details: "Cruiser, 2019 Model", image: Kanyakumari },
    { id: 3, type: "Three Wheeler", name: "Auto Rickshaw", details: "Electric, 2022 Model", image: Temple },
    { id: 4, type: "Car", name: "Honda Accord", details: "Sedan, 2021 Model", image: Tirunelveli },
    { id: 5, type: "SUV", name: "Tesla Model X", details: "Electric, 2023 Model", image: Kanyakumari },
    { id: 6, type: "Bike", name: "Ducati Panigale", details: "Sport, 2022 Model", image: Temple },
  ]
  
  
  