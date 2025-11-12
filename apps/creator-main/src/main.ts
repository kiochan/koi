import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { app, BrowserWindow } from "electron";

const isDev = () => process.env.NODE_ENV === "development";

function getWebUiPath(scope: "dist" | "src" | "bin", file: string): string {
  const webUiDirname = "creator-web";
  switch (scope) {
    case "dist":
      return join(__dirname, `../../${webUiDirname}/dist`, file);
    case "src":
      return join(__dirname, `../../${webUiDirname}/dist`, file);
    case "bin":
      return join(__dirname, webUiDirname, file);
    default:
      throw new Error(`Invalid scope: ${scope}`);
  }
}

function createWindow() {
  const preloadScriptPathBin = join(__dirname, "creator-preload/preload.js");
  const preloadScriptPathDev = join(__dirname, "../../creator-preload/dev.js");

  const preloadScriptPathDevBuild = join(
    __dirname,
    "../../creator-preload/dist/preload.js",
  );

  let preloadScriptPath: string | undefined;

  if (existsSync(preloadScriptPathBin)) {
    preloadScriptPath = preloadScriptPathBin;
  } else if (existsSync(preloadScriptPathDevBuild)) {
    preloadScriptPath = preloadScriptPathDevBuild;
  } else if (existsSync(preloadScriptPathDev)) {
    preloadScriptPath = preloadScriptPathDev;
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
    console.log("win.loadURL:", "http://localhost:3040");
    win.loadURL("http://localhost:3040");
  } else if (existsSync(getWebUiPath("dist", "index.html"))) {
    console.log("running in dist mode");
    console.log("win.loadURL:", getWebUiPath("dist", "index.html"));
    win.loadURL(pathToFileURL(getWebUiPath("dist", "index.html")).toString());
  } else if (existsSync(getWebUiPath("src", "index.html"))) {
    console.log("running in source mode");
    console.log("win.loadURL:", getWebUiPath("src", "index.html"));
    win.loadURL(pathToFileURL(getWebUiPath("src", "index.html")).toString());
  } else if (existsSync(getWebUiPath("bin", "index.html"))) {
    console.log("running in release mode");
    console.log("win.loadURL:", getWebUiPath("bin", "index.html"));
    win.loadURL(pathToFileURL(getWebUiPath("bin", "index.html")).toString());
  } else {
    console.error("No UI found.");
    app.quit();
  }
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
