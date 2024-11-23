import Image from "next/image"
import { Bookmark } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"



export function EventCard({ title, organizer, date, imageUrl }) {
  return (
    <Card className="w-[300px] shrink-0 overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-[200px]">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt={title}
            fill
            className="object-cover"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 bg-white/80 hover:bg-white text-bridle-purple hover:text-bridle-pink"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="mb-1 font-semibold text-bridle-purple">{title}</h3>
          <p className="text-sm text-gray-600">
            {organizer} • {date}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

