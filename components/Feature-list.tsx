"use client"

import { Card } from "@/components/ui/card"

interface FeatureCard {
  title: string
  description: string
  icon: string
}

const features: FeatureCard[] = [
  {
    title: "Trader Signal AI",
    description: "Market signals from realtime with low-time analysis and intelligent trading signals.",
    icon: "🎯"
  },
  {
    title: "Streamer AI",
    description: "Content creator engagement with low-time discoverability and automated content optimization",
    icon: "🎥"
  },
  {
    title: "Guild Manager AI",
    description: "Optimize program execution and rewards with intelligent allocation systems",
    icon: "⚡"
  },
  {
    title: "Node Network",
    description: "Decentralized infrastructure ensuring scalability and recursive reward distribution patterns",
    icon: "🌐"
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative w-full min-h-screen py-20">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#2A0E3D] to-transparent" />

      {/* Middle gradient to merge left and right */}
      <div className="absolute left-[40%] top-0 w-[20%] h-[90%] bg-gradient-to-l from-transparent via-[#1F133B] to-transparent" />
      {/* <div className="absolute left-[45%] top-0 w-[10%] h-full bg-gradient-to-r from-transparent via-[#180F2f] to-transparent" /> */}

      {/* Right gradient */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#1f123d] to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Decentralized AI Agents for
            <br />
            Web3 Communities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Communities waste $13B annually on fragmented tools—RoleChain creates a unified and decentralized solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-black/20 border-gray-800 backdrop-blur-sm">
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

