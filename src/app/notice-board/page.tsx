import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Building2, Search } from "lucide-react"
import Link from "next/link"

export default function NoticeBoardPage() {
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
          <Link href="/notice-board" className="text-sm font-medium text-primary">
            Notice Board
          </Link>
          <Link href="/messaging" className="text-sm font-medium">
            Messages
          </Link>
          <Link href="/billing" className="text-sm font-medium">
            Billing
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Notice Board</h1>
            <p className="text-muted-foreground">
              View demographic data and important announcements for your real estate interests.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North Region</SelectItem>
                <SelectItem value="south">South Region</SelectItem>
                <SelectItem value="east">East Region</SelectItem>
                <SelectItem value="west">West Region</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Bell className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        <Tabs defaultValue="announcements">
          <TabsList>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="market-trends">Market Trends</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="announcements" className="space-y-4">
            <div className="flex w-full items-center space-x-2 mb-4">
              <Input type="text" placeholder="Search announcements..." className="flex-1" />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "New Property Tax Regulations",
                  date: "May 20, 2023",
                  description: "Important changes to property tax regulations affecting all homeowners in the region.",
                  category: "Regulatory",
                  priority: "high",
                },
                {
                  title: "Market Analysis: Q2 2023",
                  date: "May 15, 2023",
                  description: "Comprehensive analysis of real estate market trends for the second quarter of 2023.",
                  category: "Market Update",
                  priority: "medium",
                },
                {
                  title: "New Mortgage Interest Rates",
                  date: "May 10, 2023",
                  description: "Updated information on current mortgage interest rates from major lenders.",
                  category: "Financial",
                  priority: "medium",
                },
                {
                  title: "Upcoming Property Showcase Event",
                  date: "May 5, 2023",
                  description: "Join us for an exclusive showcase of premium properties in the downtown area.",
                  category: "Event",
                  priority: "low",
                },
                {
                  title: "System Maintenance Notice",
                  date: "May 1, 2023",
                  description: "Scheduled maintenance for the REMS platform on May 5th from 2-4 AM EST.",
                  category: "System",
                  priority: "low",
                },
              ].map((announcement, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>{announcement.title}</CardTitle>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          announcement.priority === "high"
                            ? "bg-red-100 text-red-800"
                            : announcement.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{announcement.date}</span>
                      <span>•</span>
                      <span>{announcement.category}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{announcement.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="demographics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Demographics</CardTitle>
                <CardDescription>Population statistics and demographic information by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Population Distribution</h3>
                    <div className="h-[300px] bg-muted/20 rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Population distribution chart would appear here</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Income Levels</h3>
                    <div className="h-[300px] bg-muted/20 rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Income levels chart would appear here</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Age Distribution</h3>
                    <div className="h-[300px] bg-muted/20 rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Age distribution chart would appear here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="market-trends">
            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
                <CardDescription>Current real estate market trends and forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Select a region to view detailed market trend data
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Real estate related events and property showcases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">No upcoming events scheduled at this time</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
