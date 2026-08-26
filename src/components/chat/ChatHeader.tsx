import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-2.5">
        <span className="logo-glow">
          <img alt="Agamagizh" className="h-9 w-9 object-contain sm:h-11 sm:w-11" src="/Logo.svg" />
        </span>
        <div>
          <p className="font-headline text-[19px] font-bold uppercase leading-none tracking-[0.03em] text-on-surface">
            Agamagizh
          </p>
          <p className="mt-1 text-[11.5px] font-medium leading-none text-primary">
            Restoring Inner Happiness
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/[0.04] text-on-surface-variant transition-all duration-200 hover:scale-[1.03] hover:bg-primary/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <X className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>
    </div>
  );
}
