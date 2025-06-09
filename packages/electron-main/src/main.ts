import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { pathToFileURL } from 'url';
import { existsSync } from 'fs';

const isDev = () => process.env.NODE_ENV === 'development';

function getWebUiPath(scope: 'prod' | 'bin', file: string): string {
  const webUiDirname = 'web-ui';
  switch (scope) {
    case 'prod':
      return join(__dirname, `../../${webUiDirname}/out`, file);
    case 'bin':
      return join(__dirname, webUiDirname, file);
    default:
      throw new Error(`Invalid scope: ${scope}`);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  console.log(
    "getWebUiPath('prod', 'index.html')",
    getWebUiPath('prod', 'index.html')
  );

  // load the index.html of the app
  if (isDev()) {
    win.loadURL('http://localhost:3000');
  } else if (existsSync(getWebUiPath('prod', 'index.html'))) {
    win.loadURL(pathToFileURL(getWebUiPath('prod', 'index.html')).toString());
  } else if (existsSync(getWebUiPath('bin', 'index.html'))) {
    win.loadURL(pathToFileURL(getWebUiPath('bin', 'index.html')).toString());
  } else {
    console.error('No UI found.');
    app.quit();
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
