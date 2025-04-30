import React from 'react';
import { Bot, Sparkles, Lock } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Titan AI
            </span> Builds and Operates Your Crypto Portfolio — Autonomously
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Titan creates custom AI agents based on your risk profile, token preferences, and strategy goals.
            These agents rebalance, optimize, and execute autonomously — so you don’t have to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-gray-800 shadow-xl order-last lg:order-first">
            <div className="absolute top-0 left-0 -mt-6 -ml-6 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 -mb-6 -mr-6 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"></div>

            <div className="relative bg-slate-900 p-5 rounded-lg border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Titan Agent Alpha</div>
                    <div className="text-sm text-blue-400">Yield Optimization Protocol</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Running</div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Current Strategy</span>
                    <span className="text-white font-medium">Dynamic Yield Farming</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Tolerance</span>
                    <span className="text-white font-medium">Moderate (6/10)</span>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Tokens Managed</span>
                    <span className="text-white font-medium">8 Assets</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['ETH', 'BTC', 'USDC', 'AAVE', 'MKR'].map((token, i) => (
                      <div key={i} className="px-2 py-1 rounded-md bg-blue-900/30 text-blue-400 text-xs">
                        {token}
                      </div>
                    ))}
                    <div className="px-2 py-1 rounded-md bg-slate-700 text-gray-400 text-xs">
                      +3
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Performance (30d)</span>
                    <span className="text-green-400 font-medium">+18.7%</span>
                  </div>
                  <div className="h-12 w-full flex items-end space-x-1">
                    {[...Array(30)].map((_, i) => {
                      const height = Math.random() * 70 + 30;
                      return (
                        <div
                          key={i}
                          className="grow bg-gradient-to-t from-blue-500 to-purple-600 rounded-t opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-700 pt-4">
                <div className="text-gray-400 text-sm mb-2">Recent Actions</div>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                      <Sparkles className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300">Rebalanced portfolio (ETH +5%, USDC -5%)</span>
                    <span className="ml-auto text-gray-500 text-xs">2h ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                      <Lock className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Staked 12.5 ETH in Lido for 4.2% APY</span>
                    <span className="ml-auto text-gray-500 text-xs">6h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">AI-Powered DeFi Management</h3>
              <p className="text-gray-400">
                Titan's AI agents operate autonomously, managing your portfolio with mathematical precision and 
                data-driven decisions—free from human emotion, sleep requirements, or attention limitations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-blue-400 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Define Your Preferences</h4>
                  <p className="text-gray-400">
                    Choose your risk level, target assets, and strategy style. Your AI agent adapts to your parameters and evolves as needed.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-blue-400 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Activate Your Agent</h4>
                  <p className="text-gray-400">
                    Your AI agent begins monitoring and managing your portfolio. You keep full custody — Titan never holds your funds.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-blue-400 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Earn Smarter Returns</h4>
                  <p className="text-gray-400">
                    Your portfolio is continuously optimized using live market data, rebalancing, and strategy shifts — 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25">
                Explore How Titan Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
