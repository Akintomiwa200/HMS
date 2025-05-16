import { DoctorDashboard } from "@/components/dashboard/doctor/dashboard";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DoctorDashboardPage() {
  return (
    <DashboardLayout>
      <DoctorDashboard />
    </DashboardLayout>
  );
}