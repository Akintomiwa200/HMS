"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const appointments = [
  {
    id: 1,
    patientName: "John Smith",
    time: "09:00 AM",
    type: "Follow-up",
    status: "Confirmed"
  },
  {
    id: 2,
    patientName: "Emma Johnson",
    time: "10:30 AM",
    type: "New Patient",
    status: "Pending"
  },
  // Add more mock data as needed
];

export function DoctorAppointmentsView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        <p className="text-muted-foreground">
          Manage your appointments and schedule
        </p>
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
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your appointments for {date?.toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
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
                          <h3 className="font-semibold">{appointment.patientName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {appointment.time} • {appointment.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge>{appointment.status}</Badge>
                          <Button size="sm">Start Session</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="completed">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <p className="text-muted-foreground">No completed appointments for today</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}