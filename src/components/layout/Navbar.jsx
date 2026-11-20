import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          scrolled ? 'shadow-lg py-2' : 'shadow-sm py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#1B4332" />
              <path d="M20 8c-2 4-6 8-6 14s4 10 6 10 6-4 6-10-4-10-6-14z" fill="#2D6A4F" />
              <path d="M14 16c2 2 4 6 6 6s4-4 6-6" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
              <path d="M16 22c1.5 1.5 3 4 4 4s2.5-2.5 4-4" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold text-primary leading-tight tracking-tight">
                BIOZYME
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-brand-green-light">
                Trading Company
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-full px-6 py-2.5 h-auto bg-primary hover:bg-brand-green-dark text-white font-semibold">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full rounded bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full rounded bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full rounded bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-xl font-heading font-semibold ${
                      location.pathname === link.path ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 bg-primary text-white font-semibold px-8 py-3 rounded-full text-lg"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
