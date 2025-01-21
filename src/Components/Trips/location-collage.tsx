import Image from "next/image";
import Tirunelveli from "../../../public/Tiruvelveli/TirunelveliLogo.jpg";
import Thoothukudi from "../../../public/Thoothukudi/ThoothukudiLogo.jpg";
import Kanyakumari from "../../../public/KanyaKumari/kanyakumariLogo.jpg";
import Madurai from "../../../public/Madurai/MaduraiLogo.webp";

interface LocationDetails {
  name: string;
  description: string;
  population: number;
  founded: number;
  attractions: string[];
}

const locationDetails: LocationDetails = {
  name: "Serenity Springs",
  description:
    "A picturesque mountain town known for its hot springs and outdoor activities.",
  population: 15000,
  founded: 1872,
  attractions: [
    "Hot Springs National Park",
    "Mountain View Trail",
    "Historic Downtown",
    "Lakeside Resort",
  ],
};

export default function LocationCollage() {
  return (
    <div className="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left: Collage layout */}
      <div className="flex-1">
        <div className="grid grid-rows-3 grid-cols-2 gap-2 h-auto lg:h-[500px]">
          {/* Top image spanning two columns */}
          <div className="row-span-1 col-span-2 relative h-48 lg:h-auto">
            <Image
              src={Thoothukudi}
              alt="Top image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Bottom-left small images */}
          <div className="row-span-2 col-span-1 grid grid-rows-2 gap-2">
            <div className="relative h-24 lg:h-auto rounded-lg overflow-hidden">
              <Image
                src={Tirunelveli}
                alt="Small image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-24 lg:h-auto rounded-lg overflow-hidden">
              <Image
                src={Madurai}
                alt="Small image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Bottom-right large image */}
          <div className="row-span-2 col-span-1 relative rounded-lg overflow-hidden h-48 lg:h-auto">
            <Image
              src={Kanyakumari}
              alt="Large image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Right: Location details */}
      <div className="flex">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {locationDetails.name}
          </h1>
          <p className="mb-4">{locationDetails.description}</p>
          <p className="mb-2">
            <strong>Population:</strong>{" "}
            {locationDetails.population.toLocaleString()}
          </p>
          <p className="mb-2">
            <strong>Founded:</strong> {locationDetails.founded}
          </p>
          <p>
            <strong>Top Attraction:</strong> {locationDetails.attractions[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
