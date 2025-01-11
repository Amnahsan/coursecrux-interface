import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Profile() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader
            studentName="John Doe"
            studentEmail="john.doe@university.edu"
            notifications={[]}
            onNotificationClick={() => {}}
          />
          <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            {/* Profile content will be implemented in future iterations */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}