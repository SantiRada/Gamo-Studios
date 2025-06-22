import { BrowserWindow } from 'electron';

export function handleShortcut(key: string, win: BrowserWindow) {
  switch (key) {
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