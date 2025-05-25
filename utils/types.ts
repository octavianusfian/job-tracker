import * as z from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
  priority: string;
};

export enum JobStatus {
  Pending = "Pending",
  Interview = "Interview",
  Declined = "Declined",
}

export enum JobMode {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Internship = "Internship",
}

export enum JobPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
  priority: z.nativeEnum(JobPriority),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
