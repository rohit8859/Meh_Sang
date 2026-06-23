import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onAdminToggle: () => void;
  isAdminMode: boolean;
}

export default function Navbar({ onAdminToggle, isAdminMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 55);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-[#F5EBDD]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 scroll-smooth">
            <span className="text-2xl md:text-3xl font-serif font-bold text-deep-brown tracking-wider flex items-center">
              Meh<span className="text-[#556B2F]">Sang</span>
              <Sparkles className="h-5 w-5 ml-1.5 text-gold animate-pulse" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans font-semibold text-deep-brown hover:text-[#556B2F] hover:border-b hover:border-gold transition-all duration-200 uppercase tracking-widest pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="admin-portal-trigger"
              onClick={onAdminToggle}
              className={`text-xs px-3 py-1.5 rounded-full font-mono font-bold border uppercase tracking-wider transition-all ${
                isAdminMode 
                  ? 'bg-deep-brown text-white border-deep-brown hover:bg-gold hover:border-gold' 
                  : 'text-mehndi-green border-mehndi-green hover:bg-mehndi-green hover:text-white'
              }`}
            >
              {isAdminMode ? 'Exit Admin' : 'Admin Panel'}
            </button>
            <a
              href="#booking-form-section"
              className="px-6 py-2.5 rounded-full bg-mehndi-green text-white text-xs font-sans uppercase tracking-widest font-bold shadow-md hover:bg-deep-brown transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onAdminToggle}
              className={`text-[10px] px-2 py-1 rounded font-mono border uppercase ${
                isAdminMode ? 'bg-deep-brown text-white' : 'text-mehndi-green border-mehndi-green'
              }`}
            >
              {isAdminMode ? 'Exit' : 'Admin'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-deep-brown hover:text-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ivory border-b border-beige/80 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2 text-base font-sans font-medium text-deep-brown hover:bg-beige/40 rounded-sm hover:text-mehndi-green transition-transform uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-2 border-t border-beige/40">
                <a
                  href="#booking-form-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-mehndi-green text-white rounded-full font-sans uppercase text-xs tracking-widest font-bold shadow-md active:bg-deep-brown transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
