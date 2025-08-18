"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import coin from "@/assets/images/Rolechain Token 1.webp";
import icon from "@/assets/hero-icon/icon.webp"
import icon2 from "@/assets/hero-icon/icon2.webp"
import icon3 from "@/assets/hero-icon/icon3.webp"
import icon4 from "@/assets/hero-icon/icon4.webp"
import icon5 from "@/assets/hero-icon/icon5.webp"
import icon1 from "@/assets/hero-icon/icon1.webp"
import icon6 from "@/assets/hero-icon/icon.svg"
import { useState, useEffect } from "react";
import PartnerLogos from "./partners";

// Agent marketplace data
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

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Initialize agents immediately to avoid hydration issues
  const createAgentRows = () => {
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
  
  const [visibleAgents, setVisibleAgents] = useState<string[][]>(createAgentRows());

  useEffect(() => {
    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      // Handle resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const generateIconPositions = (numIcons: number, radius: number) => {
    return Array.from({ length: numIcons }).map((_, index) => {
      const angle = (index * 2 * Math.PI) / numIcons;
      const responsiveRadius = windowWidth >= 1024 ? radius * 1.5 : radius;
      const x = responsiveRadius * Math.cos(angle);
      const y = responsiveRadius * Math.sin(angle);
      return { x, y, angle: (angle * 180) / Math.PI };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userEmailResponse = await fetch('https://api.rolechain.org/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
        }),
      });

      if (userEmailResponse.ok) {
        setShowPopup(false);
        setFormData({ name: '', email: '' });
        setShowSuccess(true);
        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error('Failed to send emails');
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  const handleAgentClick = (agent: string) => {
    console.log(`Selected agent: ${agent}`);
  };

  return (
    <section
      className="relative  bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-transparent "
      id="hero"
    >
      <div className="top-4 left-0 w-full select-none place-items-center text-center uppercase absolute grid md:-top-6 lg:-top-[45px] z-0">
        <p className="font-outline bg-gradient-to-b from-[#C193FD] to-transparent to-60% bg-clip-text text-[100px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold tracking-tight text-[#3C0C3E] opacity-50 md:text-[#3C0C3E] md:opacity-50">
        Agents
        </p>
      </div>

      {/* Agent Marketplace Section */}
      <div className="relative mx-auto w-full max-w-screen-xl pt-[8rem] md:pt-[12rem]">
        <div className="text-center space-y-6 md:space-y-8 px-4">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
            Orchestration
            </span>{" "}
            <span className="text-white">layer</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium mt-4 px-2">
            Discover, deploy, and orchestrate AI agents across Web3. Browse our marketplace of specialized agents for every blockchain use case.
          </p>

          {/* Agents grid with right-to-left sliding */}
          <div className="mt-8 md:mt-12 space-y-3 md:space-y-3 overflow-hidden relative min-h-[240px] py-4">
            {/* Left fade overlay - only on desktop */}
            <div className="absolute left-0 top-0 w-0 md:w-32 h-full bg-gradient-to-r from-[#0E0E21] via-[#0E0E21]/50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade overlay - only on desktop */}
            <div className="absolute right-0 top-0 w-0 md:w-32 h-full bg-gradient-to-l from-[#0E0E21] via-[#0E0E21]/50 to-transparent z-10 pointer-events-none"></div>
            
            {visibleAgents.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-2 md:gap-2 animate-slide-right"
                style={{
                  animationDelay: `${rowIndex * 0.5}s`,
                  animationDuration: '30s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear'
                }}
              >
                {/* Duplicate the row to create seamless infinite scroll */}
                {[...row, ...row, ...row].map((agent, index) => (
                  <button
                    key={`${rowIndex}-${index}`}
                    onClick={() => handleAgentClick(agent)}
                    className="group relative whitespace-nowrap rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm text-white/90 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FF6600]/20 hover:via-[#F700F7]/20 hover:to-[#0078F6]/20 hover:border-white/40 hover:scale-105 flex-shrink-0"
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
        <div className="mt-12 md:mt-31 mb-8 md:mb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                {/* Research tag */}
                <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg md:rounded-xl text-purple-300 text-sm font-medium flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                  <span>Research</span>
                </div>

                {/* Search input */}
                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="flex-1 border-none bg-transparent text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:ring-0 focus:border-transparent px-3 py-3 md:px-4 md:py-4 min-w-0"
                />

                {/* Action buttons */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  {/* Grid/Apps button */}
                  <button className="p-2.5 md:p-3 hover:bg-white/10 rounded-lg md:rounded-xl transition-all duration-200 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6zM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2zM14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z" />
                    </svg>
                  </button>

                  {/* Send button */}
                  <button className="p-2.5 md:p-3 bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] hover:opacity-90 rounded-lg md:rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/30 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-xl md:rounded-2xl bg-gradient-to-b from-[#3C1542] to-[#1E1E2E] p-6 md:p-8 shadow-xl mx-4">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 md:right-6 md:top-6 text-gray-400 hover:text-white transition-colors text-xl"
            >
              ✕
            </button>
            <div className="mb-6 space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-white">Get Early Access</h2>
              <p className="text-sm text-gray-300">Join our exclusive beta testing. We&apos;ll send the MVP access link to your email.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-lg bg-[#272638] p-3 text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-base"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg bg-[#272638] p-3 text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] p-3 md:p-4 text-white font-medium hover:opacity-90 transform transition-all duration-200 hover:scale-[0.98] text-base"
              >
                Get Access
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-green-500 p-3 md:p-4 text-white shadow-lg max-w-[calc(100vw-2rem)] mx-4">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm md:text-base">Successfully joined the waitlist!</p>
          </div>
        </div>
      )}

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

      {/* Position PartnerLogos at the bottom right */}
      
    </section>
  );
};

export default HeroSection;
