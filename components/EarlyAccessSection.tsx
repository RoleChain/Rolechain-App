import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Zap, Trophy, Users } from 'lucide-react'
import { Badge } from "./ui/badge"
// import star from "@/assets/icons/SVG.webp"
// import star from "@/assets/icons/SVG(1).webp"
// import star from "@/assets/icons/SVG(2).webp"
// import star from "@/assets/icons/SVG(3).webp"
// import star from "@/assets/icons/SVG(4).webp"


export default function EarlyAccessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Background gradients */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#2A0E3D] to-transparent" />
      <div className=" hidden md:block absolute left-[40%] top-0 w-[20%] h-[90%] bg-gradient-to-l from-transparent via-[#1F133B] to-transparent" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#1f123d] to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="secondary" className="bg-[#2A76EE]/10 text-[#2A76EE]">
            Early Access
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
            Build the Future of Decentralized AI Training
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join our network of developers building and training AI agents across a decentralized infrastructure
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {/* Early Adopter Benefits */}
          <Card className="relative overflow-hidden border-gray-500/20 bg-black/50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Early Adopter Benefits</h3>
                <ul className="space-y-4 text-gray-400">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {benefit.icon}
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
          </Card>

          {/* Opportunity Card */}
          <Card className="relative overflow-hidden border-gray-500/20 bg-black/50">
            <CardContent className="flex flex-col justify-between gap-4 p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Market Opportunity</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-white">$1T</p>
                  <p className="text-sm text-gray-400">Projected Web3 market size by 2030</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-white">43%</p>
                  <p className="text-sm text-gray-400">CAGR in AI adoption</p>
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
          </Card>
        </div>

        {/* Future Vision */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-gray-400">
            RoleChain is currently in development. By joining early, you&apos;ll help shape the future of decentralized AI 
            and be first in line when we launch.
          </p>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    icon: <Star className="h-5 w-5 text-[linear-gradient(to right, #FF6600, #F700F7, #0078F6)]" />,
    text: "Access to decentralized node training infrastructure",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    text: "Node operator revenue sharing opportunities",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    text: "Early access to our Node.js developer framework",
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Shape the future of decentralized AI development",
  },
]

