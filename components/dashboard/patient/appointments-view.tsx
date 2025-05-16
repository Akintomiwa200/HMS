"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    department: "Cardiology",
    date: "2024-03-20",
    time: "10:00 AM",
    status: "Confirmed"
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    department: "Neurology",
    date: "2024-03-25",
    time: "2:30 PM",
    status: "Pending"
  },
  // Add more mock data as needed
];

export function PatientAppointmentsView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Appointments</h2>
        <p className="text-muted-foreground">
          Schedule and manage your medical appointments
        </p>
      </div>

      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Book Appointment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled medical appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div>
                          <h3 className="font-semibold">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">
                            {appointment.department}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} at {appointment.time}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant={appointment.status === "Confirmed" ? "default" : "secondary"}
                          >
                            {appointment.status}
                          </Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="outline" size="sm">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="past">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <p className="text-muted-foreground">No past appointments to display</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Book</CardTitle>
          <CardDescription>Popular departments for quick appointment booking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-24 flex flex-col">
              <span className="font-semibold">General Medicine</span>
              <span className="text-sm text-muted-foreground">Regular checkups and consultations</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col">
              <span className="font-semibold">Cardiology</span>
              <span className="text-sm text-muted-foreground">Heart and cardiovascular care</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col">
              <span className="font-semibold">Orthopedics</span>
              <span className="text-sm text-muted-foreground">Bone and joint specialists</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}