import { PatientMedicalRecordsView } from "@/components/dashboard/patient/medical-records-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function PatientMedicalRecordsPage() {
  return (
    <DashboardLayout>
      <PatientMedicalRecordsView />
    </DashboardLayout>
  );
}