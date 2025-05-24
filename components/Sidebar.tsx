"use client";
import Logo2 from "@/assets/logo2.png";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

const CustomSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="mt-4">
        <Image
          src={Logo2}
          alt="logo"
          className="mx-auto h-[100px] object-cover"
          height={100}
          width={200}
        />
      </SidebarHeader>
      <SidebarContent className="mt-10 px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => {
                return (
                  <Button
                    asChild
                    key={link.href}
                    variant={pathname === link.href ? "default" : "link"}
                  >
                    <Link
                      href={link.href}
                      className="flex gap-x-2 items-center"
                    >
                      {link.icon}{" "}
                      <span className="capitalize">{link.label}</span>
                    </Link>
                  </Button>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default CustomSidebar;
