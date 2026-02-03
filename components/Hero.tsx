
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <div style={{marginBottom: '1.5rem'}}>
          <span className="tag" style={{display: 'inline-flex', padding: '0.4rem 1rem', background: 'rgba(176, 141, 109, 0.1)', border: 'none', color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 600}}>
            CONTEÚDO ESTRATÉGICO
          </span>
        </div>
        <h1 className="font-serif hero-title">
          Eleve sua Prática Clínica com o <br /> Plano Estratégico em EMDR
        </h1>
        <p className="hero-subtitle">
          Segurança e precisão neurobiológica para casos complexos com a Senior Trainer Silvia Guz. 
          Saia da insegurança para a maestria terapêutica.
        </p>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem'}}>
          <button className="btn-primary">
            Contratar Conteúdo Agora
          </button>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray-500)', fontSize: '0.875rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Certificado Master de Conclusão</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
