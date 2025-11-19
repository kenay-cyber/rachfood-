import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: '1', type: 'image', url: 'https://i.postimg.cc/Fs1jjxYZ/Whats-App-Image-2025-11-19-a-13-04-15-dc5f5491.jpg', title: 'Nos Plats' },
  { id: '2', type: 'image', url: 'https://i.postimg.cc/J4tbbQs3/Whats-App-Image-2025-11-19-a-13-04-16-774b0108.jpg', title: 'Ambiance' },
  { id: '3', type: 'image', url: 'https://i.postimg.cc/J4tbbQsp/Whats-App-Image-2025-11-19-a-13-04-17-3220b6a4.jpg', title: 'Mabumu' },
  { id: '4', type: 'image', url: 'https://i.postimg.cc/RVqccTWP/Whats-App-Image-2025-11-19-a-13-04-17-c368113a.jpg', title: 'Kamba Nyoka' },
  { id: '5', type: 'image', url: 'https://i.postimg.cc/pX7Kknjf/Whats-App-Image-2025-11-19-a-13-04-18-499fae39.jpg', title: 'Buffet' },
  { id: '6', type: 'image', url: 'https://i.postimg.cc/Kv4nn51q/Whats-App-Image-2025-11-19-a-13-04-18-5d382044.jpg', title: 'Traiteur' },
  { id: '7', type: 'image', url: 'https://i.postimg.cc/rFb5gt4C/Whats-App-Image-2025-11-19-a-13-04-19-94a2c522.jpg', title: 'Grillades' },
  { id: '8', type: 'image', url: 'https://i.postimg.cc/nc5qTQmG/Whats-App-Image-2025-11-19-a-13-04-20-d6494c47.jpg', title: 'Fumbwa Royal' },
  { id: '9', type: 'image', url: 'https://i.postimg.cc/wTPDFsNk/Whats-App-Image-2025-11-19-a-13-04-22-9c8a6962.jpg', title: 'Service' },
  { id: '10', type: 'image', url: 'https://i.postimg.cc/DyD15bGM/Whats-App-Image-2025-11-19-a-13-04-23-dcb44b7e.jpg', title: 'Équipe' },
  { id: '11', type: 'image', url: 'https://i.postimg.cc/3J629DGq/Whats-App-Image-2025-11-19-a-13-04-24-b3033348.jpg', title: 'Cuisine' },
  { id: '12', type: 'image', url: 'https://i.postimg.cc/fTFY50dq/Whats-App-Image-2025-11-19-a-13-04-24-d023b0b0.jpg', title: 'Préparation' },
  { id: '13', type: 'image', url: 'https://i.postimg.cc/7YcSXTzd/Whats-App-Image-2025-11-19-a-13-04-25-61979d47.jpg', title: 'Soso ya ko Tumba' },
  { id: '14', type: 'image', url: 'https://i.postimg.cc/dtXGnTdK/Whats-App-Image-2025-11-19-a-13-04-26-6b9d6e05.jpg', title: 'Décoration' },
  { id: '15', type: 'image', url: 'https://i.postimg.cc/WbK0SJrV/Whats-App-Image-2025-11-19-a-13-04-27-006595ee.jpg', title: 'Buffet Mariage' },
  { id: '16', type: 'image', url: 'https://i.postimg.cc/YqVQ8mgH/Whats-App-Image-2025-11-19-a-13-04-27-1bbcf831.jpg', title: 'Plateaux' },
  { id: '17', type: 'image', url: 'https://i.postimg.cc/8P3LwrWD/Whats-App-Image-2025-11-19-a-13-04-28-699239f4.jpg', title: 'Saveurs' },
  { id: '18', type: 'image', url: 'https://i.postimg.cc/GhNvzsYc/Whats-App-Image-2025-11-19-a-13-04-28-e3c17349.jpg', title: 'Présentation' },
  { id: '19', type: 'image', url: 'https://i.postimg.cc/wTPDFsJx/Whats-App-Image-2025-11-19-a-13-04-29-4c27094e.jpg', title: 'Gourmandise' },
  { id: '20', type: 'image', url: 'https://i.postimg.cc/JzkZF4cw/Whats-App-Image-2025-11-19-a-13-04-30-5a514ab3.jpg', title: 'Détails' },
  { id: '21', type: 'image', url: 'https://i.postimg.cc/52CLrNqd/Whats-App-Image-2025-11-19-a-13-04-30-91f5d914.jpg', title: 'Spécialités' },
  { id: '22', type: 'image', url: 'https://i.postimg.cc/kgbKHXFm/Whats-App-Image-2025-11-19-a-13-04-31-de051f27.jpg', title: 'Traiteur Event' },
  { id: '23', type: 'image', url: 'https://i.postimg.cc/YCWYPqfB/Whats-App-Image-2025-11-19-a-13-04-32-4e67faaa.jpg', title: 'Formation' },
  { id: '24', type: 'image', url: 'https://i.postimg.cc/2SZht8FC/Whats-App-Image-2025-11-19-a-13-04-32-67f111ab.jpg', title: 'Livraison' },
  { id: '25', type: 'image', url: 'https://i.postimg.cc/x1zMZTyf/Whats-App-Image-2025-11-19-a-13-04-33-27dd6c40.jpg', title: 'Menu' },
  { id: '26', type: 'image', url: 'https://i.postimg.cc/XYCdP7cN/Whats-App-Image-2025-11-19-a-13-04-33-cde7f75a.jpg', title: 'Cuisine Pro' },
  { id: '27', type: 'image', url: 'https://i.postimg.cc/wjmLrTcT/Whats-App-Image-2025-11-19-a-13-04-33-dde752b8.jpg', title: 'Ngulu' },
  { id: '28', type: 'image', url: 'https://i.postimg.cc/QdT1zxkd/Whats-App-Image-2025-11-19-a-13-04-34-e513b82b.jpg', title: 'Garniture' },
  { id: '29', type: 'image', url: 'https://i.postimg.cc/0ywD42dN/Whats-App-Image-2025-11-19-a-13-04-35-b49ea8d4.jpg', title: 'Sauce' },
  { id: '30', type: 'image', url: 'https://i.postimg.cc/7Z20RYM6/Whats-App-Image-2025-11-19-a-13-04-36-7b7cdaa5.jpg', title: 'Chaleur' },
  { id: '31', type: 'image', url: 'https://i.postimg.cc/qv3yFMXt/Whats-App-Image-2025-11-19-a-13-04-36-b1fccbf4.jpg', title: 'Fêtes' },
  { id: '32', type: 'image', url: 'https://i.postimg.cc/BnKHzQcL/Whats-App-Image-2025-11-19-a-13-04-37-74425b25.jpg', title: 'Buffet Riche' },
  { id: '33', type: 'image', url: 'https://i.postimg.cc/3xvmqJC0/Whats-App-Image-2025-11-19-a-13-04-39-e7645529.jpg', title: 'Couleurs' },
  { id: '34', type: 'image', url: 'https://i.postimg.cc/XYCdP7cy/Whats-App-Image-2025-11-19-a-13-04-39-f230d54a.jpg', title: 'Goût' },
  { id: '35', type: 'image', url: 'https://i.postimg.cc/52CLrNqz/Whats-App-Image-2025-11-19-a-13-04-40-54f08135.jpg', title: 'Passion' },
  { id: '36', type: 'image', url: 'https://i.postimg.cc/6pvnP5Ln/Whats-App-Image-2025-11-19-a-13-04-40-561c9d54.jpg', title: 'Partage' },
  { id: '37', type: 'image', url: 'https://i.postimg.cc/g0b8bFNn/Whats-App-Image-2025-11-19-a-13-04-41-7482f284.jpg', title: 'Makayabu' },
  { id: '38', type: 'image', url: 'https://i.postimg.cc/vZVfKHLr/Whats-App-Image-2025-11-19-a-13-04-42-59cdeafd.jpg', title: 'Table' },
  { id: '39', type: 'image', url: 'https://i.postimg.cc/SKbCbFDn/Whats-App-Image-2025-11-19-a-13-04-43-871529a6.jpg', title: 'Accueil' },
  { id: '40', type: 'image', url: 'https://i.postimg.cc/d0crcP4k/Whats-App-Image-2025-11-19-a-13-04-44-b948f012.jpg', title: 'Poulet Mayo' },
  { id: '41', type: 'image', url: 'https://i.postimg.cc/VNPnPQD0/Whats-App-Image-2025-11-19-a-13-04-45-72ed9bd6.jpg', title: 'Savoir-faire' },
  { id: '42', type: 'image', url: 'https://i.postimg.cc/rp2x2XQW/Whats-App-Image-2025-11-19-a-13-04-46-b6699408.jpg', title: 'Tradition' },
  { id: '43', type: 'image', url: 'https://i.postimg.cc/fbQmQnBx/Whats-App-Image-2025-11-19-a-13-04-46-db199910.jpg', title: 'Authentique' },
  { id: '44', type: 'image', url: 'https://i.postimg.cc/nLfBfb0K/Whats-App-Image-2025-11-19-a-13-04-47-00d7fe3b.jpg', title: 'Rach Food' },
  { id: '45', type: 'image', url: 'https://i.postimg.cc/yNCcC4vj/Whats-App-Image-2025-11-19-a-13-04-48-3488f153.jpg', title: 'Chez Ya Matondo' },
  { id: '46', type: 'image', url: 'https://i.postimg.cc/k5PKP3fT/Whats-App-Image-2025-11-19-a-13-04-49-03296768.jpg', title: 'Cours Cuisine' },
  { id: '47', type: 'image', url: 'https://i.postimg.cc/N0vmvqpp/Whats-App-Image-2025-11-19-a-13-04-50-c690b47f.jpg', title: 'Création' },
  { id: '48', type: 'image', url: 'https://i.postimg.cc/9fHZH5J8/Whats-App-Image-2025-11-19-a-13-04-51-00d9eddf.jpg', title: 'Finesse' },
  { id: '49', type: 'image', url: 'https://i.postimg.cc/GpnGnwqS/Whats-App-Image-2025-11-19-a-13-04-51-bf6c2b9a.jpg', title: 'Buffet Riche' },
  { id: '50', type: 'image', url: 'https://i.postimg.cc/MGJVJ2dN/Whats-App-Image-2025-11-19-a-13-04-52-f79fdb8c.jpg', title: 'Art Culinaire' },
  { id: '51', type: 'image', url: 'https://i.postimg.cc/GpnGnwqZ/Whats-App-Image-2025-11-19-a-13-04-53-ed8b89d9.jpg', title: 'Le Restaurant' },
  { id: '52', type: 'image', url: 'https://i.postimg.cc/3wjpKSc1/Whats-App-Image-2025-11-19-a-13-04-55-27307f56.jpg', title: 'À Bientôt' },
];

export const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gold-500 mb-4">Galerie & Réalisations</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Plongez dans l'univers visuel de Rach Food. Nos plats, nos événements et nos moments de partage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer border border-zinc-800"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 {item.type === 'video' ? (
                    <div className="w-12 h-12 bg-gold-500/80 rounded-full flex items-center justify-center text-zinc-900 shadow-lg group-hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={20} />
                    </div>
                 ) : (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm tracking-wide border-b border-gold-500 pb-0.5">
                        Zoom
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedItem(null)}>
            <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors"
            >
                <X size={40} />
            </button>
            
            <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {selectedItem.type === 'image' ? (
                    <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
                ) : (
                    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <div className="w-full h-full flex items-center justify-center text-zinc-500">
                             <p>Video Player Placeholder</p>
                        </div>
                    </div>
                )}
                <h3 className="text-white text-xl font-serif mt-6">{selectedItem.title}</h3>
            </div>
        </div>
      )}
    </div>
  );
};