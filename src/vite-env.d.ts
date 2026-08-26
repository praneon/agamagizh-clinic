interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Injected by the Chatwoot widget script embedded in index.html.
// Subset of the real window.$chatwoot API we actually call — see
// https://www.chatwoot.com/docs/product/channels/live-chat/sdk/setup
// (or app/javascript/entrypoints/sdk.js in the Chatwoot source) for the
// full surface.
interface Window {
  $chatwoot?: {
    baseUrl: string;
    websiteToken: string;
    toggle: (state?: 'open' | 'close') => void;
    setCustomAttributes: (attributes: Record<string, string>) => void;
  };
}
