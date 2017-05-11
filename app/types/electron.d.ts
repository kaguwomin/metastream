declare module Electron {
  export interface BrowserWindow {
    openDevTools(): void;
    toggleDevTools(): void;
    inspectElement(x: number, y: number): void;
  }

  export interface MenuItemOptions {
    selector?: string;
  }
}

interface Window {
  // Runtime 'require' preventing webpack from resolving the module
  require: NodeRequireFunction;
}