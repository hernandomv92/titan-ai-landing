import React from 'react';

const teamMembers = [
  {
    name: 'David Simic',
    role: 'CEO',
    image: 'https://i.imgur.com/YKMxxI6.png',
    bio: `Stanford PhD, ex-Citadel quant with 10+ years in hedge funds and quant trading. Co-managed 8-figure and ran personal 7-figure crypto portfolios.`,
    tags: ['Citadel', 'Fund Launch', 'Stanford'],
  },
  {
    name: 'Furqaan Afzal',
    role: 'CTO',
    image: 'https://i.imgur.com/U7o2cZR.png',
    bio: `Ethereum Foundation grant recipient. Dartmouth AI researcher + EVM security auditor. Full stack AI + Solidity builder.`,
    tags: ['Ethereum Foundation', 'Dartmouth', 'Security'],
  },
  {
    name: 'Steven Cook',
    role: 'COO',
    image: 'https://i.imgur.com/tep35YP.jpeg',
    bio: `Founder & manager at Dira, a crypto hedge fund. Former investor at Digital Currency Group. 5+ years in crypto and institutional capital markets.`,
    tags: ['DCG', 'Crypto Funds', 'Hedge'],
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Titan Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experienced leaders from hedge funds, Ethereum, and AI research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-purple-400">{member.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
