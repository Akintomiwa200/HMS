import { NurseDashboard } from "@/components/dashboard/nurse/dashboard";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function NurseDashboardPage() {
  return (
    <DashboardLayout>
      <NurseDashboard />
    </DashboardLayout>
  );
}