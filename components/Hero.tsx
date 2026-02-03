
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-4 md:px-8 text-center max-w-6xl mx-auto">
      <div className="mb-6 flex justify-center">
        <span className="bg-gold/10 text-gold px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
          Conteúdo Estratégico
        </span>
      </div>
      <h1 className="font-serif italic text-4xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
        Eleve sua Prática Clínica com o <br className="hidden md:block" /> Plano Estratégico em EMDR
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
        Segurança e precisão neurobiológica para casos complexos com a Senior Trainer Silvia Guz. 
        Saia da insegurança para a maestria terapêutica.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="bg-gold hover:bg-[#a07e60] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-gold/20 transition-all transform hover:scale-105">
          Contratar Conteúdo Agora
        </button>
        <div className="flex items-center gap-2 text-gray-500">
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">Certificado Master de Conclusão</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
