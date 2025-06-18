import '../../lib/i18n';

import { AppMenubar } from './app-menubar';
import { AppMain } from './app-main';
import ClientOnly from '../client-only';
import { AppModal } from './app-modal';

export function App() {
  return (
    <>
      <ClientOnly>
        <div className="flex flex-col h-screen">
          <AppMenubar />
          <AppMain />
        </div>
        <AppModal />
      </ClientOnly>
    </>
  );
}
