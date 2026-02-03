
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ModuleProps {
  number: string;
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const Module: React.FC<ModuleProps> = ({ number, title, items, isOpen, onToggle }) => {
  return (
    <div className={`border border-black/5 bg-white rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-xl' : 'shadow-sm hover:shadow-md'}`}>
      <button 
        onClick={onToggle}
        className="w-full px-8 py-10 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-8">
          <span className="font-serif italic text-4xl text-gray-200 group-hover:text-gold/30 transition-colors">{number}</span>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className={`p-3 rounded-full transition-colors ${isOpen ? 'bg-gold text-white' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-8 pb-10 border-t border-gray-50">
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 mt-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseStructure: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      number: "01",
      title: "Fundamentos da Neuroterapia",
      items: [
        "Base neurobiológica do trauma e memória",
        "Modelo PAI (Processamento Adaptativo de Informações)",
        "A neurociência do reprocessamento em profundidade"
      ]
    },
    {
      number: "02",
      title: "Arquitetura do Plano Estratégico",
      items: [
        "Triagem estratégica para alta complexidade",
        "Identificação de alvos prioritários",
        "Cronograma terapêutico individualizado",
        "Ferramentas de avaliação dinâmica"
      ]
    },
    {
      number: "03",
      title: "Manejo de Bloqueios e Impasses",
      items: [
        "Entrelaçamentos cognitivos e somatossensoriais",
        "Estratégias para processamentos circulares",
        "Trabalhando com defesas e resistências inconscientes",
        "Desbloqueio de fluxos traumáticos congelados"
      ]
    },
    {
      number: "04",
      title: "Consolidação e Alta Terapêutica",
      items: [
        "Integração das redes de memória adaptativa",
        "Protocolo de encerramento estratégico",
        "Prevenção de recaídas e pós-tratamento",
        "Verificação de resultados neuroclínicos"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">CONTEÚDO ESTRATÉGICO</span>
          <h2 className="font-serif italic text-4xl md:text-5xl font-bold text-gray-900">Estrutura do Aprendizado</h2>
        </div>
        
        <div className="space-y-6">
          {modules.map((mod, index) => (
            <Module 
              key={index}
              number={mod.number}
              title={mod.title}
              items={mod.items}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
