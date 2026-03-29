import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isElementPage = pathname.startsWith('/elements');

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
      className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b shadow-sm ${
        isElementPage
          ? 'bg-slate-500/65 border-white/20 text-slate-100'
          : 'bg-slate-50/60 dark:bg-slate-900/60 border-white/20 dark:border-slate-800/20'
      }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto relative">
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link
            to="/"
            className={`text-2xl font-bold tracking-tighter font-headline flex items-center gap-2 shrink-0 ${
              isElementPage ? 'text-slate-100' : 'text-slate-800 dark:text-slate-100'
            }`}
          >
            <span className="logo-glow">
              <img
                alt="Agamagizh Logo"
                className="w-auto object-contain h-14"
                src="https://lh3.googleusercontent.com/aida/ADBb0ui5G630mJtDya06MNYOgovPWloFZqrTOCpXDcNnqFkdGqYDnmDvpluCnmCaVwSnlDcZqpFXFCrLtHg2R6K3rSXGu6O2Ib2V1oV7piPcLq5qdFzD6Gj20pI2-k5O1rCSt2Bpt9cmgC1XC6wHlWLvcO-1C-aDEd375yvyMmEcgy-awThijo7bpQe_KvdG-iUoquNboFUn8curOkAi-lcIKHfDPrByp0N1J1CLO8eAJfoz5LNpIeDkeHPC8m_A1dTc4IEgULXq3H6w1g"
              />
            </span>
            <span className={`font-bold text-2xl tracking-wider uppercase ${isElementPage ? 'text-slate-100' : 'text-slate-800 dark:text-slate-100'}`}>AGAMAGIZH</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`transition-colors font-headline font-medium tracking-wide text-sm ${
                isElementPage
                  ? 'text-slate-200 hover:text-white'
                  : isLinkActive(link.path)
                  ? 'text-[#5948d3] dark:text-[#a89cff]'
                  : 'text-slate-700 dark:text-slate-300 hover:text-[#5948d3]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="bg-[#5948d3] text-[#fcf7ff] px-6 py-2.5 rounded-full font-headline font-medium text-sm hover:bg-[#4d39c7] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Book Consultation
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="lg:hidden absolute right-6">
          <button 
            className={`p-2 flex items-center justify-center ${isElementPage ? 'text-slate-100' : 'text-slate-800 dark:text-slate-100'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-b overflow-hidden ${
              isElementPage
                ? 'bg-slate-600/95 border-white/20'
                : 'bg-white/95 dark:bg-slate-900/95 border-white/20'
            }`}
          >
            <div className="flex flex-col p-8 space-y-6 items-center text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`font-headline font-semibold text-xl w-full py-2 ${
                    isElementPage
                      ? 'text-slate-100'
                      : isLinkActive(link.path)
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
