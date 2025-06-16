import { AppMainContent } from './app-main-content';
import { AppSidebar } from './app-sidebar';
import { SidebarProvider } from './ui/sidebar';

export function AppMain() {
  return (
    <div className="flex flex-1 overflow-hidden ">
      <SidebarProvider>
        <AppSidebar />
        <AppMainContent />
      </SidebarProvider>
    </div>
  );
}
