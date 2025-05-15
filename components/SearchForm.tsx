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
import { JobStatus } from "@/utils/types";
import { FormEvent } from "react";

const SearchForm = () => {
  const router = useRouter();
  const pathName = usePathname();

  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    const params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <form
      className="bg-muted grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg mb-16 p-8"
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
          {["all", ...Object.values(JobStatus)].map((jobStatus) => (
            <SelectItem key={jobStatus} value={jobStatus}>
              {jobStatus}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Search Job</Button>
    </form>
  );
};

export default SearchForm;
