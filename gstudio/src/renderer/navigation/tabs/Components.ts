import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const componentsMenu : MenuItem = {
      label: t('components'),
      submenu: [
        {
          label: t('openComponentManager'),
          click: () => {}
        },
        {
          label: t('replaceComponent'),
          submenu: [
            {
              label: 'Renderer (OpenGL)',
              click: () => {}
            },
            {
              label: 'Physics Engine',
              click: () => {}
            },
            {
              label: 'Audio Player',
              click: () => {}
            },
            {
              label: 'Input Handler',
              click: () => {}
            },
            {
              label: t('customComponent'),
              click: () => {}
            }
          ]
        },
        { type: 'separator' },
        {
          label: t('installDependency'),
          accelerator: sh('installDependency'),
          click: () => {}
        },
        {
          label: t('uninstallDependency'),
          accelerator: sh('uninstallDependency'),
          click: () => {}
        },
        {
          label: t('dependenciesStore'),
          accelerator: sh('dependenciesStore'),
          click: () => {}
        },
        {
          label: t('viewInstalledDeps'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('resetComponents'),
          click: () => {}
        }
    ]
};