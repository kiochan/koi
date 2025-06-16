import { Separator } from '@radix-ui/react-separator';
import { AppNavbarBreadcrumb } from './app-navbar-breadcrumb';
import { SidebarTrigger } from './ui/sidebar';

export function AppNavbar() {
  return (
    <div className="flex h-8 shrink-0 items-center px-4 border-b">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation={'vertical' as const}
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <AppNavbarBreadcrumb />
    </div>
  );
}
