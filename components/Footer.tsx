
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <div className="mb-2">
            <span className="font-serif italic text-3xl font-bold tracking-tight">Silvia Guz</span>
          </div>
          <p className="text-gray-500 text-[10px] tracking-[0.3em] font-bold uppercase">Excelência em Terapia de Trauma</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12">
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">TERMOS</a>
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">PRIVACIDADE</a>
          <a href="#" className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">ADMIN</a>
        </div>
        
        <div>
          <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
            © 2024 Silvia Guz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
