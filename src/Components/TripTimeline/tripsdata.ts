export interface Trip {
    id: string
    destination: string
    date: string
    isFuture: boolean
    location?: string
    duration?: string
    description?: string
  }
  
  
export const trips: Trip[] = [
  {
    id: "1",
    destination: "Tokyo, Japan",
    date: "March 2023",
    isFuture: false,
    location: "Shinjuku",
    duration: "10 days",
    description:
      "Immersed in the neon-lit streets of Shinjuku, savored world-class sushi, and found tranquility in ancient temples amidst the urban jungle.",
  },
  {
    id: "2",
    destination: "Santorini, Greece",
    date: "June 2023",
    isFuture: false,
    location: "Oia",
    duration: "7 days",
    description:
      "Watched breathtaking sunsets paint the white-washed buildings in golden hues, explored hidden beaches, and indulged in delicious Mediterranean cuisine.",
  },
  {
    id: "3",
    destination: "New York City, USA",
    date: "September 2023",
    isFuture: true,
    location: "Manhattan",
    duration: "5 days",
    description:
      "Planning to catch a Broadway show, wander through Central Park's autumn foliage, and experience the city's legendary food scene from pizza to fine dining.",
  },
  {
    id: "4",
    destination: "Bali, Indonesia",
    date: "January 2024",
    isFuture: true,
    location: "Ubud",
    duration: "14 days",
    description:
      "Looking forward to yoga retreats in lush jungles, surfing on pristine beaches, and immersing in the rich spiritual culture of the Island of Gods.",
  },
  {
    id: "5",
    destination: "Iceland",
    date: "June 2024",
    isFuture: true,
    location: "Reykjavik",
    duration: "10 days",
    description:
      "Excited to chase the midnight sun, hike on ancient glaciers, soak in geothermal hot springs, and hopefully catch a glimpse of the elusive puffins.",
  },
]

