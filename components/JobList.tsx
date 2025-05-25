"use client";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import { getAllJobsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ComplexButtonContainer from "./ComplexButtonContainer";
import SortingDate, { SortingType } from "./SortingDate";

const JobList = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "All";
  const sorting = (searchParams.get("sorting") || "desc") as SortingType;
  const jobMode = searchParams.get("jobMode") || "All";
  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, jobMode, pageNumber, sorting],
    queryFn: () =>
      getAllJobsAction({
        search,
        jobStatus,
        jobMode,
        sorting,
        page: pageNumber,
      }),
  });

  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;

  const jobs = data?.jobs || [];

  if (isPending) return <h2 className="text-xl">Please wait...</h2>;
  if (jobs.length < 1) return <h2 className="text-xl">No Jobs Found...</h2>;

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl font-semibold capitalize">
            {count} jobs found
          </h2>
          <SortingDate />
        </div>
        {totalPages > 1 && (
          <ComplexButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
