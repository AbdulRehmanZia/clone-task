import { Bell, BookOpen, ChevronRight, DogIcon as Horse, LogOut, MessageCircle, User, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`fixed inset-0 z-50 flex flex-col border-r bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-64`}>
      
      <div className="p-4 bg-gradient-to-r from-bridle-purple to-bridle-pink">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Bridle logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-semibold text-white">Bridle</span>
        </div>
      </div>

     
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {[
            { icon: BookOpen, label: "Browse Events", href: "/events" },
            { icon: ChevronRight, label: "My Events", href: "/my-events" },
            { 
              icon: MessageCircle, 
              label: "Messages", 
              href: "/messages", 
              badge: 1 
            },
            { icon: Horse, label: "My Horses", href: "/horses" },
            { icon: Bell, label: "My Points", href: "/points" },
            { icon: User, label: "My Profile", href: "/profile" }
          ].map(({ icon: Icon, label, href, badge }) => (
            <Link href={href} key={label}>
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-2 hover:bg-gray-100 hover:text-bridle-purple relative"
              >
                <Icon className="h-4 w-4" />
                {label}
                {badge && (
                  <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-bridle-pink text-xs text-white">
                    {badge}
                  </span>
                )}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>

     
      <div className="p-2 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 hover:bg-gray-100 hover:text-bridle-purple"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}