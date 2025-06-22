import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron';
import shortcuts from './shortcuts/shortcuts.json';
import { sh } from "./shortcuts/s6t";
import path from 'path';
import { handleShortcut } from './shortcuts/s6tFunc';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '../../preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL('http://localhost:5173');

  ipcMain.on('minimize', () => win.minimize());
  ipcMain.on('maximize', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });
  ipcMain.on('close', () => win.close());

  return win;
}

app.whenReady().then(() => {
  const win = createWindow();

  Object.keys(shortcuts).forEach((key) => {
    if(key) { 
      try {
        const shortcut = sh(key as keyof typeof shortcuts);

        if (!shortcut || typeof shortcut !== 'string' || shortcut.trim() === '') {
          console.warn(`Shortcut ignorado por formato no válido: ${key}`);
          return;
        }

        const success = globalShortcut.register(shortcut, () => {
          try {
            handleShortcut(key, win);
          } catch (err) {
            console.error(`Error al ejecutar el shortcut '${key}':`, err);
          }
        });

        if (!success) {
          console.warn(`No se pudo registrar: ${key} (${shortcut})`);
        }

      } catch (err) {
        console.warn(`Error al registrar shortcut '${key}':`, err);
      }
    }
  });
});

app.on('will-quit', () => { globalShortcut.unregisterAll(); });