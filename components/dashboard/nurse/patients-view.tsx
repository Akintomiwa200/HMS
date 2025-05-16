"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const patients = [
  {
    id: 1,
    name: "John Smith",
    room: "301A",
    status: "Stable",
    nextCheck: "10:00 AM",
    vitals: { temp: "98.6°F", bp: "120/80", hr: "72" }
  },
  {
    id: 2,
    name: "Emma Johnson",
    room: "302B",
    status: "Needs Attention",
    nextCheck: "10:30 AM",
    vitals: { temp: "99.1°F", bp: "130/85", hr: "80" }
  },
  // Add more mock data as needed
];

export function NursePatientsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPatients = patients.filter(patient =>
    (patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.room.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === "all" || patient.status.toLowerCase() === statusFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Assigned Patients</h2>
        <p className="text-muted-foreground">
          Monitor and manage patient care
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients or rooms..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="stable">Stable</SelectItem>
            <SelectItem value="needs attention">Needs Attention</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
          <CardDescription>
            Monitor patient status and vital signs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{patient.name}</h3>
                      <Badge
                        variant={
                          patient.status === "Stable" ? "outline" :
                          patient.status === "Needs Attention" ? "default" : "destructive"
                        }
                      >
                        {patient.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Room: {patient.room} • Next Check: {patient.nextCheck}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Temp: {patient.vitals.temp}</span>
                      <span>BP: {patient.vitals.bp}</span>
                      <span>HR: {patient.vitals.hr}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Update Vitals</Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}