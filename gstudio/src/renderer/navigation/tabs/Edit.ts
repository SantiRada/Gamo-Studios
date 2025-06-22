import { t } from "../../../main/translations/i18n";
import { sh } from "../../../main/shortcuts/s6t";
import { MenuItem } from "../ShowTab";

export const editMenu : MenuItem = {
      label: t('edit'),
      submenu: [
        { label: t('undo'), role: 'undo', accelerator: sh('undo') },
        { label: t('redo'), role: 'redo', accelerator: sh('redo') },
        { type: 'separator' },
        { label: t('cut'), role: 'cut', accelerator: sh('cut') },
        { label: t('copy'), role: 'copy', accelerator: sh('copy') },
        { label: t('paste'), role: 'paste', accelerator: sh('paste') },
        { label: t('delete'), role: 'delete', accelerator: sh('delete') },
        { type: 'separator' },
        { label: t('selectAll'), role: 'selectAll', accelerator: sh('selectAll') },
        { type: 'separator' },
        {
          label: t('find'),
          accelerator: sh('find'),
          click: () => {}
        },
        {
          label: t('replace'),
          accelerator: sh('replace'),
          click: () => {}
        }
    ]
};