import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import { Dish } from '../types';
import { Link } from 'react-router-dom';

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const whatsappMessage = encodeURIComponent(`Bonjour Rach Food, je souhaite commander le plat : ${dish.title}.`);
  const whatsappUrl = `https://wa.me/33600000000?text=${whatsappMessage}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-900">
          {dish.category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-zinc-900">{dish.title}</h3>
          <span className="text-gold-600 font-bold text-lg">{dish.price}</span>
        </div>
        
        <p className="text-zinc-500 text-sm mb-6 flex-1 italic">
          {dish.description}
        </p>
        
        {dish.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
                {dish.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-100 text-zinc-500 rounded-sm">
                        {tag}
                    </span>
                ))}
            </div>
        )}
        
        <div className="space-y-4 pt-4 border-t border-zinc-100">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <button className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800 transition-colors group-hover:bg-gold-500 group-hover:text-zinc-900 font-medium">
              Commander sur WhatsApp
              <ChevronRight size={16} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};