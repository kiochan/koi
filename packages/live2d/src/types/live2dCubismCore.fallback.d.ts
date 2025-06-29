// This file provides unofficial type declarations for Live2DCubismCore.
// It is intended solely for development-time type safety and editor hints.
// This file does not contain any implementation or reverse-engineered details.
// Do not bundle this file with production builds.

declare namespace Live2DCubismCore {
  type csmParameterType = number;
  type csmLogFunction = (message: string) => void;

  class Logging {
    static csmGetLogFunction: () => (msg: string) => void;
    static csmSetLogFunction: (cb: (msg: string) => void) => void;
    private constructor();
  }

  class Memory {
    static initializeAmountOfMemory: (size: number) => void;
    private constructor();
  }

  class Model {
    canvasinfo: CanvasInfo;
    drawables: Drawables;
    parameters: Parameters;
    parts: Parts;
    release: () => void;
    update: () => void;
    static fromMoc: (source: Moc) => Model;
    private constructor();
  }

  class Moc {
    _release: () => void;
    static fromArrayBuffer: (data: ArrayBuffer) => Moc;
    hasMocConsistency: (buf: ArrayBuffer) => number;
    private constructor();
  }

  class Parameters {
    count: number;
    defaultValues: Float32Array;
    ids: Array<string>;
    keyCounts: Int32Array;
    keyValues: Array<Float32Array>;
    maximumValues: Float32Array;
    minimumValues: Float32Array;
    repeats: Int32Array;
    types: Int32Array;
    values: Float32Array;
    constructor(ref: number);
  }

  class Parts {
    count: number;
    ids: Array<string>;
    opacities: Float32Array;
    parentIndices: Int32Array;
    constructor(ref: number);
  }

  class Utils {
    static hasBlendAdditiveBit: (val: number) => boolean;
    static hasBlendColorDidChangeBit: (val: number) => boolean;
    static hasBlendMultiplicativeBit: (val: number) => boolean;
    static hasDrawOrderDidChangeBit: (val: number) => boolean;
    static hasIsDoubleSidedBit: (val: number) => boolean;
    static hasIsInvertedMaskBit: (val: number) => boolean;
    static hasIsVisibleBit: (val: number) => boolean;
    static hasOpacityDidChangeBit: (val: number) => boolean;
    static hasRenderOrderDidChangeBit: (val: number) => boolean;
    static hasVertexPositionsDidChangeBit: (val: number) => boolean;
    static hasVisibilityDidChangeBit: (val: number) => boolean;
  }

  class Version {
    static csmGetLatestMocVersion: () => number;
    static csmGetMocVersion: (ref: Moc, data: ArrayBuffer) => number;
    static csmGetVersion: () => number;
    private constructor();
  }
}
