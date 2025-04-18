"use client";

import React from "react";
import { LuArrowDown, LuBrain, LuNetwork, LuShieldCheck, LuBarChart, LuUsers, LuCode, LuDatabase, LuZap } from "react-icons/lu";

const capabilities = [
  {
    icon: <LuBrain className="h-8 w-8" />,
    name: "Decentralized Node Training",
    desc: "AI agents learn from distributed nodes globally, ensuring unbiased and robust model training.",
  },
  {
    icon: <LuNetwork className="h-8 w-8" />,
    name: "Decentralized Infrastructure",
    desc: "Distributed node network ensuring maximum uptime and censorship resistance.",
  },
  {
    icon: <LuShieldCheck className="h-8 w-8" />,
    name: "Enhanced Security",
    desc: "Multi-layer protection with blockchain-based verification and AI threat detection.",
  },
  {
    icon: <LuBarChart className="h-8 w-8" />,
    name: "Training Analytics",
    desc: "Real-time insights into model performance and training progress across the node network.",
  },
  {
    icon: <LuUsers className="h-8 w-8" />,
    name: "Community Governance",
    desc: "Democratic decision-making through decentralized autonomous organization (DAO).",
  },
  {
    icon: <LuCode className="h-8 w-8" />,
    name: "Node.js Training Framework",
    desc: "Simplified development tools for creating and training AI agents across decentralized nodes.",
  },
  {
    icon: <LuDatabase className="h-8 w-8" />,
    name: "Distributed Learning",
    desc: "Federated learning approach ensuring data privacy while maximizing training efficiency.",
  },
  {
    icon: <LuZap className="h-8 w-8" />,
    name: "Adaptive Performance",
    desc: "Dynamic scaling of training resources across nodes for optimal AI agent development.",
  },
];

const CoreCapabilities = () => {
  return (
    <section className="mx-auto w-full max-w-screen-xl scroll-mt-32 py-24 px-4" id="capabilities">
      <div className="space-y-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl text-white">
            Core Capabilities of RoleChain
          </h2>
          <h4 className="text-lg text-gray-500 md:text-xl">
            Pioneering the Future of Decentralized AI Infrastructure
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.name}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-black/20 p-6 transition-all hover:border-white/10"
            >
              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  {React.cloneElement(capability.icon, {
                    className: "h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                  })}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">
                    {capability.name}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {capability.desc}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;

