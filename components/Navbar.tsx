import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <SidebarTrigger />
        <LinksDropdown />
      </div>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
