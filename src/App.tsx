import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Problem from './components/Problem';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Deep Space Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-[1600px] flex flex-col gap-0">
          <Hero />
          <Problem />
          <Pricing />
          <LiveDemo />
          <Features />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;