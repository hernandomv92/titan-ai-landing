import React from 'react';
import { MousePointer, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        {/* Animated particles (simplified CSS version) */}
        <div className="particles absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, ${Math.random() * 0.5 + 0.2})`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(100, 100, 255, 0.5)`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
              <MousePointer size={14} className="mr-1" />
              <span>Autonomous DeFi 3.0</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let Your Crypto Capital <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Think for Itself
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg">
              Deploy autonomous AI agents that manage, optimize, and grow your crypto portfolio based on your preferences—no spreadsheets, Discord alerts, or manual trades required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 text-lg flex items-center justify-center">
                Request Early Access
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="px-8 py-3 rounded-full font-medium border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all text-lg">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
              
              {/* Trading visualization mockup */}
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-white">Titan AI <span className="text-sm text-blue-400">Agent #1337</span></div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Active</div>
                </div>
                
                <div className="flex-1 relative">
                  {/* Chart mockup */}
                  <div className="h-full w-full flex items-end space-x-1">
                    {[...Array(40)].map((_, i) => {
                      const height = Math.random() * 60 + 40;
                      return (
                        <div 
                          key={i} 
                          className="grow bg-gradient-to-t from-blue-500 to-purple-600 rounded-t opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      );
                    })}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent"></div>
                </div>
                
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-3 border border-gray-700/50">
                      <div className="text-sm text-gray-400">Total Balance</div>
                      <div className="text-xl font-semibold text-white">$138,492</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3 border border-gray-700/50">
                      <div className="text-sm text-gray-400">30d Profit</div>
                      <div className="text-xl font-semibold text-green-400">+22.4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech badges */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 shadow-lg">
              {['AI', 'ML', 'DeFi', 'Web3'].map((tech, i) => (
                <div key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;