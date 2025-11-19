import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PartyPopper, ChefHat, Users } from 'lucide-react';

export const Catering: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Hero Traiteur */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
            <img src="https://i.postimg.cc/WbK0SJrV/Whats_App_Image_2025_11_19_à_13_04_27_006595ee.jpg" alt="Traiteur Buffet" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-zinc-900/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-serif font-bold mb-4">Rach Food Traiteur</h1>
            <p className="text-xl text-gold-400 italic">L'excellence du goût pour vos grands moments</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-6">Donnez du goût à vos événements</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
                Que ce soit pour un mariage grandiose, une réunion d'entreprise ou un anniversaire intime, 
                <strong>Rach Food</strong> apporte l'authenticité de la cuisine congolaise et la finesse de la gastronomie internationale à votre table.
                Nous gérons tout, de la préparation à la présentation.
            </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <Users className="text-gold-500" /> Mariages & Célébrations
                    </h3>
                    <p className="text-zinc-600 mb-6">
                        Un buffet royal ou un service à l'assiette ? Nous créons des menus sur mesure qui respectent vos traditions et vos envies.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Buffet Congolais (Pondu, Liboke, Makayabu...)</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Options Halal et Végétariennes</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Service complet (Maîtres d'hôtel disponible)</span>
                        </li>
                    </ul>
                </div>
                <div className="order-1 md:order-2 h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img src="https://i.postimg.cc/BnKHzQcL/Whats_App_Image_2025_11_19_à_13_04_37_74425b25.jpg" alt="Mariage" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img src="https://i.postimg.cc/YqVQ8mgH/Whats_App_Image_2025_11_19_à_13_04_27_1bbcf831.jpg" alt="Corporate" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <ChefHat className="text-gold-500" /> Entreprises & Plateaux Repas
                    </h3>
                    <p className="text-zinc-600 mb-6">
                        Impressionnez vos collaborateurs ou clients avec des déjeuners de qualité. Livraison ponctuelle et présentation soignée.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Cocktails dînatoires</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Plateaux repas individuels chauds</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle className="text-gold-500 h-5 w-5 shrink-0" /> 
                            <span>Pause café et petits déjeuners</span>
                        </li>
                    </ul>
                </div>
            </div>
             
            {/* Extra Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                 <img src="https://i.postimg.cc/GhNvzsYc/Whats_App_Image_2025_11_19_à_13_04_28_e3c17349.jpg" alt="Buffet Detail" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
                 <img src="https://i.postimg.cc/GpnGnwqS/Whats_App_Image_2025_11_19_à_13_04_51_bf6c2b9a.jpg" alt="Buffet Detail 2" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
            </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Prêt à organiser votre événement ?</h2>
            <p className="text-zinc-400 mb-8">Contactez-nous pour obtenir un devis personnalisé sous 24h.</p>
            <a href="https://wa.me/33600000000?text=Bonjour%20Rach%20Food,%20je%20souhaite%20un%20devis%20traiteur." className="inline-block bg-gold-500 text-zinc-900 px-8 py-4 rounded-lg font-bold hover:bg-gold-400 transition-transform hover:scale-105">
                Demander un Devis Traiteur
            </a>
        </div>
      </section>
    </div>
  );
};