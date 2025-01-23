"use client"

import { WavyBackground } from "./ui/wavy"



export default function Roadmap() {
  const quarters = [
    {
      quarter: "Q1",
      year: "2025",
      goal: "Launch a minimum viable product with core functionalities for AI agent creation and basic interactions.",
      milestones: [
        "Establish the platform's foundational infrastructure.",
        "Introduce first set of AI agent templates for community use.",
      ],
    },
    {
      quarter: "Q2",
      year: "2025",
      goal: "Implement token-based functionalities for governance, monetization, and incentivization.",
      milestones: [
        "Roll out RoleChain Token (ROAI) for staking, governance, and rewards.",
        "Enable tokenized agent capabilities for enhanced user engagement.",
      ],
    },
    {
      quarter: "Q3",
      year: "2025",
      goal: "Introduce a decentralized training system for AI agents across a global network of nodes.",
      milestones: [
        "Deploy node software for decentralized data processing and training.",
        "Begin community participation in node training, promoting data diversity.",
      ],
    },
    {
      quarter: "Q4",
      year: "2025",
      goal: "Enhance the platform's scalability to handle increased load and diverse use cases.",
      milestones: [
        "Implement sharding or layer-2 solutions to manage transaction volume.",
        "Expand node network to ensure geographical diversity and resilience.",
      ],
    },
  ]

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40" containerClassName="roadmap-background" >
      <div className=" min-h-screen max-w-6xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-transparent bg-clip-text`}
        >
          Roadmap to a Decentralized AI Ecosystem
        </h1>

        <div className="relative">
        
         

          <div className="space-y-20">
            {quarters.map((q, index) => (
              <div
                key={q.quarter}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Quarter Circle */}
                <div className="relative flex-1 md:flex-none">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br from-[#FF1CF7] to-[#00F0FF] p-0.5`}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-[#2D0A31] flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{q.quarter}</div>
                        <div className="text-[#00F0FF]">{q.year}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3
                    className={`text-xl font-semibold mb-4 bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-transparent bg-clip-text`}
                  >
                    {q.goal}
                  </h3>
                  <div className="space-y-2">
                    {q.milestones.map((milestone, i) => (
                      <p key={i} className="text-gray-300">
                        • {milestone}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WavyBackground>
  )
}

