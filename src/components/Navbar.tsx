import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isElementPage = pathname.startsWith('/elements');
  const elementLinks = [
    { name: 'Space', path: '/elements/space' },
    { name: 'Air', path: '/elements/air' },
    { name: 'Fire', path: '/elements/fire' },
    { name: 'Water', path: '/elements/water' },
    { name: 'Earth', path: '/elements/earth' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/resources') return pathname.startsWith('/resources') || pathname.startsWith('/elements');
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-lg border-b shadow-sm bg-slate-50/60 dark:bg-slate-900/60 border-white/20 dark:border-slate-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-[48px_1fr_48px] items-center lg:flex lg:justify-between lg:items-center">
        <div className="h-12 w-12 lg:hidden" />
        <div className="flex justify-center lg:flex-none lg:justify-start">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter font-headline inline-flex items-center gap-1.5 shrink-0 text-slate-800 dark:text-slate-100"
          >
            <span className="logo-glow">
              <img
                alt="Agamagizh Logo"
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
                src="/Logo.svg"
              />
            </span>
            <span className="font-bold text-[1.45rem] leading-none tracking-[0.04em] uppercase sm:text-[1.7rem] lg:text-2xl text-slate-800 dark:text-slate-100">AGAMAGIZH</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {(isElementPage ? elementLinks : navLinks).map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`relative transition-colors font-headline font-medium ${
                isElementPage ? 'tracking-[0.18em] text-[11px] uppercase' : 'tracking-wide text-sm'
              } ${
                isLinkActive(link.path)
                  ? 'text-[#5948d3] dark:text-[#a89cff]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-[#5948d3]'
              }`}
            >
              {link.name}
              {isElementPage && isLinkActive(link.path) && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#5948d3]" />
              )}
            </Link>
          ))}
          <Link to="/book" className="bg-[#5948d3] text-[#fcf7ff] px-6 py-2.5 rounded-full font-headline font-medium text-sm hover:bg-[#4d39c7] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Book Consultation
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="flex justify-end lg:hidden">
          <button 
            className="p-2 flex items-center justify-center text-slate-800 dark:text-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl border-b overflow-hidden bg-white/95 dark:bg-slate-900/95 border-white/20"
          >
            <div className="flex flex-col p-8 space-y-6 items-center text-center">
              {(isElementPage ? elementLinks : navLinks).map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`font-headline font-semibold text-xl w-full py-2 ${
                    isLinkActive(link.path)
                      ? 'text-[#5948d3] dark:text-[#a89cff]'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/book" 
                className="bg-[#5948d3] text-white text-center py-4 px-8 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 mt-4 w-full max-w-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
