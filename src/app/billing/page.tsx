import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Download, FileBarChart, HeadsetIcon as HeadsetHelp } from "lucide-react"

export default function BillingReportPage() {
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
          <a href="/explore" className="text-sm font-medium">
            Explore
          </a>
          <a href="/billing" className="text-sm font-medium text-primary">
            Billing
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="bg-primary/10 p-4 rounded-lg mb-4">
          <h1 className="text-2xl font-bold text-primary">Billing Reports Dashboard</h1>
          <p>Access and manage all your financial reports in one place</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Billing Reports</h1>
            <p className="text-muted-foreground">Generate and view financial reports related to property management.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="current">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Month</SelectItem>
                <SelectItem value="previous">Previous Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Year to Date</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <FileBarChart className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>
        <Tabs defaultValue="summary">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <FileBarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$48,294</div>
                  <p className="text-xs text-muted-foreground">+7% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                  <FileBarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,543</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Net Income</CardTitle>
                  <FileBarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$35,751</div>
                  <p className="text-xs text-muted-foreground">+9% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
                  <FileBarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,294</div>
                  <p className="text-xs text-muted-foreground">-3% from last month</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue Overview</CardTitle>
                <CardDescription>Revenue breakdown by property type and location</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
                <div className="text-center">
                  <p className="text-muted-foreground">Chart visualization would appear here</p>
                  <p className="text-xs text-muted-foreground mt-2">Showing data for current month</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transactions">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>A list of your recent transactions</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground">
                    <div>Date</div>
                    <div>Description</div>
                    <div>Category</div>
                    <div className="text-right">Amount</div>
                  </div>
                  <div className="divide-y">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="grid grid-cols-4 py-3 text-sm">
                        <div>{`${5 - i}/15/2023`}</div>
                        <div>
                          {
                            [
                              "Rent Payment",
                              "Property Maintenance",
                              "Agent Commission",
                              "Insurance Premium",
                              "Property Tax",
                            ][i]
                          }
                        </div>
                        <div>{["Income", "Expense", "Expense", "Expense", "Expense"][i]}</div>
                        <div className={`text-right ${i === 0 ? "text-green-600" : "text-red-600"}`}>
                          {i === 0 ? "+$1,500.00" : `-$${(300 + i * 150).toFixed(2)}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>Manage and view all invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">Select a date range to view invoices</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expenses">
            <Card>
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
                <CardDescription>Track and categorize your expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">Select a date range to view expenses</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-8 p-4 border rounded-lg bg-muted/30">
          <h3 className="font-medium mb-2">Having trouble accessing reports?</h3>
          <p className="text-sm text-muted-foreground mb-2">
            If you're experiencing issues accessing your billing reports, please try the following:
          </p>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Ensure you have the correct permissions</li>
            <li>Clear your browser cache and cookies</li>
            <li>Try accessing from a different browser</li>
            <li>Contact support if the issue persists</li>
          </ul>
          <Button variant="outline" className="mt-4">
            <HeadsetHelp className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </main>
    </div>
  )
}
