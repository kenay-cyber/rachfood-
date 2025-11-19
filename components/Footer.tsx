import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 text-zinc-400 border-t border-zinc-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://i.postimg.cc/j2nSjCjD/Generated-Image-November-19-2025-1-53PM.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white font-bold flex items-center gap-2">
              RACH FOOD
            </h3>
            <p className="text-gold-500 text-sm font-serif italic">Chez Ya Matondo</p>
            <p className="text-sm leading-relaxed max-w-xs">
              La référence des grillades et de la bonne cuisine. Une ambiance conviviale pour partager de bons moments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Nous Trouver</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0" />
                <span>12 Avenue des Saveurs,<br />75000 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span>+33 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <span>contact@rachfood.fr</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Notre Carte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commander</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Rach Food. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};