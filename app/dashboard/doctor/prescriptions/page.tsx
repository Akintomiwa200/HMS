import { DoctorPrescriptionsView } from "@/components/dashboard/doctor/prescriptions-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DoctorPrescriptionsPage() {
  return (
    <DashboardLayout>
      <DoctorPrescriptionsView />
    </DashboardLayout>
  );
}