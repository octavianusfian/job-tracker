import Navbar from "@/components/Navbar";
import CustomSidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="border w-full">
        {/* <Navbar /> */}

        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default layout;
