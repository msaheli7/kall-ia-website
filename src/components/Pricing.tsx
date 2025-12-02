import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PricingCard = ({ tier, price, features, recommended, annual }: any) => {
    const displayPrice = annual ? Math.round(price * 0.8) : price;
    
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className={`relative flex flex-col p-8 rounded-[2rem] h-full overflow-hidden transition-all duration-300 ${recommended ? 'bg-zinc-900/80 border border-blue-500/50' : 'glass-card'}`}
        >
            {/* Holographic Effects for Recommended */}
            {recommended && (
                 <>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-blue-500/30 blur-[80px] rounded-full pointer-events-none" />
                 </>
            )}

            {recommended && (
                <div className="absolute top-6 right-6">
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Populaire
                     </div>
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${recommended ? 'text-white' : 'text-slate-500'}`}>
                    {tier}
                </h3>
                <div className="flex items-end gap-1">
                    <AnimatePresence mode="wait">
                        <motion.span 
                            key={displayPrice}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-5xl font-bold text-white tracking-tight"
                        >
                            {displayPrice}€
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-slate-500 mb-1 font-medium">/mois</span>
                </div>
                {annual && <span className="text-xs text-green-400 font-bold mt-2 block tracking-wide">Économisez {Math.round(price * 0.2 * 12)}€ / an</span>}
            </div>

            <ul className="space-y-4 mb-10 flex-1">
                {features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${recommended ? 'bg-blue-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm tracking-wide ${
                recommended 
                ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
            }`}>
                Commencer le plan {tier}
            </button>
        </motion.div>
    );
};

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="w-full px-6 max-w-7xl mx-auto py-24 relative z-10">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tarification Simple</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Commencez gratuitement. Annulez à tout moment. Pas de frais cachés.</p>
        
        {/* Toggle */}
        <div className="inline-flex items-center p-1.5 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-md">
            <button 
                onClick={() => setAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!annual ? 'bg-white text-black shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
                Mensuel
            </button>
            <button 
                onClick={() => setAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${annual ? 'bg-white text-black shadow-lg' : 'text-slate-500 hover:text-white'}`}
            >
                Annuel
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">OFFRE -20%</span>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
        <PricingCard 
          tier="START"
          price={47}
          annual={annual}
          features={[
            "50 appels / mois",
            "Répondeur IA Standard",
            "Synthèse Email Quotidienne",
            "Numéro de renvoi"
          ]}
        />
        
        <PricingCard 
          tier="PRO"
          price={97}
          annual={annual}
          recommended={true}
          features={[
            "Appels Illimités",
            "Détection d'urgence & SMS",
            "Voix Premium 'Human-Like'",
            "Notification Instantanée",
            "Filtrage Anti-Spam",
            "Support Prioritaire"
          ]}
        />
        
        <PricingCard 
          tier="ELITE"
          price={197}
          annual={annual}
          features={[
            "Tout du plan PRO",
            "Prise de RDV Agenda",
            "Synchronisation Google/Outlook",
            "Numéro de ligne dédié",
            "Personnalisation du scénario",
            "Onboarding dédié"
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;