import { BrowserWindow } from 'electron';
import { dialog } from 'electron';
import fs from 'fs';
import path from 'path';

export function handleShortcut(key: string, win: BrowserWindow) {
  switch (key) {
    case 'openProject':
      dialog.showOpenDialog(win, {
        properties: ['openDirectory']
      }).then(result => {
        if (!result.canceled && result.filePaths.length > 0) {
          const selectedPath = result.filePaths[0];
          win.webContents.send('project-folder-selected', selectedPath);
        }
      });
      break;
    case 'projectSettings':
        console.log("Project Settings");
        win.webContents.send('open-settings');
      break;
    case 'exit':
      process.exit();
      break;
    case 'toggleSidebar':
      win.webContents.send('toggle-sidebar');
      break;
    case 'toggleConsole':
      win.webContents.send('toggle-console');
      console.log('Toggle console');
      break;
      case 'fullConsole':
        win.webContents.send('full-console');
        console.log('Full console');
      break;
    case 'togglePreview':
      win.webContents.send('toggle-preview');
      break;

    default:
      console.warn(`Shortcut sin función asignada: ${key}`);
  }
}