import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Démo', href: '#demo' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="font-bold text-black text-lg font-sans tracking-tighter">K</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden md:block">
            KALL
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Espace Client</button>
            <button className="group relative px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                <span className="relative z-10">Essayer KALL</span>
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white z-50 p-2 bg-white/10 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-3xl font-bold text-white tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg">Essayer KALL</button>
              <button className="w-full py-4 text-slate-400 font-medium">Connexion</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;