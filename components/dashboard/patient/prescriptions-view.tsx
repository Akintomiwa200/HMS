"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const prescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Sarah Johnson",
    startDate: "2024-03-01",
    endDate: "2024-04-01",
    remaining: 15,
    status: "Active"
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. Michael Chen",
    startDate: "2024-03-10",
    endDate: "2024-04-10",
    remaining: 8,
    status: "Active"
  },
  // Add more mock data as needed
];

export function PatientPrescriptionsView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.medication.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prescription.prescribedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Prescriptions</h2>
        <p className="text-muted-foreground">
          Track and manage your medications
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search medications..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          Request Refill
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Medications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              All medications up to date
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Refills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Request sent to pharmacy
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Next Renewal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 days</div>
            <p className="text-xs text-muted-foreground">
              Lisinopril prescription
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Medications</CardTitle>
          <CardDescription>
            Track your active prescriptions and refills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {filteredPrescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="rounded-lg border p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{prescription.medication}</h3>
                        <Badge variant={prescription.status === "Active" ? "default" : "secondary"}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {prescription.dosage} • {prescription.frequency}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Prescribed by: {prescription.prescribedBy}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {prescription.startDate} to {prescription.endDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Remaining Supply</p>
                      <p className="text-2xl font-bold">{prescription.remaining} days</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Supply Status</span>
                      <span>{prescription.remaining} days left</span>
                    </div>
                    <Progress
                      value={(prescription.remaining / 30) * 100}
                      className="h-2"
                    />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                    {prescription.remaining <= 10 && (
                      <Button size="sm" className="w-full">
                        Request Refill
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Medication Schedule</CardTitle>
          <CardDescription>Daily medication reminders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Morning</h4>
              <div className="mt-2 space-y-2">
                <div className="flex items-center rounded-lg bg-accent p-2">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <div className="text-sm">Lisinopril 10mg - with breakfast</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Evening</h4>
              <div className="mt-2 space-y-2">
                <div className="flex items-center rounded-lg bg-accent p-2">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <div className="text-sm">Metformin 500mg - with dinner</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}