import React, { useState } from 'react';
import { DishCard } from '../components/DishCard';
import { Dish } from '../types';
import { Search, Utensils } from 'lucide-react';

const menuItems: Dish[] = [
  {
    id: '1',
    title: 'Fumbwa et Makayabu',
    description: 'Feuilles de fumbwa cuisinées traditionnellement à la pâte d\'arachide, accompagnées de poisson salé (Makayabu) et fufu ou chikwangue.',
    category: 'Plat',
    price: '20 €',
    image: 'https://i.postimg.cc/g0b8bFNn/Whats_App_Image_2025_11_19_à_13_04_41_7482f284.jpg',
    tags: ['Spécialité', 'Traditionnel']
  },
  {
    id: '2',
    title: 'Soso ya ko Tumba',
    description: 'Poulet fermier braisé aux épices du chef, tendre et fumé, servi avec bananes plantains et piment.',
    category: 'Plat',
    price: '18 €',
    image: 'https://i.postimg.cc/7YcSXTzd/Whats_App_Image_2025_11_19_à_13_04_25_61979d47.jpg',
    tags: ['Grillade', 'Populaire']
  },
  {
    id: '3',
    title: 'Fumbwa na Poisson ya Kotumba',
    description: 'Le délice du Fumbwa servi avec un poisson braisé entier. Un mariage de saveurs terre et mer.',
    category: 'Plat',
    price: '25 €',
    image: 'https://i.postimg.cc/nc5qTQmG/Whats_App_Image_2025_11_19_à_13_04_20_d6494c47.jpg',
    tags: ['Complet', 'Gourmand']
  },
  {
    id: '4',
    title: 'Ngulu et Pomme de Terre',
    description: 'Viande de porc sautée ou grillée, accompagnée de pommes de terre rissolées ou sautées.',
    category: 'Plat',
    price: '18 €',
    image: 'https://i.postimg.cc/wjmLrTcT/Whats_App_Image_2025_11_19_à_13_04_33_dde752b8.jpg',
    tags: ['Viande', 'Coup de cœur']
  },
  {
    id: '5',
    title: 'Poulet Mayo au Corned Beef',
    description: 'Une revisite gourmande du poulet mayo avec du corned beef, onctueux et riche en goût.',
    category: 'Plat',
    price: '16 €',
    image: 'https://i.postimg.cc/d0crcP4k/Whats_App_Image_2025_11_19_à_13_04_44_b948f012.jpg',
    tags: ['Street Food', 'Riche']
  },
  {
    id: '6',
    title: 'Kamba Nyoka et Dongo Dongo',
    description: 'Poisson fumé (Kamba Nyoka) cuisiné avec des gombos (Dongo Dongo). Un plat en sauce gélatineuse et savoureux.',
    category: 'Plat',
    price: '22 €',
    image: 'https://i.postimg.cc/RVqccTWP/Whats_App_Image_2025_11_19_à_13_04_17_c368113a.jpg',
    tags: ['Sauce', 'Authentique']
  },
  {
    id: '7',
    title: 'Mbisi ya Mayi (Poisson Frais)',
    description: 'Poisson frais entier cuisiné en sauce ou grillé, selon l\'arrivage.',
    category: 'Plat',
    price: '20 €',
    image: 'https://i.postimg.cc/7YbggN5z/Whats_App_Image_2025_11_19_à_13_04_01_f30a4c4d.jpg',
    tags: ['Poisson']
  },
  {
    id: '8',
    title: 'Mabumu (Tripes)',
    description: 'Tripes cuisinées en sauce tomate relevée, tendres et parfumées.',
    category: 'Plat',
    price: '16 €',
    image: 'https://i.postimg.cc/J4tbbQsp/Whats_App_Image_2025_11_19_à_13_04_17_3220b6a4.jpg',
    tags: ['Abats', 'Connaisseurs']
  },
  {
    id: '9',
    title: 'Madesu na Makemba',
    description: 'Haricots blancs (Madesu) mijotés à l\'huile de palme, servis avec bananes plantains mûres.',
    category: 'Plat',
    price: '15 €',
    image: 'https://i.postimg.cc/X7Xwwgrg/Whats_App_Image_2025_11_19_à_13_04_14_61e93045.jpg',
    tags: ['Végétarien', 'Classique']
  }
];

export const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = filter === 'Tous' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-zinc-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-serif font-bold text-zinc-900 mb-4">La Carte</h1>
          <p className="text-zinc-600 max-w-2xl mx-auto italic text-lg">
            Découvrez nos spécialités grillées et nos plats cuisinés avec amour. Chez Rach Food, c'est généreux !
          </p>
        </div>

        {/* Search / Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-40">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Poulet, Fumbwa, Ngulu..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
             {['Tous', 'Entrée', 'Plat', 'Dessert'].map((cat) => (
                 <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        filter === cat 
                        ? 'bg-gold-500 text-zinc-900' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                 >
                     {cat}
                 </button>
             ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(dish => (
                <DishCard key={dish.id} dish={dish} />
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <Utensils className="mx-auto h-12 w-12 text-zinc-300 mb-4" />
                <p className="text-zinc-500">Aucun plat trouvé.</p>
            </div>
        )}
        
        <div className="mt-16 text-center border-t border-zinc-200 pt-8">
            <p className="text-zinc-500 text-sm italic">
                Nos plats sont servis avec des accompagnements au choix (Frites, Allocos, Riz, Chikwangue).
            </p>
        </div>
      </div>
    </div>
  );
};