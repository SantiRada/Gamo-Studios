import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const helpMenu : MenuItem = {
      label: t('help'),
      submenu: [
        {
          label: t('quickStart'),
          accelerator: sh('quickStart'),
          click: () => {}
        },
        {
          label: t('openDocs'),
          accelerator: sh('openDocs'),
          click: () => { require('electron').shell.openExternal('https://gamolang.org/docs'); }
        },
        {
          label: t('openCheatsheet'),
          accelerator: sh('openCheatsheet'),
          click: () => { require('electron').shell.openExternal('https://gamolang.org/shortcuts'); }
        },
        {
          label: t('openCommunity'),
          accelerator: sh('openCommunity'),
          click: () => { require('electron').shell.openExternal('https://discord.gg/gamo'); }
        },
        { type: 'separator' },
        {
          label: t('reportBug'),
          accelerator: sh('reportBug'),
          click: () => { require('electron').shell.openExternal('https://github.com/gamo-lang/issues'); }
        },
        {
          label: t('sendFeedback'),
          accelerator: sh('sendFeedback'),
          click: () => { require('electron').shell.openExternal('mailto:contacto@gamolang.org'); }
        },
        { type: 'separator' },
        {
          label: t('aboutGStudio'),
          accelerator: sh('aboutGStudio'),
          click: () => {}
        }
    ]
};