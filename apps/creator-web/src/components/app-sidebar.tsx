"use client";

import { Button } from "@koi/ui/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@koi/ui/components/sidebar";
import { Settings } from "lucide-react";
import type * as React from "react";
import { useAppStore } from "../stores/use-app-store";
import { AppSidebarContent } from "./app-sidebar-content";
import { AppProjectSwitcher } from "./app-sidebar-project-switcher";
import { AppSidebarTools } from "./app-sidebar-tools";

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
