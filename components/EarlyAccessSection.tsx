import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Zap, Trophy, Users } from 'lucide-react'
import { Badge } from "./ui/badge"

export default function EarlyAccessSection() {
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500">
            Early Access
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
            Be Among the First to Shape the Future
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join the pioneering community of Web3 innovators building the next generation of decentralized AI
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {/* Early Adopter Benefits */}
          <Card className="relative overflow-hidden border-yellow-500/20 bg-black/50">
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
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-50" />
          </Card>

          {/* Opportunity Card */}
          <Card className="relative overflow-hidden border-yellow-500/20 bg-black/50">
            <CardContent className="flex flex-col justify-between gap-4 p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Market Opportunity</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-yellow-500">$1T</p>
                  <p className="text-sm text-gray-400">Projected Web3 market size by 2030</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-yellow-500">43%</p>
                  <p className="text-sm text-gray-400">CAGR in AI adoption</p>
                </div>
              </div>
              <button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg p-4 flex flex-row">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4 mt-1" />
              </button>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-50" />
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
    icon: <Star className="h-5 w-5 text-yellow-500" />,
    text: "Priority access to beta features and testing",
  },
  {
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    text: "Exclusive early adopter token allocations",
  },
  {
    icon: <Trophy className="h-5 w-5 text-yellow-500" />,
    text: "Founding member status with special privileges",
  },
  {
    icon: <Users className="h-5 w-5 text-yellow-500" />,
    text: "Direct input on product development and features",
  },
]

