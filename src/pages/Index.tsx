import { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { BookOpen, Calendar, GraduationCap, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data - in a real app this would come from an API
const mockCourses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    progress: 75,
    instructor: "Dr. Smith",
    nextAssignment: "Algorithm Analysis Due: Tomorrow",
  },
  {
    id: 2,
    title: "Data Structures",
    progress: 60,
    instructor: "Prof. Johnson",
    nextAssignment: "Binary Trees Quiz Due: Next Week",
  },
  {
    id: 3,
    title: "Web Development",
    progress: 90,
    instructor: "Mrs. Davis",
    nextAssignment: "Final Project Due: In 3 days",
  },
];

const mockNotifications = [
  {
    id: "1",
    title: "New Assignment Posted",
    message: "Algorithm Analysis has been posted",
    time: "5 minutes ago",
  },
  {
    id: "2",
    title: "Upcoming Due Date",
    message: "Binary Trees Quiz due in 2 days",
    time: "1 hour ago",
  },
];

export default function Index() {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleNotificationClick = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    toast({
      title: "Notification marked as read",
      duration: 2000,
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader
            studentName="John Doe"
            studentEmail="john.doe@university.edu"
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
          />
          <main className="p-8 space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Active Courses"
                value="6"
                icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
              />
              <StatCard
                title="Assignments Due"
                value="4"
                icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
              />
              <StatCard
                title="Average Grade"
                value="85%"
                icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />}
              />
              <StatCard
                title="Notifications"
                value={notifications.length}
                icon={<Bell className="h-4 w-4 text-muted-foreground" />}
              />
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    progress={course.progress}
                    instructor={course.instructor}
                    nextAssignment={course.nextAssignment}
                    onClick={() => {
                      toast({
                        title: `Opening ${course.title}`,
                        description: "This would navigate to the course page",
                        duration: 2000,
                      });
                    }}
                  />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}