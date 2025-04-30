import React from 'react';
import {
  Bot,
  LayoutDashboard,
  Clock,
  ShieldCheck,
  SlidersHorizontal,
  Cpu,
} from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: "Autonomous Portfolio Management",
    description:
      "Titan’s AI agents execute trades, rebalance, and optimize your portfolio automatically — based on your preferences.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-400" />,
    title: "Personalized Strategies",
    description:
      "Each agent adapts to your goals, tokens, and risk appetite. No one-size-fits-all approach.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "Live Optimization",
    description:
      "24/7 data analysis enables real-time decisions — not daily or weekly adjustments.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    title: "Risk Controls",
    description:
      "Built-in safeguards prevent overexposure and ensure your capital is managed responsibly.",
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6 text-blue-400" />,
    title: "Self-Custody by Design",
    description:
      "You stay in control. Titan never holds or touches your assets — all decisions are made via smart contracts.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Institutional-Grade Results",
    description:
      "Access performance previously limited to hedge funds and quant firms — now automated and accessible.",
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hedge Fund Power,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Automated for You
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Titan AI brings institutional-grade investing to everyone by replacing manual effort with intelligent, self-optimizing agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition-all"
            >
              <div className="mb-4 p-3 rounded-lg bg-slate-800 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
