import { app, BrowserWindow, dialog } from 'electron';
import { join } from 'path';
import { pathToFileURL } from 'url';
import { existsSync } from 'fs';

const isDev = () => process.env.NODE_ENV === 'development';

function getWebUiPath(scope: 'prod' | 'bin', file: string): string {
  const webUiDirname = 'editor-web-ui';
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
  const preloadScriptPathBin = join(__dirname, 'editor-preload/preload.js');
  const preloadScriptPathDevBuild = join(
    __dirname,
    '../../editor-preload/dist/preload.js'
  );

  let preloadScriptPath: string | undefined;

  if (existsSync(preloadScriptPathBin)) {
    preloadScriptPath = preloadScriptPathBin;
  } else if (existsSync(preloadScriptPathDevBuild)) {
    preloadScriptPath = preloadScriptPathDevBuild;
  } else {
    preloadScriptPath = undefined;
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: preloadScriptPath,
    },
  });

  // load the index.html of the app
  if (isDev()) {
    win.loadURL('http://localhost:3000');
  } else if (existsSync(getWebUiPath('prod', 'index.html'))) {
    win.loadURL(pathToFileURL(getWebUiPath('prod', 'index.html')).toString());
  } else if (existsSync(getWebUiPath('bin', 'index.html'))) {
    win.loadURL(pathToFileURL(getWebUiPath('bin', 'index.html')).toString());
  } else {
    dialog.showMessageBox({
      type: 'error',
      title: 'Error',
      message: 'Cannot create main window',
      detail: 'Main entry file could not be located.',
      buttons: ['Terminate'],
    });
    app.quit();
  }

  win.webContents.on(
    'did-fail-load',
    (event, errorCode, errorDescription, validatedURL) => {
      if (existsSync(getWebUiPath('prod', '404.html'))) {
        win.loadURL(pathToFileURL(getWebUiPath('prod', '404.html')).toString());
      } else if (existsSync(getWebUiPath('bin', 'index.html'))) {
        win.loadURL(pathToFileURL(getWebUiPath('bin', '404.html')).toString());
      } else {
        dialog.showMessageBox({
          type: 'error',
          title: 'Error',
          message: 'Invalid path access',
          detail: 'Attempted to access path outside allowed directory.',
          buttons: ['Terminate'],
        });
        app.quit();
      }
    }
  );
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
