import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Réservations & Contact</h1>
          <p className="text-zinc-600">
            Pour un dîner romantique, un repas d'affaires ou une privatisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-gold-600 h-6 w-6" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">Réservation Téléphonique</h3>
              <p className="text-zinc-600 mb-4">Tous les jours de 10h à 23h.</p>
              <a href="tel:+33140404040" className="text-gold-600 font-semibold hover:underline">+33 1 40 40 40 40</a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="text-gold-600 h-6 w-6" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">Horaires d'ouverture</h3>
              <p className="text-zinc-600 mb-1">Déjeuner : 12h00 - 14h30</p>
              <p className="text-zinc-600">Dîner : 19h30 - 22h30</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-gold-600 h-6 w-6" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-2">Adresse</h3>
              <p className="text-zinc-600 mb-4">Voiturier disponible.</p>
              <span className="text-zinc-900 font-medium">15 Place des Vosges, Paris</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-zinc-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Demande Reçue !</h3>
                  <p className="text-zinc-600">Nous avons bien pris en compte votre message. Notre service de réservation vous confirmera votre demande très rapidement.</p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-8 text-gold-600 font-medium hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-700">Nom complet</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                        placeholder="Jean Dupont"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-700">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                        placeholder="jean@exemple.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Objet de la demande</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-white"
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Demande de Réservation</option>
                      <option value="privatisation">Privatisation / Groupe</option>
                      <option value="allergenes">Question sur le Menu / Allergènes</option>
                      <option value="presse">Presse & Partenariat</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">Message / Détails (Date, Heure, Nb Personnes)</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
                      placeholder="Ex: Réservation pour 2 personnes ce samedi soir..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-zinc-900 text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Envoyer la demande <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};