"use client";

import { useEffect, useState } from "react";
import { LuArrowDown, LuBrain, LuNetwork, LuShieldCheck, LuBarChart, LuUsers, LuCode, LuDatabase, LuZap } from "react-icons/lu";
import useMatchMedia from "@/hooks/useMediaQuery";

const capabilities = [
  {
    icon: <LuBrain className="h-8 w-8 text-yellow-500" />,
    name: "Autonomous Intelligence",
    desc: "Self-evolving AI agents that adapt to market conditions and community needs in real-time.",
  },
  {
    icon: <LuNetwork className="h-8 w-8 text-yellow-500" />,
    name: "Decentralized Infrastructure",
    desc: "Distributed node network ensuring maximum uptime and censorship resistance.",
  },
  {
    icon: <LuShieldCheck className="h-8 w-8 text-yellow-500" />,
    name: "Enhanced Security",
    desc: "Multi-layer protection with blockchain-based verification and AI threat detection.",
  },
  {
    icon: <LuBarChart className="h-8 w-8 text-yellow-500" />,
    name: "Market Analytics",
    desc: "Real-time DeFi insights powered by advanced pattern recognition algorithms.",
  },
  {
    icon: <LuUsers className="h-8 w-8 text-yellow-500" />,
    name: "Community Governance",
    desc: "Democratic decision-making through decentralized autonomous organization (DAO).",
  },
  {
    icon: <LuCode className="h-8 w-8 text-yellow-500" />,
    name: "Smart Contracts",
    desc: "Automated execution of complex operations with built-in safety mechanisms.",
  },
  {
    icon: <LuDatabase className="h-8 w-8 text-yellow-500" />,
    name: "Data Sovereignty",
    desc: "Users maintain complete control over their data with encrypted storage.",
  },
  {
    icon: <LuZap className="h-8 w-8 text-yellow-500" />,
    name: "Lightning Performance",
    desc: "High-throughput processing optimized for Web3 scale operations.",
  },
];

const CoreCapabilities = () => {
  const isMobile = useMatchMedia(640);
  const [currentCapabilities, setCurrentCapabilities] = useState(
    isMobile ? capabilities.slice(0, 4) : capabilities
  );

  useEffect(() => {
    setCurrentCapabilities(isMobile ? capabilities.slice(0, 3) : capabilities);
  }, [isMobile]);

  function loadMore() {
    setCurrentCapabilities(capabilities);
  }

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32 py-24" id="capabilities">
      <div className="space-y-16">
        <div className="space-y-6 text-center">
          <h2 className="text-[42px] font-bold leading-[46px] md:text-6xl">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Core Capabilities
            </span>{" "}
            of RoleChain
          </h2>
          <h4 className="text-xl text-gray-400 md:text-2xl">
            Pioneering the Future of Decentralized AI Infrastructure
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentCapabilities.map((capability) => (
            <div
              key={capability.name}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/50 p-[30px] transition-all hover:border-yellow-500/40"
            >
              <div className="relative z-10 flex flex-row gap-5 md:flex-col">
                <div className="flex-shrink-0">
                  {capability.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-2xl font-bold text-transparent">
                    {capability.name}
                  </h4>
                  <p className="text-balance text-lg text-gray-400">
                    {capability.desc}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {isMobile && currentCapabilities.length !== capabilities.length && (
          <button
            className="mx-auto flex w-fit items-center gap-2 transition-colors hover:text-yellow-500"
            onClick={loadMore}
          >
            <p className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-sm font-medium text-transparent">
              Load More
            </p>
            <LuArrowDown className="h-5 w-5 text-yellow-500" />
          </button>
        )}
      </div>
    </section>
  );
};

export default CoreCapabilities;

