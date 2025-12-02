import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const items = [
    {
        question: "Est-ce que je garde mon numéro de téléphone ?",
        answer: "Oui, absolument. KALL IA fonctionne via un simple transfert d'appel. Vous activez le transfert quand vous n'êtes pas disponible (ou tout le temps), et KALL prend le relais. Votre numéro reste le même et le client ne voit aucune différence."
    },
    {
        question: "L'IA comprend-elle les accents ou le bruit de fond ?",
        answer: "Notre modèle est entraîné sur des millions de conversations francophones. Il est robuste aux accents régionaux et filtre les bruits de fond (chantiers, rue, vent) pour comprendre parfaitement l'interlocuteur."
    },
    {
        question: "Puis-je personnaliser le message d'accueil ?",
        answer: "Tout à fait. Vous pouvez définir comment KALL se présente (ex: 'Secrétariat de M. Martin'), le vouvoiement/tutoiement, et les instructions spécifiques pour les urgences. C'est votre image de marque."
    },
    {
        question: "Y a-t-il un engagement de durée ?",
        answer: "Non. KALL IA est sans engagement. Vous pouvez annuler votre abonnement en un clic depuis votre espace client. Nous croyons que la qualité de notre service suffit à vous fidéliser."
    },
    {
        question: "Comment se passe l'installation ?",
        answer: "Cela prend moins de 5 minutes. Créez votre compte, connectez votre agenda (optionnel), et nous vous donnons un numéro de transfert à activer sur votre mobile. C'est tout."
    }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto py-32 px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Questions Fréquentes</h2>
            <p className="text-slate-400">Tout ce que vous devez savoir avant de commencer.</p>
        </div>
        
        <div className="space-y-4">
            {items.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-colors">
                    <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="text-lg font-medium text-white">{item.question}</span>
                        <div className="ml-4 shrink-0 text-slate-400">
                            {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    </section>
  );
};

export default FAQ;