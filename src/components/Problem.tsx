import React from 'react';
import { Clock, TrendingDown, Brain } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      title: "Wasted Time",
      description: "Most DeFi users spend 10–20 hours per week managing their portfolios — and still underperform the market."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-400" />,
      title: "Missed Yield",
      description: "Over $10B in yield is left unclaimed annually due to poor optimization and inefficient manual strategies."
    },
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      title: "Overwhelming Complexity",
      description: "Thousands of tokens, protocols, and market signals exceed human decision-making capacity — leading to errors and missed opportunities."
    }
  ];

  return (
    <section id="problem" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Problem with <span className="text-red-400">Manual</span> Crypto Management
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Even experienced crypto investors miss significant opportunities due to human limitations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-red-900/10 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 -mt-3 -mr-3 w-24 h-24 rounded-full bg-red-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="mb-4 p-3 rounded-lg bg-slate-900 inline-block border border-gray-800">
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-900/50 p-6 rounded-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-white mb-3">The Cost of Going Manual</h3>
              <p className="text-gray-400">
              Manual trading leads to poor timing, inconsistent risk exposure, and emotional mistakes. Crypto investors are losing 
              40–60% of potential returns simply by trying to manage everything themselves.
              </p>
            </div>
            <div className="md:w-1/3 bg-slate-900 p-5 rounded-lg border border-gray-800">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">40-60%</div>
                <div className="text-gray-400 text-sm">Potential yield lost without automation</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Manual Investors</span>
                  <span className="text-white">8-12% APY</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Optimized Strategy</span>
                  <span className="text-green-400">20-30% APY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;