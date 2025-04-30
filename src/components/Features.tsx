import React from 'react';
import { Bot, Cpu, Zap, LineChart, Shield, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: "Fully Autonomous",
      description: "Deploy AI agents that operate 24/7 without human intervention, constantly monitoring and optimizing your portfolio."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-400" />,
      title: "Emotionally Neutral",
      description: "Eliminate fear, greed, and other emotional biases from your investing strategy with mathematically-driven decisions."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Risk-Controlled",
      description: "Set specific risk parameters and constraints that your agent strictly follows, preserving your capital during market turbulence."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Lightning Fast",
      description: "Execute trades and position adjustments in milliseconds, capitalizing on fleeting opportunities before they disappear."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "Advanced ML Models",
      description: "Leverage sophisticated machine learning algorithms trained on terabytes of market data to predict trends and identify opportunities."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Time-Saving",
      description: "Reclaim hundreds of hours spent researching, trading, and monitoring positions—let your agent handle the heavy lifting."
    }
  ];

  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Advanced AI</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hedge fund capabilities accessible to everyone through autonomous AI agents
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-gray-800 shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-lg bg-slate-900 inline-block border border-gray-800">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-xl border border-gray-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Performance Comparison</h3>
                <p className="text-gray-400 mb-6">
                  Titan AI agents consistently outperform manual trading strategies, passive index investments, 
                  and traditional fund managers by leveraging machine learning, real-time data analysis, and 
                  lightning-fast execution.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Titan AI Agent</div>
                    <div className="flex-1 h-6 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="w-16 text-right text-green-400 font-medium">+27.4%</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Hedge Funds</div>
                    <div className="flex-1 h-6 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="w-16 text-right text-green-400 font-medium">+18.7%</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Manual Trading</div>
                    <div className="flex-1 h-6 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-700 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                    <div className="w-16 text-right text-green-400 font-medium">+12.3%</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Index ETF</div>
                    <div className="flex-1 h-6 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-800 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="w-16 text-right text-green-400 font-medium">+8.9%</div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">*Annual returns, based on backtested data from 2022-2023</div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-8 lg:border-l lg:border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Advantage: Titan AI</h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-blue-400 font-medium">01</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Real-time analysis</h4>
                      <p className="text-gray-400 text-sm">
                        Process millions of data points per second from market feeds, news, and on-chain metrics
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-blue-400 font-medium">02</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Multi-chain optimization</h4>
                      <p className="text-gray-400 text-sm">
                        Identify highest yield opportunities across 15+ blockchains and thousands of protocols
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-blue-400 font-medium">03</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Continuous learning</h4>
                      <p className="text-gray-400 text-sm">
                        Agents improve over time by learning from their own transactions and market responses
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                      <span className="text-blue-400 font-medium">04</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Risk mitigation</h4>
                      <p className="text-gray-400 text-sm">
                        Advanced hedging strategies and dynamic position sizing based on market volatility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;