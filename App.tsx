
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseStructure from './components/CourseStructure';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      <Header />
      <main>
        <Hero />
        <CourseStructure />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
