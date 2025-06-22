import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const viewMenu : MenuItem = {
      label: t('view'),
      submenu: [
        {
          label: t('toggleSidebar'),
          accelerator: sh('toggleSidebar'),
          click: () => {}
        },
        {
          label: t('toggleConsole'),
          accelerator: sh('toggleConsole'),
          click: () => {}
        },
        {
          label: t('togglePreview'),
          accelerator: sh('togglePreview'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('zenMode'),
          accelerator: sh('zenMode'),
          click: () => {}
        },
        {
          label: t('previewSections'),
          submenu: [
            {
              label: 'UI',
              accelerator: sh('previewUI'),
              click: () => {}
            },
            {
              label: 'Art',
              accelerator: sh('previewArt'),
              click: () => {}
            },
            {
              label: 'Audio',
              accelerator: sh('previewAudio'),
              click: () => {}
            },
            {
              label: 'Sound',
              accelerator: sh('previewSound'),
              click: () => {}
            },
            {
              label: 'Dialog',
              accelerator: sh('previewDialog'),
              click: () => {}
            },
            {
              label: 'Lang',
              accelerator: sh('previewLang'),
              click: () => {}
            },
            {
              label: 'Scene',
              accelerator: sh('previewScene'),
              click: () => {}
            }
          ]
        },
        {
          label: t('openNewWindow'),
          submenu: [
            {
              label: t('newWindowLeft'),
              accelerator: sh('newWindowLeft'),
              click: () => {}
            },
            {
              label: t('newWindowRight'),
              accelerator: sh('newWindowRight'),
              click: () => {}
            }
          ]
        },
        { type: 'separator' },
        {
          label: t('splitEditor'),
          accelerator: sh('splitEditor'),
          click: () => {}
        },
        {
          label: t('fullscreen'),
          role: 'togglefullscreen',
          accelerator: sh('fullscreen')
        },
        { type: 'separator' },
        {
          label: t('reload'),
          role: 'reload',
          accelerator: sh('reload')
        },
        {
          label: t('devTools'),
          role: 'toggleDevTools',
          accelerator: sh('devTools')
        }
    ]
};