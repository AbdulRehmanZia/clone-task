import { Bookmark } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function EventList() {
  const events = [
    {
      id: 1,
      month: "FEB",
      day: "27",
      title: "BHA - Kickoff to New Ownership",
      location: "Rim Rock Riders, 17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
    },
    {
      id: 2,
      month: "FEB",
      day: "28",
      title: "Barrel Race (race 6)",
      location: "14405 179th Ave SE, Monroe, WA 98272, USA",
    },
    {
      id: 3,
      month: "FEB",
      day: "28",
      title: "2024 WEDNESDAY NIGHT'S 4D BARREL RACING -CANCELLED",
      location: "26962 Rd 168, 26962 Rd 168, Visalia, CA 93292, USA",
    },
    {
      id: 4,
      month: "FEB",
      day: "28",
      title: "Olsen's Events Jackpot!",
      location: "Olsen's Grain Inc, 344 AZ-89, Chino Valley, AZ 86323, USA",
    },
    {
      id: 5,
      month: "MAR",
      day: "1",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, 4201 SW 65th Way, Davie, FL 33314, USA",
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center justify-between rounded-lg border p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-sm font-medium text-bridle-pink">{event.month}</div>
              <div className="text-2xl font-bold text-bridle-purple">{event.day}</div>
            </div>
            <div>
              <h3 className="font-semibold text-bridle-purple">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.location}</p>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="text-bridle-purple hover:text-bridle-pink hover:bg-gray-100">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}

