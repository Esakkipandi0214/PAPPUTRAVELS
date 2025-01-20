import type { Trip } from "./tripsdata"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Calendar, MapPin, Clock } from "lucide-react"

interface TripModalProps {
  trip: Trip
  onClose: () => void
}

export function TripModal({ trip, onClose }: TripModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{trip.destination}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <p>{trip.date}</p>
          </div>
          {trip.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <p>{trip.location}</p>
            </div>
          )}
          {trip.duration && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <p>{trip.duration}</p>
            </div>
          )}
          {trip.description && <p className="text-sm text-gray-500">{trip.description}</p>}
        </div>
      </DialogContent>
    </Dialog>
  )
}

