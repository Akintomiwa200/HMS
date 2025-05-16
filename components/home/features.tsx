import { ActivitySquare, Calendar, ClipboardList, Users, MessageSquare, Bell } from "lucide-react";

export function HomeFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Core Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Everything You Need in One Platform
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              MediCare provides a comprehensive set of tools to streamline hospital operations and improve patient care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <ActivitySquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Patient Management</h3>
            <p className="text-center text-muted-foreground">
              Easily manage patient records, medical history, and treatment plans.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Appointment Scheduling</h3>
            <p className="text-center text-muted-foreground">
              Streamlined appointment booking and management system for staff and patients.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Medical Records</h3>
            <p className="text-center text-muted-foreground">
              Secure electronic medical records with complete patient history.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Staff Management</h3>
            <p className="text-center text-muted-foreground">
              Manage doctors, nurses, and staff schedules and assignments.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Communication</h3>
            <p className="text-center text-muted-foreground">
              Integrated messaging system for staff and patient communication.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-3">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Notifications</h3>
            <p className="text-center text-muted-foreground">
              Real-time alerts and notifications for important updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}