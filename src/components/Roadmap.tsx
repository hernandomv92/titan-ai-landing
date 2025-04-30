import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [activeQuarter, setActiveQuarter] = useState(0);
  
  const quarters = [
    {
      title: "Q2 2025",
      name: "Foundation",
      description: "Establishing core infrastructure and AI models",
      milestones: [
        { text: "Complete AI agent architecture", completed: true },
        { text: "Private alpha testing with hedge fund partners", completed: true },
        { text: "Secure seed funding round", completed: true },
        { text: "Launch waitlist for early access", completed: false }
      ]
    },
    {
      title: "Q3 2025",
      name: "Beta Launch",
      description: "First public iteration of Titan AI agents",
      milestones: [
        { text: "Release beta version to 500 selected users", completed: false },
        { text: "Deploy first generation agents on Ethereum mainnet", completed: false },
        { text: "Integrate with top 5 DeFi protocols", completed: false },
        { text: "Complete security audits with Trail of Bits and OpenZeppelin", completed: false }
      ]
    },
    {
      title: "Q4 2025",
      name: "Expansion",
      description: "Scaling capabilities and expanding ecosystem",
      milestones: [
        { text: "Launch Titan token and governance framework", completed: false },
        { text: "Expand to Solana, Arbitrum, and Optimism", completed: false },
        { text: "Release agent customization interface", completed: false },
        { text: "Integrate DEX aggregation for optimal execution", completed: false }
      ]
    },
    {
      title: "Q1 2026",
      name: "Growth",
      description: "Network effects and advanced features",
      milestones: [
        { text: "Release advanced strategy marketplace", completed: false },
        { text: "Launch institutional-grade risk management tools", completed: false },
        { text: "Implement cross-chain bridging strategies", completed: false },
        { text: "Introduce agent-to-agent collaboration protocols", completed: false }
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Product Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our journey to revolutionize crypto portfolio management
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Quarter tabs */}
          <div className="flex mb-8 bg-slate-900 rounded-xl overflow-hidden border border-gray-800">
            {quarters.map((quarter, index) => (
              <button
                key={index}
                className={`flex-1 py-4 px-2 text-center transition-all ${
                  activeQuarter === index 
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveQuarter(index)}
              >
                <div className="text-sm md:text-base font-medium">{quarter.title}</div>
                <div className={`text-xs mt-1 ${activeQuarter === index ? 'text-purple-400' : 'text-gray-500'}`}>
                  {quarter.name}
                </div>
              </button>
            ))}
          </div>
          
          {/* Active quarter content */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-gray-800 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-purple-500/20 mr-4">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{quarters[activeQuarter].title}: {quarters[activeQuarter].name}</h3>
                <p className="text-gray-400">{quarters[activeQuarter].description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {quarters[activeQuarter].milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-lg ${
                    milestone.completed 
                      ? 'bg-green-900/20 border border-green-800/30' 
                      : 'bg-slate-800/50 border border-gray-700/30'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                    milestone.completed ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    {milestone.completed ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-xs text-white">{index + 1}</span>
                    )}
                  </div>
                  <span className={milestone.completed ? 'text-green-300' : 'text-gray-300'}>
                    {milestone.text}
                  </span>
                  {milestone.completed && (
                    <span className="ml-auto text-xs text-green-400 font-medium">Completed</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-gray-800 pt-6">
              <div className="flex items-center justify-between">
                <div className="text-gray-400 text-sm">
                  Progress: <span className="text-white font-medium">
                    {Math.round((quarters[activeQuarter].milestones.filter(m => m.completed).length / 
                    quarters[activeQuarter].milestones.length) * 100)}%
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="px-3 py-1 rounded-md bg-slate-800 text-gray-400 text-sm hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setActiveQuarter(prev => Math.max(0, prev - 1))}
                    disabled={activeQuarter === 0}
                  >
                    Previous
                  </button>
                  <button 
                    className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setActiveQuarter(prev => Math.min(quarters.length - 1, prev + 1))}
                    disabled={activeQuarter === quarters.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;