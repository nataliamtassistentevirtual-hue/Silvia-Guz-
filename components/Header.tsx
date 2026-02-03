
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl font-bold text-gray-800">Silvia Guz</span>
        </div>
        <button className="bg-black text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase hover:bg-gray-800 transition-colors">
          CONTRATAR CONTEÚDO
        </button>
      </div>
    </header>
  );
};

export default Header;
