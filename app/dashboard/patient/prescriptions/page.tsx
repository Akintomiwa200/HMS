import { PatientPrescriptionsView } from "@/components/dashboard/patient/prescriptions-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function PatientPrescriptionsPage() {
  return (
    <DashboardLayout>
      <PatientPrescriptionsView />
    </DashboardLayout>
  );
}