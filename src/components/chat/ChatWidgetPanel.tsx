import { useEffect, useState } from 'react';
import { fetchChatAvailability } from '../../lib/api';
import { onOpenChatPanel, type ChatTopic } from '../../lib/chatPanel';
import ChatHeader from './ChatHeader';
import ChatGreeting from './ChatGreeting';
import FiveElementsVisual from './FiveElementsVisual';
import QuickActions from './QuickActions';
import AvailabilityCard from './AvailabilityCard';
import ChatFooter from './ChatFooter';

const TOPIC_ATTRIBUTES: Record<ChatTopic, string> = {
  yoga: 'Yoga Session',
  naturopathy: 'Naturopathy Consultation',
  general: 'General Question',
};

// Send the visitor straight to the name/phone pre-chat form instead of
// Chatwoot's own redundant "Home" screen (which just shows another
// greeting + another "Start Conversation" button before the form appears).
//
// Note: Chatwoot's `cw_conversation` cookie is NOT a reliable "this visitor
// already has a conversation" signal — it's minted the instant the widget
// iframe boots for *any* visitor, before they've sent a single message, so
// it can't be used to decide between the form and an existing thread. The
// one state we *can* read safely (same-origin) is the widget iframe's own
// current hash: if this page session has already moved the visitor past
// the form (into `#/messages`, e.g. right after they submitted it) or is
// already sitting on the form, leave it alone rather than yanking them
// back — only a fresh/untouched iframe gets redirected. A returning
// visitor with real conversation history can still resume it via
// Chatwoot's own persistent launcher bubble, which we never touch here.
function jumpToChatwootRoute() {
  const iframe = document.getElementById('chatwoot_live_chat_widget') as HTMLIFrameElement | null;
  if (!iframe) return;

  const currentSrc = iframe.getAttribute('src') ?? '';
  if (currentSrc.includes('#/messages') || currentSrc.includes('#/prechat-form')) return;

  // Keep the existing origin/path/query (which may already carry a
  // cw_conversation param) and only change the hash — that keeps this a
  // same-document fragment navigation inside the iframe's Vue Router
  // instead of a full reload of the widget.
  const base = currentSrc.split('#')[0];
  if (!base) return;
  iframe.setAttribute('src', `${base}#/prechat-form`);
}

export default function ChatWidgetPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => onOpenChatPanel(() => setIsOpen(true)), []);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    fetchChatAvailability().then((result) => {
      if (!cancelled) setOnline(result?.online ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const close = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 180);
  };

  // Hands off to the real Chatwoot conversation. The widget SDK has no
  // public API to pre-type text into its compose box, so instead we tag the
  // contact with what they came in for — real, staff-visible in the
  // dashboard sidebar — rather than faking a prefilled message that isn't
  // actually there.
  //
  // Chatwoot's own "Start Conversation" click normally lands on ITS home
  // screen (its own greeting + its own "Start Conversation" button) before
  // the actual name/phone pre-chat form appears — a redundant second step
  // once our panel has already greeted the visitor. The widget is a Vue
  // SPA using hash-based routing inside its iframe (`#/prechat-form`,
  // `#/messages`, ...), so we can jump straight to the right screen by
  // rewriting that iframe's hash ourselves — same trick Chatwoot's own
  // in-widget links use, no server-side change needed.
  const startConversation = (topic: ChatTopic = 'general') => {
    window.$chatwoot?.setCustomAttributes({ requested_topic: TOPIC_ATTRIBUTES[topic] });
    jumpToChatwootRoute();
    window.$chatwoot?.toggle('open');
    close();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Agamagizh chat"
      className="chat-panel-bg fixed bottom-[10px] right-[10px] z-[9999] flex h-[calc(100dvh-20px)] w-[calc(100vw-20px)] flex-col overflow-hidden rounded-[20px] border border-primary/[0.08] shadow-[0_24px_70px_rgba(45,35,95,0.16),0_4px_18px_rgba(45,35,95,0.06)] motion-safe:[animation:chat-panel-in_260ms_ease-out] sm:bottom-5 sm:right-5 sm:h-[min(760px,calc(100vh-32px))] sm:w-[min(420px,calc(100vw-24px))] sm:rounded-[26px]"
      style={{
        opacity: isClosing ? 0 : undefined,
        transform: isClosing ? 'translateY(8px) scale(0.985)' : undefined,
        transition: isClosing ? 'opacity 180ms ease, transform 180ms ease' : undefined,
      }}
    >
      <div className="chat-scroll flex-1 overflow-y-auto p-6" style={{ overscrollBehavior: 'contain' }}>
        <ChatHeader onClose={close} />

        <div className="mt-6">
          <ChatGreeting />
        </div>

        <div className="mt-[18px]">
          <FiveElementsVisual />
        </div>

        <div className="mt-5">
          <QuickActions onClose={close} onOpenChat={startConversation} />
        </div>

        <div className="mt-[18px]">
          <AvailabilityCard online={online} onStart={() => startConversation('general')} />
        </div>

        <div className="mt-4">
          <ChatFooter />
        </div>
      </div>
    </div>
  );
}
