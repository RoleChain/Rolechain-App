"use client"

import { Card } from "@/components/ui/card"

interface FeatureCard {
  title: string
  description: string
  icon: string
}

const features: FeatureCard[] = [
  {
    title: "Decentralized AI Training",
    description: "Train AI agents across a global network of nodes, ensuring unbiased and efficient learning from diverse data sources.",
    icon: "🧠"
  },
  {
    title: "Node.js Developer Framework",
    description: "Build and deploy sophisticated AI agents with our intuitive Node.js framework, accessing 10M+ training datasets.",
    icon: "⚡"
  },
  {
    title: "Flexible Token Integration",
    description: "Choose between tokenized and non-tokenized AI agents, with built-in support for governance and monetization.",
    icon: "🔗"
  },
  {
    title: "Community AI Ecosystem",
    description: "Create role-specific AI agents that learn and adapt in real-time, empowering Web3 communities.",
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
            Decentralized AI Infrastructure
            <br />
            for Web3 Innovation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Build, train, and deploy AI agents across a global network of nodes—creating a truly decentralized AI ecosystem
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

