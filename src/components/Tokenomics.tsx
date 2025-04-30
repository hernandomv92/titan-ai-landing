import React from 'react';
import { DollarSign, Users, Lock, Globe } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const tokenData = [
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Initial Circulating Supply", value: "150,000,000" },
    { label: "Initial Market Cap", value: "$15,000,000" },
    { label: "Token Type", value: "ERC-20" }
  ];

  const allocations = [
    { category: "Community Treasury", percentage: 40, color: "bg-blue-500" },
    { category: "Team & Advisors", percentage: 20, color: "bg-purple-600" },
    { category: "Ecosystem Growth", percentage: 15, color: "bg-indigo-500" },
    { category: "Early Investors", percentage: 15, color: "bg-cyan-500" },
    { category: "Liquidity Provision", percentage: 10, color: "bg-teal-500" }
  ];

  return (
    <section id="token" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TITAN
            </span> Token
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Powering the next generation of autonomous finance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-gray-800 shadow-xl">
            <div className="relative mb-8">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl opacity-70"></div>
              
              <div className="relative">
                <div className="flex justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">Token Details</h3>
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                    $TITAN
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {tokenData.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700/50">
                      <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-lg font-medium text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Token Allocation</h4>
              
              <div className="space-y-4">
                <div className="flex h-6 rounded-full overflow-hidden">
                  {allocations.map((allocation, index) => (
                    <div 
                      key={index}
                      className={`${allocation.color}`}
                      style={{ width: `${allocation.percentage}%` }}
                    ></div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {allocations.map((allocation, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${allocation.color} mr-2`}></div>
                      <span className="text-gray-300 text-sm">{allocation.category}</span>
                      <span className="ml-auto text-white font-medium text-sm">{allocation.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <div className="text-sm text-gray-400 mb-4">Vesting Schedule</div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-32 text-sm text-gray-400">Team & Advisors</div>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="w-24 text-right text-sm text-gray-300">2 year cliff</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-32 text-sm text-gray-400">Early Investors</div>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="w-24 text-right text-sm text-gray-300">1 year cliff</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-32 text-sm text-gray-400">Community</div>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="w-24 text-right text-sm text-gray-300">No cliff</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Token Utility</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Staking Rewards</h4>
                  <p className="text-gray-400">
                    Stake TITAN tokens to earn a share of protocol revenue and receive enhanced agent capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Governance</h4>
                  <p className="text-gray-400">
                    Vote on important protocol decisions, including new agent strategies, fee structures, and treasury allocations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Access Control</h4>
                  <p className="text-gray-400">
                    Hold TITAN tokens to access premium AI agent features, early strategy releases, and higher portfolio limits.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 shrink-0">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Network Growth</h4>
                  <p className="text-gray-400">
                    Participate in referral programs and community incentives for expanding the Titan ecosystem.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg border border-blue-800/30">
                <h4 className="text-lg font-medium text-white mb-2">Early Access Token Allocation</h4>
                <p className="text-gray-300 mb-4">
                  Join our waitlist to be eligible for the early supporter token allocation. Early adopters receive 
                  exclusive benefits and token grants based on their portfolio size and activity.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 w-full">
                  Join Token Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;