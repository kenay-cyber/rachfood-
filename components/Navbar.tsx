import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Restaurant & Livraison' },
    { path: '/traiteur', label: 'Service Traiteur' },
    { path: '/formations', label: 'Nos Formations' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-zinc-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="bg-white/10 p-1 rounded-lg overflow-hidden">
                <img 
                  src="https://i.postimg.cc/j2nSjCjD/Generated-Image-November-19-2025-1-53PM.png" 
                  alt="Rach Food Logo" 
                  className="h-16 w-auto object-contain"
                />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-serif text-xl font-bold tracking-wide text-gold-500 uppercase">Rach Food</span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase">Traiteur & Restaurant</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-gold-500'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://wa.me/33600000000?text=Bonjour%20Rach%20Food,%20je%20souhaite%20obtenir%20un%20devis%20ou%20passer%20commande."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 text-zinc-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-400 transition-transform hover:scale-105 shadow-lg shadow-gold-500/20 whitespace-nowrap"
              >
                Devis / Commande
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-gold-500 bg-zinc-800'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/33600000000?text=Bonjour%20Rach%20Food,%20je%20souhaite%20passer%20commande."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-gold-500 text-zinc-900 px-5 py-3 rounded-md font-bold"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};