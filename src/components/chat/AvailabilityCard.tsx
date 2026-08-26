import { ChevronRight, Leaf } from 'lucide-react';

interface AvailabilityCardProps {
  online: boolean | null; // null = unknown (bridge not configured/reachable)
  onStart: () => void;
}

export default function AvailabilityCard({ online, onStart }: AvailabilityCardProps) {
  const isOnline = online === true;
  const title = online === null ? "We'll be right with you" : isOnline ? "We're online right now" : 'We are away at the moment';

  return (
    <div className="rounded-[18px] border border-black/[0.07] bg-white/88 p-5 shadow-[0_5px_15px_rgba(30,30,50,0.06),0_1px_3px_rgba(30,30,50,0.04)]">
      <div className="flex items-start gap-3">
        <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
          {isOnline && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{
              background: isOnline ? '#9BCB7C' : '#C7C9D1',
              boxShadow: isOnline ? '0 0 0 7px rgba(155,203,124,0.15)' : undefined,
            }}
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[16px] font-semibold text-on-surface">{title}</p>
          <p className="text-[14px] text-on-surface-variant">Typically replies in a few minutes</p>
        </div>
        <Leaf className="mt-0.5 hidden h-8 w-8 shrink-0 text-tertiary/25 min-[381px]:block" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-4 flex w-full items-center justify-between rounded-xl bg-[linear-gradient(90deg,rgba(95,73,220,0.05),rgba(95,73,220,0.09))] px-4 py-3 text-[14px] font-bold text-primary transition-colors duration-200 hover:bg-[rgba(95,73,220,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        Start Conversation
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
