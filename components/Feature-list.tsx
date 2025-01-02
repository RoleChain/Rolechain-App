
import { Bot, Cpu, Network, Shield } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function FeaturesList() {
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Decentralized AI Agents for Web3 Communities
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Communities waste $1.2B annually on fragmented tools—RoleChain creates a unified and decentralized solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden bg-black/50 p-2">
              <CardContent className="flex flex-col items-start space-y-4 p-6">
                <div className="inline-flex rounded-lg bg-yellow-500/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-50" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <Bot className="h-6 w-6 text-yellow-500" />,
    title: "Trader Signal AI",
    description: "Monitor DeFi and token markets with real-time analytics and intelligent trading signals.",
  },
  {
    icon: <Network className="h-6 w-6 text-yellow-500" />,
    title: "Streamer AI",
    description: "Enhance Twitch engagement with real-time interactivity and automated content optimization.",
  },
  {
    icon: <Shield className="h-6 w-6 text-yellow-500" />,
    title: "Guild Manager AI",
    description: "Optimize in-game economies and rewards with intelligent distribution systems.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-yellow-500" />,
    title: "Node Network",
    description: "Decentralized infrastructure ensuring scalability and resilience across the platform.",
  },
]

