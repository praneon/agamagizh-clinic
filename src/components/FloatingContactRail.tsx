import { type ComponentType, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Phone,
  UserRound,
  X,
  Youtube,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { openChatPanel } from '../lib/chatPanel';
import { whatsappLink } from '../lib/whatsapp';

type ActionItem = {
  label: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  accentClass: string;
  liveBadge?: boolean;
};

export default function FloatingContactRail() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { contact, social } = siteConfig;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const actions: ActionItem[] = [
    {
      label: 'WhatsApp',
      href: whatsappLink('Hello Agamagizh, I would like to know more about your treatments.'),
      icon: MessageCircle,
      external: true,
      accentClass: 'bg-emerald-500 text-white',
    },
    {
      label: 'Chat with Us',
      onClick: () => openChatPanel(),
      icon: MessagesSquare,
      accentClass: 'bg-gradient-to-br from-primary-fixed to-primary text-on-primary ring-2 ring-white/40',
      liveBadge: true,
    },
    {
      label: 'Call',
      href: `tel:${contact.phoneE164}`,
      icon: Phone,
      accentClass: 'bg-primary text-on-primary',
    },
    ...(contact.email ? [{
      label: 'Email',
      href: `mailto:${contact.email}`,
      icon: Mail,
      accentClass: 'bg-secondary text-white',
    }] : []),
    {
      label: 'Map',
      href: contact.mapsUrl ?? undefined,
      icon: MapPin,
      external: true,
      accentClass: 'bg-tertiary text-white',
    },
    {
      label: 'Instagram',
      href: social.instagramUrl ?? undefined,
      icon: Instagram,
      external: true,
      accentClass: 'bg-[#E4405F] text-white',
    },
    {
      label: 'Facebook',
      href: social.facebookUrl ?? undefined,
      icon: Facebook,
      external: true,
      accentClass: 'bg-[#1877F2] text-white',
    },
    {
      label: 'YouTube',
      href: social.youtubeUrl ?? undefined,
      icon: Youtube,
      external: true,
      accentClass: 'bg-[#FF0000] text-white',
    },
    {
      label: 'Contact Us',
      href: whatsappLink('Hello Agamagizh, I would like to contact your care team.'),
      external: true,
      icon: UserRound,
      accentClass: 'bg-slate-800 text-white',
    },
  ].filter((item) => item.href || item.to || item.onClick);

  return (
    <div className="fixed bottom-6 right-4 z-50 sm:bottom-8 sm:right-6">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex flex-col items-end gap-2"
            >
              {actions.map((action, index) => {
                const Icon = action.icon;
                const content = (
                  <>
                    <span className="rounded-full bg-white/96 px-3 py-2 text-[11px] font-headline font-bold uppercase tracking-[0.18em] text-slate-700 shadow-[0_10px_25px_rgba(45,51,53,0.08)] backdrop-blur">
                      {action.label}
                    </span>
                    <span className="relative">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full shadow-[0_18px_40px_rgba(45,51,53,0.16)] transition-transform duration-300 hover:scale-105 ${action.accentClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      {action.liveBadge && (
                        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                        </span>
                      )}
                    </span>
                  </>
                );

                if (action.to) {
                  return (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.18, delay: index * 0.03 }}
                    >
                      <Link
                        to={action.to}
                        className="group flex items-center gap-3"
                        onClick={() => setIsOpen(false)}
                      >
                        {content}
                      </Link>
                    </motion.div>
                  );
                }

                if (action.onClick) {
                  return (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.18, delay: index * 0.03 }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          action.onClick?.();
                        }}
                        className="group flex items-center gap-3"
                      >
                        {content}
                      </button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.18, delay: index * 0.03 }}
                  >
                    <a
                      href={action.href}
                      target={action.external ? '_blank' : undefined}
                      rel={action.external ? 'noreferrer' : undefined}
                      className="group flex items-center gap-3"
                    >
                      {content}
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          aria-label={isOpen ? 'Close contact actions' : 'Open contact actions'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-[0_20px_45px_rgba(89,72,211,0.25)] ring-1 ring-primary/10 backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_55px_rgba(89,72,211,0.32)]"
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(129,114,254,0.25),transparent_60%)]" />
          {isOpen ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}
