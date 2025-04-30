import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Titan AI
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#token" className="text-gray-300 hover:text-white transition-colors">Token</a>
          </div>
          
          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25">
            Request Access
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 mt-4 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#problem" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Problem</a>
              <a href="#solution" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Solution</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Roadmap</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Team</a>
              <a href="#token" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Token</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25">
                Request Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;