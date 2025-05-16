import { NurseTasksView } from "@/components/dashboard/nurse/tasks-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function NurseTasksPage() {
  return (
    <DashboardLayout>
      <NurseTasksView />
    </DashboardLayout>
  );
}