import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const layoutMenu : MenuItem = {
      label: t('layouts'),
      submenu: [
        {
          label: t('applyLayout'),
          submenu: [
            {
              label: t('layoutUI'),
              accelerator: sh('layoutUI'),
              click: () => {}
            },
            {
              label: t('layoutArt'),
              accelerator: sh('layoutArt'),
              click: () => {}
            },
            {
              label: t('layoutAudio'),
              accelerator: sh('layoutAudio'),
              click: () => {}
            },
            {
              label: t('layoutSound'),
              accelerator: sh('layoutSound'),
              click: () => {}
            },
            {
              label: t('layoutDialog'),
              accelerator: sh('layoutDialog'),
              click: () => {}
            },
            {
              label: t('layoutLang'),
              accelerator: sh('layoutLang'),
              click: () => {}
            },
            {
              label: t('layoutScene'),
              accelerator: sh('layoutScene'),
              click: () => {}
            }
          ]
        },
        {
          label: t('saveCustomLayout'),
          accelerator: sh('saveCustomLayout'),
          click: () => {}
        },
        {
          label: t('loadCustomLayout'),
          accelerator: sh('loadCustomLayout'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('resetLayout'),
          accelerator: sh('resetLayout'),
          click: () => {}
        }
    ]
};