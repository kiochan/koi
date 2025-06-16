import { AppMenubar } from './app-menubar';
import { AppMain } from './app-main';

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppMenubar />
      <AppMain />
    </div>
  );
}
