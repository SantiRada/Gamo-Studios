import shortcuts from './shortcuts.json';

type ShortcutKeys = keyof typeof shortcuts;

export const sh = (key: ShortcutKeys): string => {
  return shortcuts[key] || key;
};
