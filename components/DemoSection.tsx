"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./ui/card"

export default function DemoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                RoleChain: The Decentralized AI Network for Web3
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Unlocking the Trillion-Dollar Potential with decentralized AI agents powering industries and communities.
              </p>
              <p className="text-lg text-yellow-400">
                Leveraging a 43% CAGR in AI adoption to redefine scalability and innovation in Web3.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button  className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg p-4">
                Get Started
              </button>
              <button className="rounded-lg p-4 bg-white text-black" >
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <div className="absolute inset-0">
              <motion.div
                className="h-full w-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Card className="h-full w-full bg-gradient-to-br from-yellow-500/20 to-purple-500/20 p-2">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Ecosystem Map"
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Animated connection lines */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 mix-blend-overlay" />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

