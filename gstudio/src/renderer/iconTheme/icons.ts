function getIconTheme(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('iconTheme') || 'classic';
  }
  return 'classic';
}

function getIconPath(name: string): string {
  const theme = getIconTheme();
  return `/icon-theme/${theme}/${name}.svg`;
}

const defaultIcon = getIconPath('file');

export const Icons: Record<string, string> = new Proxy({}, {
  get: (_, prop: string) => {
    if (prop === 'logo') return '/icon.png';
    return getIconPath(prop) || defaultIcon;
  }
});
