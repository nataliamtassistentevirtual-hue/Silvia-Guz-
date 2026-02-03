
import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="font-serif text-center" style={{fontSize: '4rem', marginBottom: '4rem'}}>
          Sua jornada rumo à maestria.
        </h2>
        
        <div className="pricing-card">
          <p style={{color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.7rem', marginBottom: '3rem'}}>OPÇÕES DE INVESTIMENTO</p>
          
          <div style={{marginBottom: '3rem'}}>
            <p style={{color: 'var(--color-gray-400)', fontSize: '1.25rem', fontWeight: 300}}>12x de</p>
            <h3 className="font-serif price-main text-gold">R$ 197,00</h3>
            <p style={{color: 'var(--color-gray-500)', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 600}}>OU R$ 1.997,00 À VISTA</p>
          </div>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <CheckCircle2 size={20} className="text-gold" />
              <span style={{fontSize: '0.9rem', fontWeight: 500}}>Acesso Vitalício</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <CheckCircle2 size={20} className="text-gold" />
              <span style={{fontSize: '0.9rem', fontWeight: 500}}>Suporte VIP</span>
            </div>
          </div>
          
          <button className="btn-primary" style={{width: '100%', padding: '1.5rem'}}>
            Contratar Conteúdo Agora
          </button>
          
          <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: 0.5, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em'}}>
            <ShieldCheck size={14} />
            TRANSAÇÃO 100% SEGURA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
