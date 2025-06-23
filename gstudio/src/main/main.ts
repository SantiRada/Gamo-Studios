import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron';
import fs from 'fs';
import path from 'path';
import shortcuts from './shortcuts/shortcuts.json';
import { sh } from "./shortcuts/s6t";
import { handleShortcut } from './shortcuts/s6tFunc';

// ✅ declarar tipo local
type FileItem = {
  name: string;
  path: string;
  isDirectory: boolean;
  children?: FileItem[];
};

const readRecursive = (dir: string): FileItem[] => {
  return fs.readdirSync(dir)
    .map((name: string) => {
      if (name.startsWith('.') || ['node_modules', '.git'].includes(name)) return null;

      const fullPath = path.join(dir, name);
      const stats = fs.lstatSync(fullPath);
      const isDirectory = stats.isDirectory();

      return {
        name,
        path: fullPath,
        isDirectory,
        children: isDirectory ? readRecursive(fullPath) : undefined,
      };
    })
    .filter(Boolean) as FileItem[];
};

ipcMain.handle('read-folder', async (_event, folderPath: string) => {
  return readRecursive(folderPath);
});
ipcMain.handle('check-folder', (_, folderPath: string) => {
  return fs.existsSync(folderPath);
});
ipcMain.handle('read-file', async (_event, filePath: string) => {
  return fs.readFileSync(filePath, 'utf-8');
});

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
    if (key) {
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