import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Safely access process.env for browser environments
const getApiKey = () => {
  try {
    // @ts-ignore
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
  } catch (e) {
    return '';
  }
};

const API_KEY = getApiKey();

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!aiClient && API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const sendMessageToAssistant = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = initializeGenAI();
    if (!client) {
      return "Désolé, je ne peux pas me connecter au serveur pour le moment (Clé API manquante).";
    }

    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Tu es l'assistant virtuel de "Rach Food - Chez Ya Matondo".
        Rach Food est une entreprise polyvalente basée sur la cuisine congolaise, africaine et internationale.
        
        Tes 3 piliers de services sont :
        1. RESTAURANT & LIVRAISON : Plats savoureux (Poulet braisé, Pondu, Liboke, etc.). On livre à domicile.
        2. TRAITEUR : Pour mariages, fêtes, entreprises. Buffets à volonté, service à table.
        3. FORMATION : École de cuisine pour apprendre les secrets de la gastronomie africaine et d'ailleurs.

        Ton ton doit être chaleureux, professionnel et accueillant ("Chez Ya Matondo" signifie une ambiance familiale).
        
        Si on te demande les prix spécifiques traiteur ou formation, invite à contacter via le formulaire pour un devis, car cela dépend des besoins.
        Mets en avant l'authenticité des saveurs (épices du pays, produits frais).`
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Une erreur est survenue. Veuillez réessayer plus tard.";
  }
};