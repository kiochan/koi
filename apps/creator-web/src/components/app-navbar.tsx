import { Separator } from "@koi/ui/components/separator";
import { SidebarTrigger } from "@koi/ui/components/sidebar";
import { AppNavbarBreadcrumb } from "./app-navbar-breadcrumb";

export function AppNavbar() {
  return (
    <div className="flex h-8 shrink-0 items-center px-4 border-b">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation={"vertical" as const}
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <AppNavbarBreadcrumb />
    </div>
  );
}
