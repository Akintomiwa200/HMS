import { DoctorAppointmentsView } from "@/components/dashboard/doctor/appointments-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DoctorAppointmentsPage() {
  return (
    <DashboardLayout>
      <DoctorAppointmentsView />
    </DashboardLayout>
  );
}