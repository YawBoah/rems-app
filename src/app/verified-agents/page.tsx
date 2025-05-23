import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Filter, MapPin, MessageSquare, Search, ShieldCheck, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Agent from "@/img/agents.jpg"

export default function VerifiedAgentsPage() {
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
          <Link href="/verified-agents" className="text-sm font-medium text-primary">
            Verified Agents
          </Link>
          <Link href="/messaging" className="text-sm font-medium">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Verified Agents</h1>
            <p className="text-muted-foreground">Find and connect with verified real estate agents in your area.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button size="sm" className="h-8">
              <MapPin className="mr-2 h-3.5 w-3.5" />
              <span>Map View</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Search agents by name, location, or specialization..." className="flex-1" />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Agents</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-muted overflow-hidden">
                          <Image
                            src={Agent}
                            alt={`Agent ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <div className="font-semibold">{`John Doe ${i + 1}`}</div>
                            <ShieldCheck className="h-4 w-4 text-primary" />
                          </div>
                          <div className="text-sm text-muted-foreground">{`${["Residential", "Commercial", "Luxury", "Investment"][i % 4]} Specialist`}</div>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star
                                key={j}
                                className={`h-3.5 w-3.5 ${j < 4 + (i % 2) ? "text-yellow-400" : "text-muted"}`}
                                fill={j < 4 + (i % 2) ? "currentColor" : "none"}
                              />
                            ))}
                            <span className="ml-1 text-xs text-muted-foreground">{`(${50 + i * 12})`}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-sm text-muted-foreground mb-2">
                          <MapPin className="h-3.5 w-3.5 inline mr-1" />
                          {`${["New York", "Los Angeles", "Chicago", "Miami", "Seattle", "Boston", "Austin", "Denver"][i]}, USA`}
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium">Properties: </span>
                          {`${10 + i * 5} Active Listings`}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <MessageSquare className="mr-2 h-3.5 w-3.5" />
                            Message
                          </Button>
                          <Button size="sm" className="flex-1">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="residential">
              <div className="text-center py-8 text-muted-foreground">Select filters to view residential agents</div>
            </TabsContent>
            <TabsContent value="commercial">
              <div className="text-center py-8 text-muted-foreground">Select filters to view commercial agents</div>
            </TabsContent>
            <TabsContent value="luxury">
              <div className="text-center py-8 text-muted-foreground">
                Select filters to view luxury property agents
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
