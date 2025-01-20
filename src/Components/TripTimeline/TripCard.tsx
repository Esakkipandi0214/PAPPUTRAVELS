import type { Trip } from "./tripsdata"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import {  MapPin, Clock } from "lucide-react"

interface TripCardProps {
  trip: Trip
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 w-72">
      <CardHeader>
        <CardTitle className="text-xl text-white">{trip.destination}</CardTitle>
        <CardDescription className="text-gray-400">
          {trip.isFuture ? (
            <Badge variant="secondary" className="bg-blue-500 text-white">
              Upcoming
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-green-500 text-white">
              Completed
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {trip.location && (
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <p className="text-sm">{trip.location}</p>
            </div>
          )}
          {trip.duration && (
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="h-4 w-4" />
              <p className="text-sm">{trip.duration}</p>
            </div>
          )}
          {trip.description && <p className="text-sm text-gray-400 mt-2 line-clamp-3">{trip.description}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

