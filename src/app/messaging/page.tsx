import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, PaperclipIcon, Send, User } from "lucide-react"
import Link from "next/link"

export default function MessagingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-lg font-semibold">REMS</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Link href="/" className="text-sm font-medium">
            Dashboard
          </Link>
          <a href="/explore" className="text-sm font-medium">
            Explore
          </a>
          <a href="/messaging" className="text-sm font-medium text-primary">
            Messages
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col md:flex-row">
        <div className="border-r md:w-80">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Conversations</h2>
            <Input placeholder="Search messages..." className="mb-4" />
            <div className="space-y-2">
              {["John Smith (Agent)", "Sarah Lee (Agent)", "Property Manager", "Support Team", "Emergency Support"].map(
                (name, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg p-3 ${i === 0 ? "bg-muted" : "hover:bg-muted"} cursor-pointer`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{name}</div>
                      <div className="text-xs text-muted-foreground">
                        {i === 0 ? "I'll send you more details about..." : "Click to view conversation"}
                      </div>
                    </div>
                    {i === 0 && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        3
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="border-b p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">John Smith (Verified Agent)</div>
                <div className="text-xs text-muted-foreground">Online • Last active 5m ago</div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p>Hello! I saw you were interested in the property at 123 Main St. How can I help you today?</p>
                <div className="mt-1 text-xs text-muted-foreground">10:30 AM</div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                <p>
                  Hi John! Yes, I am very interested in that property. Could you tell me more about the neighborhood?
                </p>
                <div className="mt-1 text-xs text-primary-foreground/80">10:32 AM</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p>
                  Of course! The neighborhood is very family-friendly with excellent schools nearby. There is a park
                  within walking distance and several shopping centers just a short drive away.
                </p>
                <div className="mt-1 text-xs text-muted-foreground">10:35 AM</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p>Would you like to schedule a viewing? I have availability this weekend.</p>
                <div className="mt-1 text-xs text-muted-foreground">10:36 AM</div>
              </div>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <PaperclipIcon className="h-5 w-5" />
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon" className="h-10 w-10 rounded-full">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
