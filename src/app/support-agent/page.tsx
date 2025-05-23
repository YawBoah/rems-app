import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, HeadsetIcon, MessageSquare, Phone, Video } from "lucide-react"
import Link from "next/link"

export default function SupportAgentPage() {
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
          <Link href="/explore" className="text-sm font-medium">
            Explore
          </Link>
          <Link href="/notice-board" className="text-sm font-medium">
            Notice Board
          </Link>
          <Link href="/support-agent" className="text-sm font-medium text-primary">
            Support
          </Link>
          <Link href="/messaging" className="text-sm font-medium">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Support Agent</h1>
            <p className="text-muted-foreground">Get assistance with using the software or resolving issues.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
            <Button>
              <HeadsetIcon className="mr-2 h-4 w-4" />
              Live Chat
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Fill out the form below to get assistance from our support team.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="issue" className="text-sm font-medium">
                    Issue Type
                  </label>
                  <select
                    id="issue"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select an issue type</option>
                    <option value="technical">Technical Issue</option>
                    <option value="account">Account Management</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Describe your issue in detail" className="min-h-[120px]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="attachments" className="text-sm font-medium">
                    Attachments (optional)
                  </label>
                  <Input id="attachments" type="file" />
                </div>
                <Button type="submit" className="w-full">
                  Submit Support Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
                <CardDescription>Choose how you would like to receive support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Chat with a support agent in real-time</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Start Chat
                    </Button>
                  </div>

                  <div className="flex items-center p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-muted-foreground">Speak directly with a support agent</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Call Now
                    </Button>
                  </div>

                  <div className="flex items-center p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Video Consultation</h3>
                      <p className="text-sm text-muted-foreground">Schedule a video call with a support specialist</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Schedule
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
                <CardDescription>When our support team is available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-sm text-muted-foreground">
                    Emergency support is available 24/7 for urgent issues.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
