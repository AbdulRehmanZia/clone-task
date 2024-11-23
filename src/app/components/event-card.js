import Image from "next/image"
import { Bookmark } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export function EventCard({ title, organizer, date, imageUrl }) {
  return (
    <Card className="w-[300px] shrink-0">
      <CardContent className="p-0">
        <div className="relative h-[200px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 bg-white/80 hover:bg-white"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="mb-1 font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {organizer} • {date}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

