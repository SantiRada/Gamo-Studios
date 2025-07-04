const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  minimize: () => ipcRenderer.send('minimize'),
  maximize: () => ipcRenderer.send('maximize'),
  close: () => ipcRenderer.send('close'),
  onOpenSettings: (callback) => ipcRenderer.on('open-settings', callback)
});

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    on: (channel, func) => ipcRenderer.on(channel, func),
    removeListener: (channel, func) => ipcRenderer.removeListener(channel, func),
    send: (channel, data) => ipcRenderer.send(channel, data),
    invoke: (channel, data) => ipcRenderer.invoke(channel, data),
    readFile: (filePath) => ipcRenderer.invoke('read-file', filePath)
  }
});