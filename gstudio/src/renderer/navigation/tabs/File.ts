import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const fileMenu : MenuItem = {
      label: t('file'),
      submenu: [
        {
          label: t('newFile'),
          accelerator: sh('newFile'),
          click: () => {}
        },
        {
          label: t('newProject'),
          accelerator: sh('newProject'),
          click: () => {}
        },
        {
          label: t('openProject'), // 
          accelerator: sh('openProject'),
          click: () => {}
        },
        {
          label: t('openRecent'),
          submenu: []
        },
        { type: 'separator' },
        {
          label: t('save'), 
          accelerator: sh('save'),
          click: () => {}
        },
        {
          label: t('saveAs'),
          accelerator: sh('saveAs'),
          click: () => {}
        },
        {
          label: t('saveAll'),
          accelerator: sh('saveAll'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('importFile'),
          accelerator: sh('importFile'),
          click: () => {}
        },
        {
          label: t('exportProject'),
          accelerator: sh('exportProject'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('projectSettings'),
          accelerator: sh('projectSettings'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('closeProject'),
          accelerator: sh('closeProject'),
          click: () => {}
        },
        {
          label: t('exit'),
          accelerator: sh('exit'),
          role: 'quit'
        }
    ]
};