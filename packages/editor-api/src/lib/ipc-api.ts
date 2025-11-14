export interface RendererToMainAPI {
  'window:minimize': void;
  'window:maximize': void;
  'window:close': void;
}

export interface MainToRendererEvents {
  'update:available': { version: string };
  'file:opened': { path: string; content: string };
}
