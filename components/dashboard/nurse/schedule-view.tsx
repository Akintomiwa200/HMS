"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const shifts = [
  {
    id: 1,
    date: "2024-03-20",
    shift: "Morning",
    time: "7:00 AM - 3:00 PM",
    department: "General Ward",
    status: "Scheduled"
  },
  {
    id: 2,
    date: "2024-03-21",
    shift: "Night",
    time: "11:00 PM - 7:00 AM",
    department: "ICU",
    status: "Pending"
  },
  // Add more mock data as needed
];

export function NurseScheduleView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <p className="text-muted-foreground">
          View and manage your work schedule
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view your shifts</CardDescription>
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
            <CardTitle>Upcoming Shifts</CardTitle>
            <CardDescription>Your scheduled shifts</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                {shifts.map((shift) => (
                  <div
                    key={shift.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <h3 className="font-semibold">{shift.shift} Shift</h3>
                      <p className="text-sm text-muted-foreground">
                        {shift.date} • {shift.time}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Department: {shift.department}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={shift.status === "Scheduled" ? "default" : "secondary"}
                      >
                        {shift.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Request Change
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Schedule Overview</CardTitle>
          <CardDescription>Monthly schedule and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Total Hours</h4>
              <p className="mt-2 text-2xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Night Shifts</h4>
              <p className="mt-2 text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Weekend Shifts</h4>
              <p className="mt-2 text-2xl font-bold">4</p>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}