"use client";

import React, { useState, useEffect } from "react";

const agents = [
  "🚀 DeFi Yield Optimizer Agent",
  "🔄 Cross-Chain Bridge Coordinator",
  "⚡ MEV Protection Agent",
  "🎮 GameFi Analytics Agent", 
  "🛠️ Smart Contract Auditor",
  "📊 Portfolio Rebalancing Agent",
  "🔗 Liquidity Pool Manager",
  "🎪 NFT Floor Price Tracker",
  "🌐 Multi-Chain Asset Monitor",
  "⚙️ Gas Fee Optimizer",
  "🎛️ Yield Farming Assistant",
  "📈 Technical Analysis Agent",
  "🔮 Market Sentiment Analyzer",
  "🎮 DAO Governance Assistant",
  "💰 Arbitrage Opportunity Scout",
  "🔄 Automated Trading Executor",
  "🏗️ Protocol Health Monitor",
  "📱 Wallet Security Guardian",
  "⚙️ Transaction Cost Calculator",
  "🌟 Token Launch Tracker",
  "🔒 Multi-Sig Coordinator",
  "📝 Documentation Generator",
  "🎯 Risk Assessment Agent",
  "💸 Treasury Management Bot"
];

const RoleChainAnswers = () => {
  const [visibleAgents, setVisibleAgents] = useState<string[][]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create initial rows of agents
    const createRows = () => {
      const rows = [];
      for (let i = 0; i < 4; i++) {
        const rowAgents = [];
        for (let j = 0; j < 6; j++) {
          const agentIndex = (i * 6 + j) % agents.length;
          rowAgents.push(agents[agentIndex]);
        }
        rows.push(rowAgents);
      }
      return rows;
    };

    setVisibleAgents(createRows());
  }, []);

  const handleAgentClick = (agent: string) => {
    console.log(`Selected agent: ${agent}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative mx-auto w-full max-w-screen-xl pt-[12rem] bg-primary">
      <div className="text-center space-y-8 px-4">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
            Agent
          </span>{" "}
          <span className="text-white">Orchestration layer</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium mt-4">
          Discover, deploy, and orchestrate AI agents across Web3. Browse our marketplace of specialized agents for every blockchain use case.
        </p>

        {/* Agents grid with right-to-left sliding */}
        <div className="mt-12 space-y-3 overflow-hidden relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
          
          {visibleAgents.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-2 animate-slide-right"
              style={{
                animationDelay: `${rowIndex * 0.5}s`,
                animationDuration: '30s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {/* Duplicate the row to create seamless infinite scroll */}
              {[...row, ...row].map((agent, index) => (
                <button
                  key={`${rowIndex}-${index}`}
                  onClick={() => handleAgentClick(agent)}
                  className="group relative whitespace-nowrap rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 px-4 py-2 text-sm text-white/90 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FF6600]/20 hover:via-[#F700F7]/20 hover:to-[#0078F6]/20 hover:border-white/40 hover:scale-105 flex-shrink-0"
                >
                  <span className="block">
                    {agent}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Search for agents input - Positioned at bottom */}
      <div className="mb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4">
              {/* Research tag */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl text-purple-300 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
                <span>Research</span>
              </div>

              {/* Search input */}
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 border-none bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-0 focus:border-transparent px-4 py-4"
              />

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                {/* Grid/Apps button */}
                <button className="p-3 hover:bg-white/10 rounded-xl transition-all duration-200">
                  <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>

                {/* Send button */}
                <button className="p-3 bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] hover:opacity-90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-8 px-4 mt-16">
        {/* Learn more section */}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default RoleChainAnswers; 