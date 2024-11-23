import { CalendarIcon, ChevronDown, MessageCircle, Search } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "./components/sidebar"
import { EventCard } from "./components/event-card"
import { EventList } from "./components/event-list"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Hero background"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 py-20">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Bridle logo"
                width={120}
                height={40}
                className="mb-6"
              />
              <h1 className="mb-2 text-4xl font-bold text-white">
                Supercharge your equine business
                <br />
                all in one place with Bridle
              </h1>
              <p className="text-lg text-white/90">
                Manage horses & clients, streamline finances, automate bookings & events, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="all-events" className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TabsList>
                  <TabsTrigger value="all-events">All Events</TabsTrigger>
                  <TabsTrigger value="saved-events">Saved Events (2)</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </Tabs>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Featured Events</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <EventCard
                title="Underground Bull Riders Membership"
                organizer="Bull Ring"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Horses in two lines"
                organizer="BUC"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Underground Bull Riders Membership"
                organizer="Bull Ring"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Horses in two lines"
                organizer="BUC"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="/placeholder.svg?height=200&width=300"
              />
            </div>
          </section>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Button variant="outline" className="h-8">
              All
            </Button>
            <Button variant="outline" className="h-8">
              Live
            </Button>
            <Button variant="outline" className="h-8">
              Upcoming
            </Button>
            <Select>
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-8 gap-2">
              <CalendarIcon className="h-4 w-4" />
              Event Date
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by event name..."
                className="h-8 pl-8"
              />
            </div>
          </div>

          <EventList />
        </div>
      </main>
    </div>
  )
}

