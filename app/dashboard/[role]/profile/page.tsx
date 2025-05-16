import { ProfileView } from "@/components/dashboard/profile-view";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <ProfileView />
    </DashboardLayout>
  );
}