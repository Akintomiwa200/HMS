import { DoctorPatientsView } from "@/components/dashboard/doctor/patients-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DoctorPatientsPage() {
  return (
    <DashboardLayout>
      <DoctorPatientsView />
    </DashboardLayout>
  );
}