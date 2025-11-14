import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../ui/resizable';
import { SidebarInset } from '../ui/sidebar';
import { AppNavbar } from './app-navbar';

import { ColumnDef } from '@tanstack/react-table';

// import { modelPhyData } from './p-data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { ScrollArea } from '../ui/scroll-area';

type PhysicsData = {
  PhysicsSettings: {
    Id: string;
    Input: {
      Type: string;
      Source: { Id: string; Target: string };
      Weight: number;
    }[];
    Output: {
      Type: string;
      Destination: { Id: string; Target: string };
      VertexIndex: number;
      Scale: number;
      Weight: number;
    }[];
  }[];
};

export function PhysicsTableView({ data }: { data: PhysicsData }) {
  return (
    <div className="space-y-10">
      {data.PhysicsSettings.map((setting, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl font-bold">
            设置 {index + 1}: {setting.Id}
          </h2>

          {/* 输入表格 */}
          <div>
            <h3 className="font-semibold">🎯 Input</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>类型</TableHead>
                  <TableHead>源 ID</TableHead>
                  <TableHead>目标</TableHead>
                  <TableHead>权重</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {setting.Input.map((input, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{input.Type}</TableCell>
                    <TableCell>{input.Source.Id}</TableCell>
                    <TableCell>{input.Source.Target}</TableCell>
                    <TableCell>{input.Weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 输出表格 */}
          <div>
            <h3 className="font-semibold">Output</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>类型</TableHead>
                  <TableHead>目标 ID</TableHead>
                  <TableHead>目标</TableHead>
                  <TableHead>顶点索引</TableHead>
                  <TableHead>缩放</TableHead>
                  <TableHead>权重</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {setting.Output.map((output, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{output.Type}</TableCell>
                    <TableCell>{output.Destination.Id}</TableCell>
                    <TableCell>{output.Destination.Target}</TableCell>
                    <TableCell>{output.VertexIndex}</TableCell>
                    <TableCell>{output.Scale}</TableCell>
                    <TableCell>{output.Weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AppMainContent() {
  return (
    <SidebarInset className="flex-1 flex flex-col overflow-hidden">
      <AppNavbar />

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Viewer</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              Parameters
              <ScrollArea className="h-full w-full"></ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>Mapping</ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarInset>
  );
}
