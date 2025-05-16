"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tasks = [
  {
    id: 1,
    task: "Check vitals for Room 301A",
    patient: "John Smith",
    priority: "High",
    dueTime: "10:00 AM",
    completed: false
  },
  {
    id: 2,
    task: "Administer medication to Room 302B",
    patient: "Emma Johnson",
    priority: "Urgent",
    dueTime: "10:30 AM",
    completed: false
  },
  // Add more mock data as needed
];

export function NurseTasksView() {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (taskId: number) => {
    setTaskList(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch(priority.toLowerCase()) {
      case "urgent":
        return "destructive";
      case "high":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <p className="text-muted-foreground">
          Manage your daily tasks and responsibilities
        </p>
      </div>

      <div className="flex justify-end">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
          <CardDescription>
            Track and manage your assigned tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pending">
            <TabsList className="mb-4">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="pending">
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {taskList.filter(task => !task.completed).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{task.task}</p>
                          <Badge variant={getPriorityBadgeVariant(task.priority)}>
                            {task.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Patient: {task.patient} • Due: {task.dueTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="completed">
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {taskList.filter(task => task.completed).map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-4 rounded-lg border p-4 opacity-70"
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium line-through">{task.task}</p>
                          <Badge variant="outline">{task.priority}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Patient: {task.patient} • Due: {task.dueTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}