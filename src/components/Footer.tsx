import React from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Titan AI
            </div>
            <p className="text-gray-400 mb-4">
              Autonomous AI agents for crypto portfolio management. Hedge fund-grade returns without 
              spreadsheets, Discord threads, or manual trading.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#token" className="text-gray-400 hover:text-white transition-colors">Token</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">White Paper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Audits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and announcements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 border border-gray-700 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Titan AI. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;