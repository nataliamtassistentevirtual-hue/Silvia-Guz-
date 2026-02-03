
import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Coluna da Imagem - Agora com largura máxima controlada */}
          <div className="relative w-full lg:w-[42%] flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px]">
              {/* Moldura da Imagem Principal */}
              <div className="aspect-[3.5/5] bg-[#F8F8F8] rounded-[3.5rem] overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center relative">
                {/* Placeholder de Imagem minimalista */}
                <div className="opacity-[0.03]">
                  <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                
                {/* Overlay de textura sutil para não parecer vazio */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02]"></div>
              </div>

              {/* Selo Flutuante - Posicionado conforme a foto, levemente sobreposto à borda inferior */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white px-7 py-5 rounded-[2.2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 min-w-[240px] z-10">
                <p className="font-serif italic text-gray-900 text-lg font-bold leading-tight">
                  Senior Trainer EMDRIA
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mt-1.5">
                  Referência Internacional
                </p>
              </div>
            </div>
          </div>
          
          {/* Coluna de Texto - Com mais respiro e tipografia refinada */}
          <div className="w-full lg:w-[58%] mt-16 lg:mt-0 lg:pl-4">
            <h2 className="font-serif italic text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              Silvia Guz
            </h2>
            
            <blockquote className="font-serif italic text-gray-500 text-xl md:text-2xl leading-[1.6] mb-12 max-w-2xl">
              "Psicóloga com mais de 30 anos de experiência clínica, Senior Trainer EMDRIA e precursora da abordagem EMDR no Brasil. Referência absoluta em Neuroterapia e Trauma."
            </blockquote>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 border border-gray-100 bg-white px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                <Award size={18} className="text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-gray-600">Master em Neuroterapia</span>
              </div>
              
              <div className="flex items-center gap-3 border border-gray-100 bg-white px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                <BookOpen size={18} className="text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-gray-600">Pioneira no Brasil</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
