import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Building2,
  Compass,
  HeadsetIcon as HeadsetHelp,
  Home,
  MapPin,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  FileBarChart,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="text-lg font-semibold">REMS</span>
        </div>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/explore" className="flex items-center gap-2 text-sm font-medium">
            <Compass className="h-4 w-4" />
            Explore
          </Link>
          <Link href="/notice-board" className="flex items-center gap-2 text-sm font-medium">
            <Bell className="h-4 w-4" />
            Notice Board
          </Link>
          <Link href="/verified-agents" className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Agents
          </Link>
          <Link href="/messaging" className="flex items-center gap-2 text-sm font-medium">
            <MessageSquare className="h-4 w-4" />
            Messages
          </Link>
          <Link href="/billing" className="flex items-center gap-2 text-sm font-medium">
            <FileBarChart className="h-4 w-4" />
            Billing
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Properties Listed</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">+4% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">User Inquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <FileBarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$48,294</div>
              <p className="text-xs text-muted-foreground">+7% from last month</p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="functional-areas">
          <TabsList>
            <TabsTrigger value="functional-areas">Functional Areas</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="functional-areas" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Notice Board</CardTitle>
                  <Bell className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View and manage demographic data related to property listings and market trends.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/notice-board" className="text-sm font-medium text-primary">
                      View Details →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Support Agent</CardTitle>
                  <HeadsetHelp className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with support agents for assistance with software usage and issue resolution.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/support-agent" className="text-sm font-medium text-primary">
                      Contact Support →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Houses Pinned</CardTitle>
                  <MapPin className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View and manage properties you have saved for later reference or comparison.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/houses-pinned" className="text-sm font-medium text-primary">
                      View Pinned →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Explore</CardTitle>
                  <Compass className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Browse available properties with advanced search and filtering options.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/explore" className="text-sm font-medium text-primary">
                      Start Exploring →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Verified Agents</CardTitle>
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Find and connect with verified real estate agents in your area of interest.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/verified-agents" className="text-sm font-medium text-primary">
                      Find Agents →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Messenger</CardTitle>
                  <MessageSquare className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Communicate with agents, property managers, and other users through our secure messaging system.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/messaging" className="text-sm font-medium text-primary">
                      Open Messages →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Emergency Support</CardTitle>
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access urgent assistance for time-sensitive property or transaction issues.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/emergency-support" className="text-sm font-medium text-primary">
                      Emergency Help →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Billing Reports</CardTitle>
                  <FileBarChart className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate and view financial reports related to property management and transactions.
                  </CardDescription>
                  <div className="mt-4 flex justify-end">
                    <Link href="/billing" className="text-sm font-medium text-primary">
                      View Reports →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="demographics">
            <Card>
              <CardHeader>
                <CardTitle>Demographic Data</CardTitle>
                <CardDescription>
                  View demographic information relevant to real estate listings in different areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Select a region to view detailed demographic data.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Billing Reports</CardTitle>
                <CardDescription>Generate and view financial reports related to property management.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Select a report type and date range to generate reports.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
