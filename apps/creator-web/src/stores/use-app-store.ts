import {
  BookMarked,
  FileSliders,
  SlidersHorizontal,
  SquareTerminal,
} from "lucide-react";

export function useAppStore() {
  const data = {
    projects: [
      {
        name: "Project 1",
        logo: FileSliders,
        type: "Live2d Model Binding",
      },
      {
        name: "Project 2",
        logo: BookMarked,
        type: "Story",
      },
    ],
    navPanels: [
      {
        title: "Panel Name",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Pannel Action",
          },
          {
            title: "Pannel Action",
          },
          {
            title: "Pannel Action",
          },
        ],
      },
    ],
    navTools: [
      {
        name: "Tool Shortcut",
        icon: SlidersHorizontal,
        options: [
          {
            title: "Quick Action",
            icon: SquareTerminal,
          },
        ],
      },
    ],
  };

  return [data] as const;
}
