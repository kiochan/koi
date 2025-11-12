import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  sendMessage: (message: string) => {
    ipcRenderer.send("from-renderer", message);
  },
  onMessage: (callback: (data: string) => void) => {
    ipcRenderer.on("from-main", (_, data: string) => callback(data));
  },
});
