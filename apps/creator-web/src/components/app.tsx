import { AppMain } from "./app-main";
import { AppMenubar } from "./app-menubar";

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppMenubar />
      <AppMain />
    </div>
  );
}
