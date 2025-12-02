import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 px-6 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-16">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                     <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                        <span className="font-bold text-black text-sm font-sans">K</span>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">KALL IA</span>
                </div>
                <p className="text-slate-500 text-sm max-w-sm mb-8 leading-relaxed">
                    La première intelligence artificielle vocale conçue spécifiquement pour les artisans, les professions libérales et les PME françaises.
                </p>
                <div className="flex gap-4">
                    {/* Socials placeholders */}
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Produit</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Fonctionnalités</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Tarifs</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Témoignages</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Intégrations</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Légal</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Mentions Légales</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Politique de Confidentialité</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">CGV</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact Support</li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-slate-600 text-xs">
                © {new Date().getFullYear()} KALL IA SAS. Tous droits réservés.
            </span>
            <div className="flex items-center gap-2 text-slate-600 text-xs">
                <span>Fait avec</span>
                <span className="text-red-500">❤️</span>
                <span>à Paris, France.</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;