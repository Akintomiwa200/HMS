"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const records = [
  {
    id: 1,
    type: "Lab Results",
    date: "2024-03-15",
    doctor: "Dr. Sarah Johnson",
    department: "Cardiology",
    status: "Normal"
  },
  {
    id: 2,
    type: "X-Ray Report",
    date: "2024-03-10",
    doctor: "Dr. Michael Chen",
    department: "Radiology",
    status: "Review Required"
  },
  // Add more mock data as needed
];

export function PatientMedicalRecordsView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecords = records.filter(record =>
    record.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Medical Records</h2>
        <p className="text-muted-foreground">
          Access and manage your medical history
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search records..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          Request Records
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Lab Results
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Imaging Reports
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Last updated: March 10, 2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Prescriptions
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Last updated: March 18, 2024
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
          <CardDescription>
            View your complete medical history and records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Records</TabsTrigger>
              <TabsTrigger value="lab">Lab Results</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="visits">Visit Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {filteredRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{record.type}</h3>
                          <Badge
                            variant={record.status === "Normal" ? "outline" : "default"}
                          >
                            {record.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {record.date} • {record.doctor}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Department: {record.department}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="lab">
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">Lab results will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="imaging">
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">Imaging reports will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="visits">
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">Visit notes will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}