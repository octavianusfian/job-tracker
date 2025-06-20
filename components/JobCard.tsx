import { type JobType } from "@/utils/types";
import { MapPin, Briefcase, CalendarDays, RadioTower } from "lucide-react";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import JobInfo from "./JobInfo";
import DeleteJobButton from "./DeleteJobButton";
import { format } from "date-fns";
import { getPriorityStyle } from "@/utils/function";

const JobCard = ({ job }: { job: JobType }) => {
  const date = format(new Date(job.createdAt), "dd MMM yyyy");
  return (
    <Card className="bg-muted">
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>{job.position}</CardTitle>
          <CardDescription>{job.company}</CardDescription>
        </div>
        <div>
          <Badge className={getPriorityStyle(job.priority)}>
            {job.priority}
          </Badge>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="grid grid-cols-2 mt-4 gap-4">
        <JobInfo icon={<Briefcase />} text={job.mode} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="w-32 justify-center">
          <JobInfo
            icon={<RadioTower className="w-4 h-4" />}
            text={job.status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
