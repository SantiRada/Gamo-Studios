export function getIconTheme(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('iconTheme') || 'classic';
  }
  return 'classic';
}

const defaultIcon = getIconPath('file');

function getIconPath(name: string): string {
  const theme = getIconTheme();
  const relativePath = `/icon-theme/${theme}/${name}.svg`;

  return relativePath;
}

export const Icons: Record<string, string> = new Proxy({}, {
  get: (_, prop: string) => {
    if (prop.includes('.')) {
      const endIcon = prop.split('.').slice(-1)[0];
      return getIconPath(endIcon) || defaultIcon;
    }
    if (prop === 'logo') return '/icon.png';
    return getIconPath(prop) || defaultIcon;
  }
});