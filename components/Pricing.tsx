
import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif italic text-4xl md:text-6xl text-white font-bold mb-16">
          Sua jornada rumo à maestria.
        </h2>
        
        <div className="bg-[#242424] rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl shadow-black/50">
          <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-10 block">OPÇÕES DE INVESTIMENTO</span>
          
          <div className="mb-10">
            <p className="text-gray-400 text-xl font-light mb-2">12x de</p>
            <div className="flex items-center justify-center gap-4">
              <span className="font-serif italic text-7xl md:text-8xl text-gold font-bold">R$ 197,00</span>
            </div>
            <p className="text-gray-500 mt-4 font-medium tracking-wide">OU R$ 1.997,00 À VISTA</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto mb-12 text-left">
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-gold" />
              <span className="text-sm font-medium">Acesso Vitalício ao Conteúdo</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-gold" />
              <span className="text-sm font-medium">Suporte Estratégico Exclusivo</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-gold" />
              <span className="text-sm font-medium">Materiais de Apoio em PDF</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-gold" />
              <span className="text-sm font-medium">Aulas Mensais ao Vivo</span>
            </div>
          </div>
          
          <button className="w-full bg-gold hover:bg-[#c29d7c] text-white py-6 rounded-3xl text-xl font-bold transition-all shadow-xl shadow-gold/10 hover:shadow-gold/20 mb-8">
            Contratar Conteúdo Agora
          </button>
          
          <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
            <ShieldCheck size={14} className="text-gold/50" />
            TRANSAÇÃO 100% SEGURA & CRIPTOGRAFADA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
