import { SidebarInset } from "@koi/ui/components/sidebar";
import { AppNavbar } from "./app-navbar";

export function AppMainContent() {
  return (
    <SidebarInset className="flex-1 flex flex-col overflow-hidden">
      <AppNavbar />
      {/* Content */}
    </SidebarInset>
  );
}
