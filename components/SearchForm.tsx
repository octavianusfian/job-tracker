"use client";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobStatus, JobMode } from "@/utils/types";
import { FormEvent } from "react";

const SearchForm = () => {
  const router = useRouter();
  const pathName = usePathname();

  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "All";
  const jobMode = searchParams.get("jobMode") || "All";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;
    const jobMode = formData.get("jobMode") as string;

    const params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);
    params.set("jobMode", jobMode);

    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <form
      className="bg-muted grid sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-lg mb-16 p-8"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search Job"
        name="search"
        className="bg-white"
        defaultValue={search}
      />
      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["All", ...Object.values(JobStatus)].map((jobStatus) => (
            <SelectItem key={jobStatus} value={jobStatus}>
              {jobStatus}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select name="jobMode" defaultValue={jobMode}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["All", ...Object.values(JobMode)].map((jobMode) => (
            <SelectItem key={jobMode} value={jobMode}>
              {jobMode}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" className="cursor-pointer">
        Search Job
      </Button>
    </form>
  );
};

export default SearchForm;
