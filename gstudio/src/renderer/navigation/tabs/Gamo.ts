import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const gamoMenu : MenuItem = {
      label: t('engine'),
      submenu: [
        {
          label: t('runGame'),
          accelerator: sh('runGame'),
          click: () => {}
        },
        {
          label: t('testGame'),
          accelerator: sh('testGame'),
          click: () => {}
        },
        {
          label: t('buildGame'),
          accelerator: sh('buildGame'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('validateProject'),
          accelerator: sh('validateProject'),
          click: () => {}
        },
        {
          label: t('clearBuildCache'),
          accelerator: sh('clearBuildCache'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('openConsole'),
          accelerator: sh('openConsole'),
          click: () => {}
        }
    ]
};