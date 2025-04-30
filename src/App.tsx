import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import DefiEvolution from './components/DefiEvolution';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

// Add custom class for grid pattern
import './styles/index.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Titan AI | Autonomous Crypto Portfolio Management';
    
    // Update favicon to a better crypto/AI related one
    const link = document.querySelector('link[rel="icon"]');
    if (link) {
      link.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234F46E5"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <DefiEvolution />
      <Features />
      <Roadmap />
      <Team />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;