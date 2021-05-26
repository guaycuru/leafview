declare global {
  interface Window {
    myAPI: Sandbox;
  }
}

export interface Sandbox {
  mimecheck: (filepath: string) => Promise<boolean>;

  /** Merge the pull request sent by guaycuru */
  /** https://github.com/sprout2000/leafview/pull/228 */
  motioncheck: (filepath: string) => Promise<number>;

  motionAsDataURL: (filepath: string, motionStart: number) => Promise<string>;

  history: (filepath: string) => void;

  dirname: (filepath: string) => Promise<string>;

  readdir: (dirpath: string) => Promise<void | string[]>;

  moveToTrash: (filepath: string) => Promise<void>;

  openDialog: () => Promise<string | void | undefined>;

  updateTitle: (filepath: string) => Promise<void>;

  menuNext: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuNext: () => Electron.IpcRenderer;

  menuPrev: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuPrev: () => Electron.IpcRenderer;

  menuMotion: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuMotion: () => Electron.IpcRenderer;

  menuRemove: (listener: () => Promise<void>) => Electron.IpcRenderer;
  removeMenuRemove: () => Electron.IpcRenderer;

  menuOpen: (
    listener: (_e: Event, filepath: string) => Promise<void>
  ) => Electron.IpcRenderer;
  removeMenuOpen: () => Electron.IpcRenderer;
}
