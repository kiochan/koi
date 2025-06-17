import '../../lib/i18n';

import { AppMenubar } from './app-menubar';
import { AppMain } from './app-main';
import ClientOnly from '../client-only';

export function App() {
  return (
    <ClientOnly>
      <div className="flex flex-col h-screen">
        <AppMenubar />
        <AppMain />
      </div>
    </ClientOnly>
  );
}
