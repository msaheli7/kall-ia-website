import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, ShieldAlert, Calendar, Lock, Globe, Mic, Users } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, className, delay, gradient }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className={`group relative overflow-hidden rounded-3xl p-8 border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-800/30 transition-colors ${className}`}
  >
    {/* Hover Gradient Blob */}
    <div className={`absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 pointer-events-none`} />
    
    <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-slate-200" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full px-6 max-w-7xl mx-auto py-32">
      <div className="mb-24 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Une technologie <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">indiscernable de la magie.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
            Construit sur les derniers modèles LLM, KALL est plus rapide, plus intelligent et plus humain que n'importe quel autre assistant du marché.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
        
        {/* Large Card: NLP */}
        <FeatureCard 
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900/50 to-zinc-900/10"
            title="Intelligence Conversationnelle (NLP)"
            description="KALL ne suit pas un script robotique rigide. Elle comprend le contexte, l'ironie, les hésitations et adapte son ton en temps réel pour une conversation fluide et naturelle."
            icon={Globe}
            delay={0.1}
            gradient="from-blue-500 to-cyan-500"
        />
        
        {/* Latency */}
        <FeatureCard 
            className="md:col-span-1"
            title="Latence Zéro"
            description="Réponse en <800ms. Pas de 'blanc' gênant."
            icon={Zap}
            delay={0.2}
            gradient="from-yellow-500 to-orange-500"
        />

        {/* Spam */}
        <FeatureCard 
            className="md:col-span-1"
            title="Filtrage Spam"
            description="Bloque les démarchages CPF/Rénov instantanément."
            icon={ShieldAlert}
            delay={0.3}
            gradient="from-red-500 to-pink-500"
        />

        {/* Calendar: Tall */}
        <FeatureCard 
            className="md:col-span-1 md:row-span-2"
            title="Agenda Connecté"
            description="L'IA voit vos disponibilités en temps réel. Elle propose uniquement vos créneaux libres et envoie les invitations automatiquement (Google/Outlook)."
            icon={Calendar}
            delay={0.4}
            gradient="from-green-500 to-emerald-500"
        />

         {/* Multi-channel */}
         <FeatureCard 
            className="md:col-span-1"
            title="Synthèse SMS/Mail"
            description="Recevez un résumé écrit de chaque appel."
            icon={MessageSquare}
            delay={0.5}
            gradient="from-purple-500 to-indigo-500"
        />

        {/* Voice Quality */}
         <FeatureCard 
            className="md:col-span-1"
            title="Voix Haute Fidélité"
            description="Intonations humaines, respirations, 'hmm' naturels."
            icon={Mic}
            delay={0.6}
            gradient="from-pink-500 to-rose-500"
        />

        {/* Security: Wide */}
         <FeatureCard 
            className="md:col-span-1 md:col-start-4"
            title="Sécurité Bancaire"
            description="Chiffrement AES-256 de bout en bout."
            icon={Lock}
            delay={0.7}
            gradient="from-slate-500 to-white"
        />
      </div>
    </section>
  );
};

export default Features;