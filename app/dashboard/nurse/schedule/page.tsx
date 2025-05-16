import { NurseScheduleView } from "@/components/dashboard/nurse/schedule-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function NurseSchedulePage() {
  return (
    <DashboardLayout>
      <NurseScheduleView />
    </DashboardLayout>
  );
}