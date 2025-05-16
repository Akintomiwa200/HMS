"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Bell, Check, Users, ClipboardList, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Simulated data
const assignedPatients = [
  { id: 1, name: "John Smith", room: "301A", status: "Stable", vitalsTime: "09:30 AM", medication: "10:00 AM" },
  { id: 2, name: "Emma Johnson", room: "302B", status: "Needs Attention", vitalsTime: "10:00 AM", medication: "10:30 AM" },
  { id: 3, name: "Michael Brown", room: "304A", status: "Critical", vitalsTime: "08:45 AM", medication: "09:15 AM" },
  { id: 4, name: "Sarah Wilson", room: "305B", status: "Stable", vitalsTime: "09:15 AM", medication: "09:45 AM" },
  { id: 5, name: "David Lee", room: "307A", status: "Stable", vitalsTime: "10:30 AM", medication: "11:00 AM" },
];

const nursingTasks = [
  { id: 1, task: "Check vitals for Room 302B", priority: "High", completed: false },
  { id: 2, task: "Administer medication to Room 304A", priority: "Urgent", completed: false },
  { id: 3, task: "Change IV for Room 301A", priority: "Medium", completed: true },
  { id: 4, task: "Update patient chart for Room 305B", priority: "Medium", completed: false },
  { id: 5, task: "Prepare discharge papers for Room 306C", priority: "Low", completed: false },
];

export function NurseDashboard() {
  const { toast } = useToast();
  const [tasks, setTasks] = useState(nursingTasks);
  const [searchPatient, setSearchPatient] = useState("");
  
  const filteredPatients = assignedPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchPatient.toLowerCase()) || 
    patient.room.toLowerCase().includes(searchPatient.toLowerCase())
  );

  const toggleTaskCompleted = (taskId: number) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    
    setTasks(updatedTasks);
    
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
      toast({
        title: task.completed ? "Task marked as incomplete" : "Task completed",
        description: task.task,
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch(status) {
      case "Critical":
        return "destructive";
      case "Needs Attention":
        return "default";
      case "Stable":
        return "outline";
      default:
        return "secondary";
    }
  };
  
  const getPriorityBadgeVariant = (priority: string) => {
    switch(priority) {
      case "Urgent":
        return "destructive";
      case "High":
        return "default";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Nurse Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's your patient assignments and tasks for today.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Assigned Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignedPatients.length}</div>
            <p className="text-xs text-muted-foreground">
              {assignedPatients.filter(p => p.status === "Critical").length} critical
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Tasks
            </CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
            <p className="text-xs text-muted-foreground">
              {tasks.filter(t => !t.completed).length} pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Medications Due
            </CardTitle>
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
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M3 2h18v14H3z"></path>
              <path d="M9 2v14"></path>
              <path d="M15 2v14"></path>
              <path d="M9 16l-6 6"></path>
              <path d="M15 16l6 6"></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Next due in 15 minutes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Alerts
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 urgent alert
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="patients" className="space-y-4">
        <TabsList>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="medication">Medication</TabsTrigger>
          <TabsTrigger value="vitals">Vitals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="patients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Patients</CardTitle>
              <CardDescription>Your patient assignments for today's shift</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search patients by name or room number" 
                  value={searchPatient}
                  onChange={(e) => setSearchPatient(e.target.value)}
                  className="flex-1"
                />
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="needs-attention">Needs Attention</SelectItem>
                    <SelectItem value="stable">Stable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {filteredPatients.map((patient) => (
                    <div key={patient.id} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">{patient.name}</div>
                        <Badge variant={getStatusBadgeVariant(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <div>Room: {patient.room}</div>
                        <div className="flex justify-between mt-1">
                          <span>Vitals check: {patient.vitalsTime}</span>
                          <span>Medication: {patient.medication}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" className="w-full">View Details</Button>
                        <Button size="sm" variant="outline" className="w-full">Update Status</Button>
                      </div>
                    </div>
                  ))}
                  
                  {filteredPatients.length === 0 && (
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <p className="text-muted-foreground">No patients found matching your search criteria</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Nursing Tasks</CardTitle>
                <CardDescription>Tasks assigned to you for this shift</CardDescription>
              </div>
              <Button>
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="pending" className="flex-1">Pending</TabsTrigger>
                  <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-start space-x-4 rounded-lg border p-4">
                        <Checkbox 
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompleted(task.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                              {task.task}
                            </p>
                            <Badge variant={getPriorityBadgeVariant(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="pending">
                  <div className="space-y-4">
                    {tasks.filter(t => !t.completed).map((task) => (
                      <div key={task.id} className="flex items-start space-x-4 rounded-lg border p-4">
                        <Checkbox 
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompleted(task.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {task.task}
                            </p>
                            <Badge variant={getPriorityBadgeVariant(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {tasks.filter(t => !t.completed).length === 0 && (
                      <div className="rounded-lg border border-dashed p-8 text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">All Done!</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          You've completed all your tasks for now.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="space-y-4">
                    {tasks.filter(t => t.completed).map((task) => (
                      <div key={task.id} className="flex items-start space-x-4 rounded-lg border p-4">
                        <Checkbox 
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompleted(task.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium line-through text-muted-foreground">
                              {task.task}
                            </p>
                            <Badge variant={getPriorityBadgeVariant(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {tasks.filter(t => t.completed).length === 0 && (
                      <div className="rounded-lg border border-dashed p-8 text-center">
                        <p className="text-muted-foreground">No completed tasks yet</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medication Schedule</CardTitle>
              <CardDescription>Upcoming medication administration schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">10:00 AM</h3>
                    <div className="space-y-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">John Smith (Room 301A)</div>
                            <div className="text-sm text-muted-foreground">Lisinopril 10mg - Oral</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">10:30 AM</h3>
                    <div className="space-y-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Emma Johnson (Room 302B)</div>
                            <div className="text-sm text-muted-foreground">Insulin - 5 units - Subcutaneous</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Emma Johnson (Room 302B)</div>
                            <div className="text-sm text-muted-foreground">Acetaminophen 500mg - Oral</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">11:00 AM</h3>
                    <div className="space-y-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">David Lee (Room 307A)</div>
                            <div className="text-sm text-muted-foreground">Furosemide 40mg - Oral</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">12:00 PM</h3>
                    <div className="space-y-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Michael Brown (Room 304A)</div>
                            <div className="text-sm text-muted-foreground">Morphine 2mg - IV</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Sarah Wilson (Room 305B)</div>
                            <div className="text-sm text-muted-foreground">Metoprolol 25mg - Oral</div>
                          </div>
                          <Button size="sm" variant="outline">
                            Administer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Full Schedule</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="vitals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vitals Monitoring</CardTitle>
              <CardDescription>Patient vital signs monitoring schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="scheduled">
                <TabsList className="mb-4">
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="all-patients">All Patients</TabsTrigger>
                </TabsList>
                
                <TabsContent value="scheduled">
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {assignedPatients.map((patient) => (
                        <div key={patient.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{patient.name}</div>
                              <div className="text-sm text-muted-foreground">Room: {patient.room}</div>
                              <div className="text-sm text-muted-foreground">Next check: {patient.vitalsTime}</div>
                            </div>
                            <Button variant="outline" size="sm">
                              Record Vitals
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="rounded-lg border p-8 text-center">
                    <p className="text-muted-foreground">Completed vitals records will appear here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="all-patients">
                  <div className="rounded-lg border p-8 text-center">
                    <p className="text-muted-foreground">All patients vitals tracking will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}