// Tiny pub/sub so any trigger on the site (the floating rail, a homepage
// CTA, a quick-action card) can open the one shared <ChatWidgetPanel />
// mounted in Layout, without threading state through props.
export type ChatTopic = 'yoga' | 'naturopathy' | 'general';

type Listener = (topic: ChatTopic) => void;

let listeners: Listener[] = [];

export function openChatPanel(topic: ChatTopic = 'general', attributes?: Record<string, string>) {
  if (attributes) {
    const applyAttributes = (attempt = 0) => {
      if (window.$chatwoot?.hasLoaded) {
        window.$chatwoot.setCustomAttributes(attributes);
        return;
      }
      if (attempt < 40) window.setTimeout(() => applyAttributes(attempt + 1), 100);
    };
    applyAttributes();
  }
  listeners.forEach((listener) => listener(topic));
}

export function onOpenChatPanel(listener: Listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
