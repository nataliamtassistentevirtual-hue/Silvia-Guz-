
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
    <div className={`module-item ${isOpen ? 'is-open' : ''}`}>
      <button onClick={onToggle} className="module-trigger">
        <div className="module-title-group">
          <span className="font-serif module-number">{number}</span>
          <h3 className="module-title">{title}</h3>
        </div>
        <div style={{
          padding: '0.75rem', 
          borderRadius: '50%', 
          backgroundColor: isOpen ? 'var(--color-gold)' : 'var(--color-gray-100)',
          color: isOpen ? 'white' : 'var(--color-gray-400)',
          display: 'flex',
          transition: 'all 0.3s'
        }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      <div className="module-content">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          {items.map((item, idx) => (
            <div key={idx} style={{display: 'flex', gap: '0.75rem', alignItems: 'start'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3" style={{marginTop: '4px'}}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p style={{color: 'var(--color-gray-600)', fontSize: '0.95rem'}}>{item}</p>
            </div>
          ))}
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
      items: ["Base neurobiológica do trauma", "Modelo PAI", "Neurociência aplicada"]
    },
    {
      number: "02",
      title: "Arquitetura do Plano Estratégico",
      items: ["Triagem estratégica", "Identificação de alvos", "Cronograma terapêutico"]
    }
  ];

  return (
    <section className="course-section">
      <div className="container" style={{maxWidth: '900px'}}>
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <p style={{color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.7rem', marginBottom: '1rem'}}>CONTEÚDO ESTRATÉGICO</p>
          <h2 className="font-serif" style={{fontSize: '3rem'}}>Estrutura do Aprendizado</h2>
        </div>
        
        <div className="module-list">
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
