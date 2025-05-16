"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CalendarPlus, Clock, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Simulated data
const upcomingAppointments = [
  { id: 1, doctor: "Dr. Sarah Johnson", department: "Cardiology", date: "Jan 15, 2025", time: "10:00 AM", status: "Confirmed" },
  { id: 2, doctor: "Dr. Robert Chen", department: "Neurology", date: "Jan 20, 2025", time: "02:30 PM", status: "Pending" }
];

const medications = [
  { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", remaining: 15 },
  { name: "Metformin", dosage: "500mg", frequency: "Twice daily", remaining: 8 },
  { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily", remaining: 23 }
];

const recentReports = [
  { title: "Blood Test Results", date: "Dec 28, 2024", doctor: "Dr. Sarah Johnson" },
  { title: "ECG Report", date: "Dec 15, 2024", doctor: "Dr. Michael Williams" },
  { title: "CT Scan Results", date: "Nov 30, 2024", doctor: "Dr. Robert Chen" }
];

export function PatientDashboard() {
  const { toast } = useToast();
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);

  const handleBookAppointment = () => {
    setIsBookingAppointment(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Appointment request sent",
        description: "You will receive a confirmation once approved.",
      });
      setIsBookingAppointment(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Patient Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's your health summary and upcoming appointments.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Next Appointment
            </CardTitle>
            <CalendarPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jan 15</div>
            <p className="text-xs text-muted-foreground">
              Dr. Sarah Johnson, Cardiology
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Medications
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              1 needs refill soon
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Reports Pending
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Blood work and ECG results
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Alerts
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Medication refill needed
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="reports">Medical Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Your Health Summary</CardTitle>
                <CardDescription>Overview of your recent health data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Blood Pressure</div>
                      <div className="text-sm text-muted-foreground">120/80 mmHg (Normal)</div>
                    </div>
                    <Progress value={65} className="mt-2 h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Heart Rate</div>
                      <div className="text-sm text-muted-foreground">72 bpm (Normal)</div>
                    </div>
                    <Progress value={55} className="mt-2 h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Blood Glucose</div>
                      <div className="text-sm text-muted-foreground">95 mg/dL (Normal)</div>
                    </div>
                    <Progress value={40} className="mt-2 h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Cholesterol</div>
                      <div className="text-sm text-muted-foreground">180 mg/dL (Normal)</div>
                    </div>
                    <Progress value={70} className="mt-2 h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Complete Medical Record</Button>
              </CardFooter>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your next scheduled visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{appointment.doctor}</div>
                        <Badge variant={appointment.status === "Confirmed" ? "default" : "outline"}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <div>{appointment.department}</div>
                        <div>{appointment.date} at {appointment.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleBookAppointment} className="w-full">
                  {isBookingAppointment ? "Booking..." : "Book New Appointment"}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent healthcare activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-2 mr-4">
                    <CalendarPlus className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Appointment Scheduled
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You scheduled an appointment with Dr. Sarah Johnson for Jan 15, 2025
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    2 days ago
                  </div>
                </div>
                <Separator />
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-2 mr-4">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Prescription Renewed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your prescription for Lisinopril was renewed by Dr. Michael Williams
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    1 week ago
                  </div>
                </div>
                <Separator />
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-2 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" x2="8" y1="13" y2="13"></line>
                      <line x1="16" x2="8" y1="17" y2="17"></line>
                      <line x1="10" x2="8" y1="9" y2="9"></line>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Test Results Available
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your blood test results are now available for viewing
                    </p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    2 weeks ago
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Appointment Management</CardTitle>
                <CardDescription>Schedule, view, and manage your appointments</CardDescription>
              </div>
              <Button>Book New Appointment</Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold">{appointment.doctor}</div>
                            <Badge variant={appointment.status === "Confirmed" ? "default" : "outline"}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="mt-2 text-sm text-muted-foreground">
                            <div>{appointment.department}</div>
                            <div>{appointment.date} at {appointment.time}</div>
                          </div>
                          <div className="mt-4 flex space-x-2">
                            <Button size="sm" variant="outline" className="w-full">Reschedule</Button>
                            <Button size="sm" variant="outline" className="w-full">Cancel</Button>
                          </div>
                        </div>
                      ))}
                      <div className="rounded-lg border border-dashed p-8 text-center">
                        <p className="text-muted-foreground">No more upcoming appointments</p>
                        <Button variant="outline" className="mt-4">
                          Schedule New Appointment
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="past">
                  <div className="rounded-lg border p-8 text-center">
                    <p className="text-muted-foreground">Your past appointment history will be shown here.</p>
                  </div>
                </TabsContent>
                <TabsContent value="cancelled">
                  <div className="rounded-lg border p-8 text-center">
                    <p className="text-muted-foreground">Your cancelled appointments will be shown here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Medications</CardTitle>
              <CardDescription>Current prescription medications and refill status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medications.map((medication, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">{medication.name}</div>
                        <Badge variant={medication.remaining <= 10 ? "destructive" : "default"}>
                          {medication.remaining} days left
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>{medication.dosage}, {medication.frequency}</div>
                      </div>
                      <div className="mt-2">
                        <Progress 
                          value={medication.remaining > 30 ? 100 : (medication.remaining / 30) * 100} 
                          className="h-2" 
                        />
                      </div>
                      {medication.remaining <= 10 && (
                        <Button size="sm" className="mt-2 w-full">Request Refill</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Medication Schedule</CardTitle>
              <CardDescription>Your daily medication schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="font-semibold">Morning</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center rounded-lg bg-accent p-2">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <div className="text-sm">Lisinopril 10mg - with breakfast</div>
                    </div>
                    <div className="flex items-center rounded-lg bg-accent p-2">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <div className="text-sm">Metformin 500mg - with breakfast</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-semibold">Evening</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center rounded-lg bg-accent p-2">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <div className="text-sm">Atorvastatin 20mg - before bed</div>
                    </div>
                    <div className="flex items-center rounded-lg bg-accent p-2">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <div className="text-sm">Metformin 500mg - with dinner</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical Reports</CardTitle>
              <CardDescription>Your recent medical reports and test results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {report.date} · {report.doctor}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <p className="text-muted-foreground">Request your medical records from previous healthcare providers</p>
                  <Button variant="outline" className="mt-4">
                    Request Records
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}