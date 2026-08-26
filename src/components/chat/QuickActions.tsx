import { type ComponentType, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarCheck, PersonStanding, Leaf, MessageCircleQuestion, ChevronRight } from 'lucide-react';
import type { ChatTopic } from '../../lib/chatPanel';

interface QuickActionsProps {
  onClose: () => void;
  onOpenChat: (topic: ChatTopic) => void;
}

interface QuickAction {
  label: string;
  icon: ComponentType<{ className?: string }>;
  onClick: () => void;
}

export default function QuickActions({ onClose, onOpenChat }: QuickActionsProps) {
  const navigate = useNavigate();

  const goToBooking = useCallback(() => {
    onClose();
    navigate('/book');
  }, [navigate, onClose]);

  const actions: QuickAction[] = [
    { label: 'Book Consultation', icon: CalendarCheck, onClick: goToBooking },
    { label: 'Yoga Session', icon: PersonStanding, onClick: () => onOpenChat('yoga') },
    { label: 'Naturopathy', icon: Leaf, onClick: () => onOpenChat('naturopathy') },
    { label: 'Ask a Question', icon: MessageCircleQuestion, onClick: () => onOpenChat('general') },
  ];

  return (
    <div className="grid grid-cols-2 gap-2.5 max-[360px]:grid-cols-1">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={action.onClick}
          className="group flex min-h-[58px] items-center gap-2.5 rounded-[14px] border border-primary/[0.13] bg-white/72 px-3 py-2.5 text-left shadow-[0_4px_14px_rgba(50,40,90,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_22px_rgba(50,40,90,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
            <action.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1 text-[12.5px] font-bold leading-tight text-on-surface">
            {action.label}
          </span>
          <ChevronRight
            className="h-3.5 w-3.5 shrink-0 text-primary/50 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
}
