"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobPriority,
} from "@/utils/types";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CustomFormField, CustomFormSelect } from "./FormComponents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateJobForm = () => {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
      priority: JobPriority.Medium,
    },
  });

  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast("there was an error");
        return;
      }

      toast("job created");

      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      router.push("/jobs");
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
    
    mutate(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField
            name="position"
            placeholder="Full-stack developer"
            control={form.control}
          />
          <CustomFormField
            name="company"
            placeholder="Unilever"
            control={form.control}
          />
          <CustomFormField
            name="location"
            placeholder="Jakarta"
            control={form.control}
          />

          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />

          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />

          <CustomFormSelect
            name="priority"
            control={form.control}
            labelText="job priority"
            items={Object.values(JobPriority)}
          />

          <Button
            className="self-end capitalize cursor-pointer"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "loading..." : "create job"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
