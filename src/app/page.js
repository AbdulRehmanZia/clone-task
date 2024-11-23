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
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar className="hidden md:block" />
      
      <main className="flex-1">
        <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1489829024224-f5ef0424a0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hero background"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bridle-purple to-bridle-pink">
            <div className="container mx-auto px-4 py-10 md:py-20">
              <Image
                src="https://images.unsplash.com/photo-1614209255222-3666dde8c39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Bridle logo"
                width={120}
                height={40}
                className="mb-4 md:mb-6"
              />
              <h1 className="mb-2 text-2xl md:text-4xl font-bold text-white text-center md:text-left">
                Supercharge your equine business
                <br className="hidden md:block" />
                all in one place with Bridle
              </h1>
              <p className="text-sm md:text-lg text-white/90 text-center md:text-left">
                Manage horses & clients, streamline finances, automate bookings & events, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="all-events" className="mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <TabsList className="bg-gray-100 w-full md:w-auto">
                <TabsTrigger 
                  value="all-events" 
                  className="flex-1 md:flex-none data-[state=active]:bg-bridle-purple data-[state=active]:text-"
                >
                  All Events
                </TabsTrigger>
                <TabsTrigger 
                  value="saved-events" 
                  className="flex-1 md:flex-none data-[state=active]:bg-bridle-purple data-[state=active]:text-black"
                >
                  Saved Events (2)
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-bridle-purple">Featured Events</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <EventCard
                title="Underground Bull Riders Membership"
                organizer="Bull Ring"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D"
              />
              <EventCard
                title="Horses in two lines"
                organizer="BUC"
                date="Jan 1 - Dec 31, 2024"
                imageUrl="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnRzfGVufDB8fDB8fHww"
              />
              <EventCard
                title="Barrel Racing Championship"
                organizer="Western Riders Association"
                date="Mar 15 - Mar 17, 2024"
                imageUrl="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnRzfGVufDB8fDB8fHww"
              />
              <EventCard
                title="Equestrian Dressage Showcase"
                organizer="Dressage Masters"
                date="Apr 5 - Apr 7, 2024"
                imageUrl="https://images.unsplash.com/photo-1714474597969-8395a0793a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm91bmQlMjBzaGFwZXN8ZW58MHx8MHx8fDA%3D"
              />
            </div>
          </section>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200">
                All
              </Button>
              <Button variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200">
                Live
              </Button>
              <Button variant="outline" className="h-8 bg-gray-100 hover:bg-gray-200">
                Upcoming
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Select>
                <SelectTrigger className="h-8 w-[120px] bg-gray-100">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="usa">USA </SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="h-8 gap-2 bg-gray-100 hover:bg-gray-200">
                <CalendarIcon className="h-4 w-4" />
                Event Date
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="w-full md:w-auto">
              <div className="relative flex justify-center">
                <Search className="absolute left-2 top-1.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by event name..."
                  className="h-8 pl-8 bg-gray-100 w-full max-w-[300px]"
                />
              </div>
            </div>
          </div>

          <EventList />
        </div>
      </main>
    </div>
  )
}