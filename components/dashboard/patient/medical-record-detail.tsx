
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2 } from "lucide-react";

export function MedicalRecordDetail() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Medical Record Details</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">General Information</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Record Date</span>
                  <span>January 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doctor</span>
                  <span>Dr. Sarah Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Department</span>
                  <span>Cardiology</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Diagnosis</h3>
              <div className="mt-2">
                <Badge>Hypertension</Badge>
                <p className="mt-2 text-sm">Stage 1 hypertension with consistent elevated blood pressure readings.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Vital Signs</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blood Pressure</span>
                  <span>140/90 mmHg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Heart Rate</span>
                  <span>78 bpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature</span>
                  <span>98.6°F</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Treatment Plan</h3>
              <div className="mt-2 space-y-2">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">Medication</span>
                  </div>
                  <p className="mt-1 text-sm">Lisinopril 10mg daily</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">Lifestyle Changes</span>
                  </div>
                  <p className="mt-1 text-sm">Reduce sodium intake, regular exercise, stress management</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Follow-up</h3>
              <div className="mt-2">
                <p className="text-sm">Schedule follow-up appointment in 4 weeks for blood pressure monitoring.</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
