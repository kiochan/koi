import { SidebarInset } from './ui/sidebar';
import { AppNavbar } from './app-navbar';

export function AppMainContent() {
  return (
    <SidebarInset className="flex-1 flex flex-col overflow-hidden">
      <AppNavbar />
      {/* Content */}
    </SidebarInset>
  );
}
