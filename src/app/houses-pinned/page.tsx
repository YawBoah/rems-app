import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Filter,
  Grid,
  Heart,
  List,
  MapPin,
  Search,
  Trash2,
  ArrowUpDownIcon as ArrowsUpDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import House from "@/img/house.jpg"

export default function HousesPinnedPage() {
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
          <Link
            href="/houses-pinned"
            className="text-sm font-medium text-primary"
          >
            Pinned
          </Link>
          <Link href="/verified-agents" className="text-sm font-medium">
            Agents
          </Link>
          <Link href="/messaging" className="text-sm font-medium">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Houses Pinned</h1>
            <p className="text-muted-foreground">
              View and manage properties you have saved for later reference or
              comparison.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ArrowsUpDown className="h-3.5 w-3.5" />
              <span>Compare</span>
            </Button>
            <Button size="sm" className="h-8">
              <MapPin className="mr-2 h-3.5 w-3.5" />
              <span>Map View</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Search your pinned properties..."
              className="flex-1"
            />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Pinned</TabsTrigger>
                <TabsTrigger value="recent">Recently Pinned</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="viewed">Recently Viewed</TabsTrigger>
              </TabsList>

              <div className="mt-4 flex items-center gap-2 sm:mt-0 sm:justify-end">
                <Select defaultValue="date">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date Pinned: Newest</SelectItem>
                    <SelectItem value="date-asc">
                      Date Pinned: Oldest
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="price-asc">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="size-desc">Size: Largest</SelectItem>
                    <SelectItem value="size-asc">Size: Smallest</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative">
                        <div className="absolute right-2 top-2 z-10 flex gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Heart
                              className="h-4 w-4 text-red-500"
                              fill="currentColor"
                            />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute left-2 top-2 z-10">
                          <Checkbox
                            id={`compare-${i}`}
                            className="h-4 w-4 rounded-sm border-white bg-white/80"
                          />
                        </div>
                        <div className="aspect-video w-full bg-muted">
                          <Image
                            src={House}
                            alt={`Property ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {
                            [
                              "For Sale",
                              "For Rent",
                              "New Development",
                              "Open House",
                            ][i % 4]
                          }
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <div className="font-semibold">
                            ${(200000 + i * 50000).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Pinned {i + 1} day{i !== 0 ? "s" : ""} ago
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          123 Main St, City {i + 1}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <span>{3 + (i % 3)} beds</span>
                          <span>•</span>
                          <span>{2 + (i % 2)} baths</span>
                          <span>•</span>
                          <span>{1500 + i * 200} sqft</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <MapPin className="mr-2 h-3.5 w-3.5" />
                            View
                          </Button>
                          <Button size="sm" className="flex-1">
                            Contact Agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative">
                        <div className="absolute right-2 top-2 z-10 flex gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute left-2 top-2 z-10">
                          <Checkbox
                            id={`compare-recent-${i}`}
                            className="h-4 w-4 rounded-sm border-white bg-white/80"
                          />
                        </div>
                        <div className="aspect-video w-full bg-muted">
                          <Image
                            src={House}
                            alt={`Recent Property ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {
                            [
                              "For Sale",
                              "For Rent",
                              "New Development",
                              "Open House",
                            ][i % 4]
                          }
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <div className="font-semibold">
                            ${(300000 + i * 75000).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Pinned today
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          456 Park Ave, City {i + 1}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <span>{4 + (i % 2)} beds</span>
                          <span>•</span>
                          <span>{3 + (i % 2)} baths</span>
                          <span>•</span>
                          <span>{2000 + i * 300} sqft</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <MapPin className="mr-2 h-3.5 w-3.5" />
                            View
                          </Button>
                          <Button size="sm" className="flex-1">
                            Contact Agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative">
                        <div className="absolute right-2 top-2 z-10 flex gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Heart
                              className="h-4 w-4 text-red-500"
                              fill="currentColor"
                            />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute left-2 top-2 z-10">
                          <Checkbox
                            id={`compare-fav-${i}`}
                            className="h-4 w-4 rounded-sm border-white bg-white/80"
                          />
                        </div>
                        <div className="aspect-video w-full bg-muted">
                          <Image
                            src={House}
                            alt={`Favorite Property ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {["For Sale", "For Rent", "New Development"][i % 3]}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <div className="font-semibold">
                            ${(400000 + i * 100000).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Favorited
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          789 Ocean Dr, City {i + 1}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <span>{5 + (i % 2)} beds</span>
                          <span>•</span>
                          <span>{4 + (i % 2)} baths</span>
                          <span>•</span>
                          <span>{2500 + i * 500} sqft</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <MapPin className="mr-2 h-3.5 w-3.5" />
                            View
                          </Button>
                          <Button size="sm" className="flex-1">
                            Contact Agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="viewed" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="relative">
                        <div className="absolute right-2 top-2 z-10 flex gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute left-2 top-2 z-10">
                          <Checkbox
                            id={`compare-viewed-${i}`}
                            className="h-4 w-4 rounded-sm border-white bg-white/80"
                          />
                        </div>
                        <div className="aspect-video w-full bg-muted">
                          <Image
                            src={House}
                            alt={`Viewed Property ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {
                            [
                              "For Sale",
                              "For Rent",
                              "New Development",
                              "Open House",
                              "Auction",
                            ][i % 5]
                          }
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <div className="font-semibold">
                            ${(250000 + i * 60000).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Viewed {i + 1} hr{i !== 0 ? "s" : ""} ago
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          321 Mountain Rd, City {i + 1}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <span>{3 + (i % 3)} beds</span>
                          <span>•</span>
                          <span>{2 + (i % 3)} baths</span>
                          <span>•</span>
                          <span>{1800 + i * 250} sqft</span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            <MapPin className="mr-2 h-3.5 w-3.5" />
                            View
                          </Button>
                          <Button size="sm" className="flex-1">
                            Contact Agent
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-8">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Compare Selected Properties
            </h2>
            <p className="mb-4 text-muted-foreground">
              Select properties using the checkboxes to compare them side by
              side.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 rounded-lg border p-4 text-center">
                <div className="mb-2 text-sm font-medium">
                  No property selected
                </div>
                <div className="text-xs text-muted-foreground">
                  Check a property to compare
                </div>
              </div>
              <div className="flex-1 rounded-lg border p-4 text-center">
                <div className="mb-2 text-sm font-medium">
                  No property selected
                </div>
                <div className="text-xs text-muted-foreground">
                  Check a property to compare
                </div>
              </div>
              <div className="flex-1 rounded-lg border p-4 text-center">
                <div className="mb-2 text-sm font-medium">
                  No property selected
                </div>
                <div className="text-xs text-muted-foreground">
                  Check a property to compare
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button disabled>Compare Properties</Button>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Collections</h2>
          <p className="mb-4 text-muted-foreground">
            Organize your pinned properties into collections for easier access.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Dream Homes", count: 5 },
              { name: "Investment Properties", count: 3 },
              { name: "Vacation Rentals", count: 2 },
              { name: "Fixer-Uppers", count: 4 },
            ].map((collection, i) => (
              <div key={i} className="rounded-lg border p-4 hover:bg-muted/50">
                <h3 className="font-medium">{collection.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {collection.count} properties
                </p>
                <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                  View Collection
                </Button>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg border border-dashed p-4">
              <Button variant="outline">
                <span className="mr-2 text-lg">+</span> Create Collection
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
