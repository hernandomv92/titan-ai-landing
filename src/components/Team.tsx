import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: "Alexandra Chen",
      role: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Former Quantitative Analyst at Citadel with 8+ years in algorithmic trading. MSc in Machine Learning from Stanford.",
      background: ["Citadel", "Goldman Sachs", "Stanford"]
    },
    {
      name: "Marcus Williams",
      role: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Ethereum core developer and smart contract security expert. Previously at ConsenSys and the Ethereum Foundation.",
      background: ["Ethereum Foundation", "ConsenSys", "MIT"]
    },
    {
      name: "Sophia Rodriguez",
      role: "Chief AI Officer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "AI researcher specializing in reinforcement learning. Led ML development at DCG's crypto trading division for 5 years.",
      background: ["Digital Currency Group", "DeepMind", "Berkeley"]
    }
  ];

  return (
    <section id="team" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experienced leaders from finance, blockchain, and artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-gray-800 shadow-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  {member.bio}
                </p>
                
                <div className="mt-4 mb-6">
                  <div className="text-sm text-gray-400 mb-2">Background</div>
                  <div className="flex flex-wrap gap-2">
                    {member.background.map((bg, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-blue-900/30 text-blue-400 text-xs">
                        {bg}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">
            Our team combines expertise from Wall Street, Silicon Valley, and the blockchain industry to build
            the future of autonomous finance. With decades of collective experience in quantitative trading,
            distributed systems, and machine learning, we're uniquely positioned to revolutionize crypto portfolio management.
          </p>
          
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            View all team members
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;