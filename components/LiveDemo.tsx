import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Smartphone, MessageSquare, Phone } from 'lucide-react';

const AudioBar: React.FC<{ height: number; delay: number }> = ({ height, delay }) => (
    <motion.div
        className="w-1.5 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full"
        animate={{
            height: [height, height * 2.5, height],
            opacity: [0.5, 1, 0.5]
        }}
        transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        style={{ height }}
    />
);

const LiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);

  // Simulation steps
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
        if (step === 0) timer = setTimeout(() => setStep(1), 800);  // Ringing
        if (step === 1) timer = setTimeout(() => setStep(2), 2500); // User Speaks
        if (step === 2) timer = setTimeout(() => setStep(3), 5500); // AI Thinks/Speaks
        if (step === 3) timer = setTimeout(() => setStep(4), 8500); // Notification
    } else {
        setStep(0);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  return (
    <section id="demo" className="w-full py-32 px-6 relative overflow-hidden bg-black border-y border-white/5">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        {/* Left: Content */}
        <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Démo Interactive
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Écoutez la différence.<br />
                <span className="text-slate-500">Indiscernable du réel.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                KALL comprend les nuances, gère les interruptions et qualifie l'urgence. Lancez la simulation pour voir le traitement d'une fuite d'eau en temps réel.
            </p>

            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
                {isPlaying ? <Pause className="fill-black w-5 h-5" /> : <Play className="fill-black w-5 h-5" />}
                <span className="text-lg">{isPlaying ? "Arrêter la démo" : "Lancer la simulation"}</span>
            </button>

            {/* Steps Visualizer */}
            <div className="mt-12 space-y-6">
                 {/* Step 1 */}
                <div className={`flex items-center gap-4 transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step >= 1 ? 'bg-red-500/20 border-red-500 text-red-500' : 'border-white/10 text-slate-600'}`}>
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Appel entrant</h4>
                        <p className="text-slate-500 text-sm">M. Dupont • 06 12 34 56 78</p>
                    </div>
                </div>

                 {/* Step 2 */}
                <div className={`flex items-center gap-4 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step >= 2 ? 'bg-blue-500/20 border-blue-500 text-blue-500' : 'border-white/10 text-slate-600'}`}>
                        <div className="flex gap-0.5 items-end h-3">
                             <div className="w-1 h-3 bg-current rounded-full" />
                             <div className="w-1 h-2 bg-current rounded-full" />
                             <div className="w-1 h-4 bg-current rounded-full" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Analyse Vocale</h4>
                        <p className="text-slate-500 text-sm">Intention: "Urgence Fuite"</p>
                    </div>
                </div>

                 {/* Step 3 */}
                <div className={`flex items-center gap-4 transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step >= 3 ? 'bg-green-500/20 border-green-500 text-green-500' : 'border-white/10 text-slate-600'}`}>
                        <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">Action IA</h4>
                        <p className="text-slate-500 text-sm">RDV proposé + SMS de confirmation</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: Phone Visual */}
        <div className="flex-1 relative flex justify-center perspective-1000">
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[80px]" />

            <div className="relative w-[340px] h-[680px] bg-black border-4 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden z-20">
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                    {step > 0 && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />}
                    <div className="w-16 h-4 bg-zinc-900 rounded-full" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-zinc-900 flex flex-col relative">
                    
                    {/* Call UI */}
                    <div className={`absolute inset-0 flex flex-col items-center pt-24 pb-12 transition-all duration-500 ${step > 0 && step < 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                         
                         {/* Contact Avatar */}
                         <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center mb-6 shadow-lg">
                            <span className="text-3xl font-medium text-white">M</span>
                         </div>
                         <h3 className="text-2xl text-white font-semibold mb-2">M. Dupont</h3>
                         <p className="text-slate-400 text-sm mb-16">06 12 34 56 78</p>

                         {/* Audio Waves */}
                         <div className="flex items-center gap-1 h-12 mb-auto">
                            {step >= 2 && [...Array(10)].map((_, i) => (
                                <AudioBar key={i} height={Math.random() * 20 + 10} delay={i * 0.1} />
                            ))}
                         </div>

                         {/* Controls */}
                         <div className="flex gap-8 mt-12">
                             <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                                <Phone className="w-8 h-8 text-white rotate-[135deg]" />
                             </div>
                         </div>
                    </div>

                    {/* Notification UI (Result) */}
                    <motion.div 
                        initial={{ y: -120 }}
                        animate={{ y: step >= 4 ? 16 : -150 }}
                        className="absolute top-0 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-40 flex gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0 border border-white/10">
                            <span className="text-white font-bold">K</span>
                        </div>
                        <div>
                            <div className="flex justify-between w-full">
                                <h4 className="text-white font-bold text-sm">KALL IA</h4>
                                <span className="text-slate-400 text-[10px]">Maintenant</span>
                            </div>
                            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                                🔴 <span className="font-bold text-red-400">URGENCE DÉTECTÉE</span><br/>
                                Client: M. Dupont (Fuite)<br/>
                                <span className="text-green-400">✅ RDV fixé: Demain 14h00</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Idle State */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${step === 0 || step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-center">
                            <div className="text-6xl font-thin text-white mb-2">14:02</div>
                            <div className="text-slate-500 text-sm">Mardi 24 Octobre</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default LiveDemo;