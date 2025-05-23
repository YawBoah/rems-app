import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Filter, MapPin, Search } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-lg font-semibold">REMS</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <a href="/" className="text-sm font-medium">
            Dashboard
          </a>
          <a href="/explore" className="text-sm font-medium text-primary">
            Explore
          </a>
          <a href="#" className="text-sm font-medium">
            Messages
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Explore Properties</h1>
            <p className="text-muted-foreground">
              Browse available properties with advanced search and filtering options.
            </p>
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
            <Input type="text" placeholder="Search properties by location, price, or features..." className="flex-1" />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="sale">For Sale</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
              <TabsTrigger value="new">New Developments</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src={`/placeholder.svg?height=200&width=300&text=Property+${i + 1}`}
                        alt={`Property ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between">
                        <div className="font-semibold">${(200000 + i * 50000).toLocaleString()}</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">123 Main St, City {i + 1}</div>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span>{3 + (i % 3)} beds</span>
                        <span>•</span>
                        <span>{2 + (i % 2)} baths</span>
                        <span>•</span>
                        <span>{1500 + i * 200} sqft</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sale">
              <div className="text-center py-8 text-muted-foreground">Select filters to view properties for sale</div>
            </TabsContent>
            <TabsContent value="rent">
              <div className="text-center py-8 text-muted-foreground">Select filters to view properties for rent</div>
            </TabsContent>
            <TabsContent value="new">
              <div className="text-center py-8 text-muted-foreground">
                Select filters to view new development properties
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
