import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

const gitConnect = false;

export const versionControlMenu : MenuItem = {
      label: t('versionControl'),
      submenu: [
        {
          label: t('connectGit'),
          accelerator: sh('connectGit'),
          click: () => {}
        },
        { type: 'separator' },
        {
          label: t('commitChanges'),
          enabled: gitConnect,
          accelerator: sh('commitChanges'),
          click: () => {}
        },
        {
          label: t('pushChanges'),
          enabled: gitConnect,
          accelerator: sh('pushChanges'),
          click: () => {}
        },
        {
          label: t('pullChanges'),
          enabled: gitConnect,
          accelerator: sh('pullChanges'),
          click: () => {}
        },
        {
          label: t('openBranches'),
          enabled: gitConnect,
          click: () => {}
        },
        {
          label: t('viewLog'),
          enabled: gitConnect,
          click: () => {}
        },
        {
          label: t('openRepoInExplorer'),
          enabled: gitConnect,
          click: () => {}
        }
    ]
};