import React from 'react';

const DefiEvolution: React.FC = () => {
  const evolutions = [
    {
      title: "DeFi 1.0",
      year: "2017-2020",
      description: "First-generation DeFi protocols offering basic lending, borrowing, and trading functionality. Limited composability and high gas fees.",
      examples: ["Uniswap V1", "Compound", "MakerDAO"],
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "DeFi 2.0",
      year: "2020-2023",
      description: "Improved scalability, reduced fees, and greater composability between protocols. Enhanced yield strategies and more complex products.",
      examples: ["Uniswap V3", "Aave", "Curve"],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "DeFi 3.0",
      year: "2023+",
      description: "AI-native autonomous finance, self-managing protocols, and personalized, autonomous portfolio management with minimal human input.",
      examples: ["Titan AI", "Neural Networks", "LLM Agents"],
      color: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Evolution of DeFi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From simple protocols to autonomous AI agents—the journey to truly self-managing finance
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 via-blue-700 to-purple-700 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {evolutions.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-gradient-to-br border-4 border-slate-950 shadow-lg hidden md:flex items-center justify-center z-10 text-white font-bold ${item.color}">
                  {index + 1}.0
                </div>
                
                <div className={`grid md:grid-cols-2 gap-4 ${index % 2 === 1 ? 'md:rtl' : ''}`}>
                  <div className={`bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-lg max-w-xl mx-auto md:mx-0 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-black/20 text-white">{item.year}</span>
                    </div>
                    <p className="text-gray-200 mb-4">{item.description}</p>
                    <div className="mt-4">
                      <div className="text-sm font-medium text-white mb-2">Key Protocols:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((ex, i) => (
                          <span key={i} className="px-2 py-1 rounded-md bg-black/20 text-white text-xs">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Callout */}
          <div className="mt-20 bg-gradient-to-r from-purple-900/50 to-slate-900 p-6 rounded-xl border border-purple-800/50 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">The Future is Autonomous</h3>
            <p className="text-gray-300 text-center">
              Titan AI represents the pinnacle of DeFi 3.0—a quantum leap beyond manual management and 
              first-generation yield strategies. By harnessing the power of artificial intelligence, we've 
              created truly autonomous financial agents that work for you around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefiEvolution;