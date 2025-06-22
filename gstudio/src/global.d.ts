// src/global.d.ts

export {};

declare global {
  interface Window {
    api: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      onOpenSettings: (callback: () => void) => void;
    };
  }
}
