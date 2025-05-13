import { ReactNode } from "react";

const JobInfo = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      {text}
    </div>
  );
};

export default JobInfo;
