
import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Coluna da Imagem */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              {/* Placeholder elegante que remete à foto */}
              <div style={{opacity: 0.05}}>
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              
              {/* Selo Flutuante */}
              <div className="about-badge">
                <p className="font-serif italic text-gray-900" style={{fontSize: '1.1rem', fontWeight: 700}}>
                  Senior Trainer EMDRIA
                </p>
                <p style={{fontSize: '9px', color: 'var(--color-gray-400)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.2em', marginTop: '0.3rem'}}>
                  Referência Internacional
                </p>
              </div>
            </div>
          </div>
          
          {/* Coluna de Texto */}
          <div className="about-text-column">
            <h2 className="font-serif about-name">
              Silvia Guz
            </h2>
            
            <blockquote className="font-serif about-quote">
              "Psicóloga com mais de 30 anos de experiência clínica, Senior Trainer EMDRIA e precursora da abordagem EMDR no Brasil. Referência absoluta em Neuroterapia e Trauma."
            </blockquote>
            
            <div className="tag-list">
              <div className="tag">
                <Award size={18} className="text-gold" strokeWidth={1.5} />
                <span>Master em Neuroterapia</span>
              </div>
              
              <div className="tag">
                <BookOpen size={18} className="text-gold" strokeWidth={1.5} />
                <span>Pioneira no Brasil</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
