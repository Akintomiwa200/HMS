
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus } from "lucide-react";

export default function DoctorNotesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Clinical Notes</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Notes List</CardTitle>
              <div className="flex w-full items-center space-x-2">
                <Input
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-2">
                  {[1, 2, 3].map((note) => (
                    <div
                      key={note}
                      className="cursor-pointer rounded-lg border p-3 transition-colors hover:bg-accent"
                    >
                      <div className="font-medium">Patient Visit - John Smith</div>
                      <div className="text-sm text-muted-foreground">
                        January {note * 5}, 2024
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Note Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Patient</label>
                  <Input value="John Smith" readOnly />
                </div>
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <Input value="January 5, 2024" readOnly />
                </div>
                <div>
                  <label className="text-sm font-medium">Clinical Notes</label>
                  <Textarea
                    className="min-h-[300px]"
                    placeholder="Enter clinical notes..."
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Note</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
