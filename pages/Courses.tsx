import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { Course } from '../types';
import { Search } from 'lucide-react';

const allCourses: Course[] = [
  {
    id: '1',
    title: 'CAP Coiffure Intensive',
    description: 'La formation essentielle pour devenir coiffeur professionnel. Apprenez les coupes, les techniques de base et l\'hygiène en un temps record.',
    duration: '1 An',
    level: 'Débutant',
    price: '4 200 €',
    image: 'https://picsum.photos/800/600?random=1',
    modules: ['Coupes Base', 'Colorimétrie', 'Hygiène', 'Biologie']
  },
  {
    id: '2',
    title: 'Master Coloriste',
    description: 'Perfectionnez votre art de la couleur. Balayages, ombrés, corrections et chimie des couleurs pour les coiffeurs confirmés.',
    duration: '6 Mois',
    level: 'Expert',
    price: '2 800 €',
    image: 'https://picsum.photos/800/600?random=2',
    modules: ['Chimie couleur', 'Balayage', 'Ombré Hair', 'Correction']
  },
  {
    id: '3',
    title: 'Barber Expert',
    description: 'Maîtrisez l\'art du rasage à l\'ancienne et des coupes hommes modernes. Une spécialisation très demandée sur le marché.',
    duration: '3 Mois',
    level: 'Intermédiaire',
    price: '1 500 €',
    image: 'https://picsum.photos/800/600?random=3',
    modules: ['Rasage ancienne', 'Taille Barbe', 'Dégradés', 'Soins Homme']
  },
  {
    id: '4',
    title: 'Chignons & Mariage',
    description: 'Devenez l\'expert incontournable des coiffures événementielles. Techniques d\'attaches, volumes et créations artistiques.',
    duration: '2 Mois',
    level: 'Intermédiaire',
    price: '1 200 €',
    image: 'https://picsum.photos/800/600?random=4',
    modules: ['Attaches', 'Chignons Mariée', 'Tresses', 'Volume']
  },
  {
    id: '5',
    title: 'Brevet Professionnel',
    description: 'Le diplôme indispensable pour ouvrir votre propre salon. Gestion, management et haute technicité.',
    duration: '2 Ans',
    level: 'Intermédiaire',
    price: '5 500 €',
    image: 'https://picsum.photos/800/600?random=5',
    modules: ['Gestion', 'Management', 'Technique Avancée', 'Vente']
  },
  {
    id: '6',
    title: 'Extensions & Volume',
    description: 'Toutes les méthodes de pose d\'extensions (kératine, bandes, tissage) pour transformer les chevelures.',
    duration: '1 Mois',
    level: 'Expert',
    price: '950 €',
    image: 'https://picsum.photos/800/600?random=6',
    modules: ['Kératine', 'Bandes adhésives', 'Tissage', 'Entretien']
  }
];

export const Courses: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Nos Formations</h1>
          <p className="text-zinc-600 max-w-2xl">
            Que vous débutiez ou souhaitiez perfectionner votre technique, nous avons le cursus adapté à vos ambitions.
          </p>
        </div>

        {/* Search / Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Rechercher une formation..." 
              className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="px-4 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-700 bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 w-full sm:w-auto">
              <option value="">Tous les niveaux</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};