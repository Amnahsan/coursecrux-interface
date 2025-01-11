import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  instructor: string;
  nextAssignment?: string;
  onClick?: () => void;
}

export function CourseCard({ title, progress, instructor, nextAssignment, onClick }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">Instructor: {instructor}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {nextAssignment && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Next Assignment:</p>
              <p className="text-sm font-medium">{nextAssignment}</p>
            </div>
          )}
          <Button variant="ghost" className="w-full justify-between" onClick={onClick}>
            View Course <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}