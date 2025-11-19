import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, ChefHat, PartyPopper, Truck, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Mariage',
    content: "Un service traiteur exceptionnel pour notre mariage. Le buffet congolais a ravi tous nos invités, des saveurs authentiques !",
    rating: 5,
    image: "https://i.postimg.cc/fTkxxvV0/Whats_App_Image_2025_11_19_à_13_04_03_d09cbfa9.jpg"
  },
  {
    id: '2',
    name: 'Jean-Paul K.',
    role: 'Formation Cuisine',
    content: "J'ai suivi la formation. L'équipe est pédagogue et j'ai appris à maîtriser les épices. Je recommande Rach Food Academy.",
    rating: 5,
    image: "https://i.postimg.cc/YCWYPqfB/Whats_App_Image_2025_11_19_à_13_04_32_4e67faaa.jpg"
  },
  {
    id: '3',
    name: 'Famille T.',
    role: 'Repas de Fête',
    content: "Livraison ponctuelle et plats toujours chauds. Le poulet braisé a fait l'unanimité. Merci pour le professionnalisme.",
    rating: 5,
    image: "https://i.postimg.cc/2SZht8FC/Whats_App_Image_2025_11_19_à_13_04_32_67f111ab.jpg"
  }
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://i.postimg.cc/GpnGnwqZ/Whats-App-Image-2025-11-19-a-13-04-53-ed8b89d9.jpg" 
            alt="Table Rach Food" 
            className="w-full h-full object-cover animate-scale-slow"
          />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="inline-block py-1 px-3 border border-gold-500 text-gold-500 rounded-full text-sm tracking-[0.2em] uppercase mb-2 bg-black/40 backdrop-blur-sm">
            Authenticité & Savoir-faire
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Rach Food
            <span className="block text-3xl md:text-4xl mt-4 text-gold-400 font-light italic">
              "Chez Ya Matondo"
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-3xl mx-auto font-light leading-relaxed">
            Plus qu'un restaurant : Une expérience culinaire complète.
            <br/>
            <span className="font-semibold text-white">Restaurant • Traiteur • Formation</span>
          </p>
          <p className="text-lg text-zinc-300 italic">
            Spécialités congolaises, d'Afrique et d'ailleurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/menu" className="px-8 py-4 bg-gold-500 text-zinc-900 font-bold rounded-lg hover:bg-gold-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20">
              Commander un Plat <Truck size={20} />
            </Link>
            <Link to="/traiteur" className="px-8 py-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-500 text-white font-medium rounded-lg hover:bg-white hover:text-zinc-900 transition-all flex items-center justify-center gap-2">
              Service Traiteur <PartyPopper size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Nos Univers</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                    <img src="https://i.postimg.cc/nc5qTQmG/Whats_App_Image_2025_11_19_à_13_04_20_d6494c47.jpg" alt="Restaurant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                    <Utensils className="h-10 w-10 text-gold-500 mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-3">Restaurant & Livraison</h3>
                    <p className="text-zinc-600 mb-6">
                        Savourez nos grillades (Poulet, Chèvre, Poisson) et plats en sauce sur place ou livrés chez vous. Une cuisine généreuse "Chez Ya Matondo".
                    </p>
                    <Link to="/menu" className="text-gold-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Voir la Carte <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Traiteur Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                    <img src="https://i.postimg.cc/BnKHzQcL/Whats_App_Image_2025_11_19_à_13_04_37_74425b25.jpg" alt="Traiteur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                    <PartyPopper className="h-10 w-10 text-gold-500 mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-3">Service Traiteur</h3>
                    <p className="text-zinc-600 mb-6">
                        Mariages, anniversaires, baptêmes ou événements d'entreprise. Nous organisons vos buffets et repas assis avec élégance et saveurs.
                    </p>
                    <Link to="/traiteur" className="text-gold-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Nos Offres Traiteur <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Formation Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                    <img src="https://i.postimg.cc/k5PKP3fT/Whats-App-Image-2025-11-19-a-13-04-49-03296768.jpg" alt="Formation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                    <ChefHat className="h-10 w-10 text-gold-500 mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-3">Nos Formations</h3>
                    <p className="text-zinc-600 mb-6">
                        Apprenez les secrets de la cuisine africaine et internationale. Cours pour débutants et perfectionnement pour professionnels.
                    </p>
                    <Link to="/formations" className="text-gold-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Rejoindre l'Académie <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Preview Section */}
      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="pattern" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-serif font-bold text-gold-500">L'Art Culinaire en Images</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Découvrez nos plus belles créations, l'ambiance de nos événements traiteur et les coulisses de nos formations. La cuisine est un art visuel avant d'être gustatif.
                    </p>
                    <Link to="/galerie" className="inline-block px-6 py-3 border border-gold-500 text-gold-500 rounded-lg hover:bg-gold-500 hover:text-zinc-900 transition-colors font-semibold">
                        Voir toute la galerie
                    </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                     <img src="https://i.postimg.cc/Fs1jjxYZ/Whats-App-Image-2025-11-19-a-13-04-15-dc5f5491.jpg" alt="Plat Rach Food" className="rounded-lg shadow-xl transform translate-y-4" />
                     <img src="https://i.postimg.cc/vZVfKHLr/Whats_App_Image_2025_11_19_à_13_04_42_59cdeafd.jpg" alt="Plat Rach Food" className="rounded-lg shadow-xl transform -translate-y-4" />
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Ils ont goûté, ils ont adoré</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-sm relative">
                <Quote className="absolute top-6 right-6 text-gold-200 h-8 w-8" />
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold-500" />
                  <div>
                    <h4 className="font-bold text-zinc-900">{item.name}</h4>
                    <span className="text-xs text-gold-600 font-bold uppercase">{item.role}</span>
                  </div>
                </div>
                <div className="flex mb-4 text-gold-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-zinc-600 italic leading-relaxed">"{item.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};