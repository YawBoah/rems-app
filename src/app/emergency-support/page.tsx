import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Building2, Clock, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export default function EmergencySupportPage() {
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
          <Link href="/emergency-support" className="text-sm font-medium text-primary">
            Emergency
          </Link>
          <Link href="/messaging" className="text-sm font-medium">
            Messages
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-red-800">Emergency Support</h2>
            <p className="text-red-600">For urgent assistance with time-sensitive property or transaction issues.</p>
          </div>
          <Button className="ml-auto bg-red-600 hover:bg-red-700">
            <Phone className="mr-2 h-4 w-4" />
            Call Emergency Hotline
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Report Emergency Issue</CardTitle>
              <CardDescription>
                Please provide details about your emergency situation for immediate assistance.
              </CardDescription>
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
                  <label htmlFor="contact" className="text-sm font-medium">
                    Contact Number (for callback)
                  </label>
                  <Input id="contact" type="tel" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="property" className="text-sm font-medium">
                    Property Address
                  </label>
                  <Input id="property" placeholder="Property address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="emergency-type" className="text-sm font-medium">
                    Emergency Type
                  </label>
                  <select
                    id="emergency-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select emergency type</option>
                    <option value="property-damage">Property Damage</option>
                    <option value="security-breach">Security Breach</option>
                    <option value="transaction-issue">Critical Transaction Issue</option>
                    <option value="legal-emergency">Legal Emergency</option>
                    <option value="other">Other Emergency</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Emergency Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Describe the emergency situation in detail"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>I confirm this is a genuine emergency requiring immediate attention</span>
                  </label>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                    Submit Emergency Request
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contact Information</CardTitle>
                <CardDescription>24/7 support for urgent situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Emergency Hotline</h3>
                      <p className="text-sm text-muted-foreground">1-800-555-EMER (3637)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Emergency Chat</h3>
                      <p className="text-sm text-muted-foreground">Available 24/7 with priority response</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Response Time</h3>
                      <p className="text-sm text-muted-foreground">15 minutes or less guaranteed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Qualifies as an Emergency?</CardTitle>
                <CardDescription>Guidelines for emergency support usage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Significant property damage requiring immediate attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Security breaches or unauthorized access to properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Critical transaction issues with imminent deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Legal emergencies requiring immediate intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>System outages affecting critical property operations</span>
                  </li>
                </ul>
                <div className="mt-4 text-sm text-muted-foreground">
                  For non-emergency issues, please use our regular support channels.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
