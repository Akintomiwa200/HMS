import { PatientDashboard } from "@/components/dashboard/patient/dashboard";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function PatientDashboardPage() {
  return (
    <DashboardLayout>
      <PatientDashboard />
    </DashboardLayout>
  );
}