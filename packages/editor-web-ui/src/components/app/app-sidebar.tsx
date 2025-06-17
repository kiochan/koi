'use client';

import * as React from 'react';

import { AppSidebarContent } from '@koi/editor-web-ui/components/app/app-sidebar-content';
import { AppSidebarTools } from '@koi/editor-web-ui/components/app/app-sidebar-tools';
import { AppProjectSwitcher } from '@koi/editor-web-ui/components/app/app-sidebar-project-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@koi/editor-web-ui/components/ui/sidebar';
import { Button } from '../ui/button';
import { Settings } from 'lucide-react';
import { useAppStore } from '../../stores/use-app-store';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [data] = useAppStore();

  return (
    <Sidebar className="pt-8" collapsible="icon" {...props}>
      <SidebarHeader>
        <AppProjectSwitcher projects={data.projects} />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarContent items={data.navPanels} />
        <AppSidebarTools configs={data.navTools} />
      </SidebarContent>
      <SidebarFooter className="flex items-end ">
        <Button variant="secondary" size="icon" className="size-8">
          <Settings />
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
