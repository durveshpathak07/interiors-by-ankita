import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-tight text-stone-900 z-50 relative uppercase">
          The Cosy Canvas
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-stone-500',
                location.pathname === link.path ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-800'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-stone-900 text-stone-50 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-stone-900 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center h-screen w-full"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-2xl font-serif transition-colors',
                    location.pathname === link.path ? 'text-stone-900' : 'text-stone-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-8 py-3 bg-stone-900 text-stone-50 tracking-widest uppercase"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
