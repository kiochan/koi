// live2dcubismcore-unsafe.d.ts
// Unofficial type definitions, intended for type hinting only. Not for reverse engineering.

export {};

declare global {
  /**
   * Global Live2DCubismCore object provided via <script> tag.
   * This is a minimal placeholder type for development.
   */
  const Live2DCubismCore: {
    Version?: {
      csmGetVersion?: () => number;
      csmGetLatestMocVersion?: () => number;
      csmGetMocVersion?: (moc: any, mocBytes: ArrayBuffer) => number;
    };
    Logging?: {
      csmSetLogFunction?: (handler: (msg: string) => void) => void;
    };
    Moc?: {
      fromArrayBuffer?: (buffer: ArrayBuffer) => any;
    };
    Model?: {
      fromMoc?: (moc: any) => any;
    };
    Memory?: {
      initializeAmountOfMemory?: (size: number) => void;
    };
    // Other properties or classes can be added as needed.
    [key: string]: any;
  };
}
