import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { existsSync } from 'fs';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // load the index.html of the app
  const indexPath = join(__dirname, '../../web-ui/out/index.html');
  if (existsSync(indexPath)) {
    win.loadFile(indexPath);
  } else {
    win.loadURL('http://localhost:4200'); // fallback: dev mode
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
