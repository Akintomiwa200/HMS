import { PatientAppointmentsView } from "@/components/dashboard/patient/appointments-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function PatientAppointmentsPage() {
  return (
    <DashboardLayout>
      <PatientAppointmentsView />
    </DashboardLayout>
  );
}