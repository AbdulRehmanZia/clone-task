import { Bell, BookOpen, ChevronRight, DogIcon as Horse, LogOut, MessageCircle, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar() {
  return (
    <div className="flex w-64 flex-col border-r">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Bridle logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold">Bridle</span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BookOpen className="h-4 w-4" />
              Browse Events
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ChevronRight className="h-4 w-4" />
              My Events
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="relative w-full justify-start gap-2">
              <MessageCircle className="h-4 w-4" />
              Messages
              <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                1
              </span>
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Horse className="h-4 w-4" />
              My Horses
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Bell className="h-4 w-4" />
              My Points
            </Button>
          </Link>
          <Link href="#">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              My Profile
            </Button>
          </Link>
        </div>
      </ScrollArea>
      <div className="p-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}

