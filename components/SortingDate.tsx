import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export type SortingType = "asc" | "desc";

const SortingDate = () => {
  const [sorting, setSorting] = useState("desc");
  const router = useRouter();

  const pathName = usePathname();
  const handleSort = (value: SortingType) => {
    const params = new URLSearchParams();
    params.set("sorting", value);
    setSorting(value);

    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <Select
      onValueChange={(value) => handleSort(value as SortingType)}
      value={sorting}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by date" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="desc">Newest</SelectItem>
        <SelectItem value="asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortingDate;
