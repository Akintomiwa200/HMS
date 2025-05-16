import { NursePatientsView } from "@/components/dashboard/nurse/patients-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function NursePatientsPage() {
  return (
    <DashboardLayout>
      <NursePatientsView />
    </DashboardLayout>
  );
}