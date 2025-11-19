import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { Course } from '../types';
import { BookOpen } from 'lucide-react';

const cookingCourses: Course[] = [
  {
    id: '1',
    title: 'Cuisine Congolaise Authentique',
    description: 'Apprenez à cuisiner les incontournables : Pondu, Saka-Saka, Liboke, Poulet Moambe. Maîtrise des épices et cuissons traditionnelles.',
    duration: '1 Semaine',
    level: 'Tous niveaux',
    price: '450 €',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    modules: ['Les bases des épices', 'Cuisson à l\'étouffée', 'Préparation du manioc', 'Grillades']
  },
  {
    id: '2',
    title: 'Formation Traiteur Pro',
    description: 'Lancez votre activité ! Gestion des grands volumes, présentation de buffets, hygiène (HACCP) et calcul des coûts.',
    duration: '1 Mois',
    level: 'Avancé',
    price: '1 200 €',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80',
    modules: ['Gestion des stocks', 'Dressage Buffet', 'Normes Hygiène', 'Menuing événementiel']
  },
  {
    id: '3',
    title: 'Pâtisserie & Douceurs',
    description: 'Des Mikates aux gâteaux d\'anniversaire modernes. Techniques de base de la pâtisserie et desserts afro-fusion.',
    duration: '2 Semaines',
    level: 'Intermédiaire',
    price: '600 €',
    image: 'https://images.unsplash.com/photo-1579372786545-ea65448d7af9?auto=format&fit=crop&w=800&q=80',
    modules: ['Pâtes de base', 'Beignets africains', 'Cake Design', 'Desserts à l\'assiette']
  }
];

export const Training: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gold-100 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-gold-600" />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-zinc-900 mb-4">L'Académie Rach Food</h1>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Transmettre notre savoir-faire est notre passion. Que vous soyez amateur ou futur professionnel, nos modules sont conçus pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookingCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 bg-zinc-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="text-2xl font-bold mb-2">Besoin d'une formation sur mesure ?</h3>
                <p className="text-zinc-400">Nous proposons aussi des cours privés à domicile ou pour des groupes (Team Building).</p>
            </div>
            <a href="#/contact" className="bg-white text-zinc-900 px-6 py-3 rounded-lg font-bold hover:bg-gold-500 transition-colors whitespace-nowrap">
                Contactez-nous
            </a>
        </div>
      </div>
    </div>
  );
};