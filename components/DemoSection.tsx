"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./ui/card"
import dashboard from "@/assets/images/dashboard.webp"
export default function DemoSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-6 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex max-w-[800px] flex-col items-center space-y-6 text-center">
            <h1 className="text-balance bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              RoleChain: The AI Agent Infrastructure for Web3
            </h1>
            <p className="text-balance max-w-[600px] text-base text-white/60 md:text-lg">
              Create, customize, train, and deploy AI agents across a decentralized network. 
              Leverage our global node infrastructure for unbiased, secure AI training while 
              tapping into the trillion-dollar Web3 market potential.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="https://beta.rolechain.org/" className="inline-flex h-12 items-center justify-center px-8 text-sm font-medium text-black transition-all hover:opacity-90 bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] rounded-full">
                Start Building
              </a>
              <a href="https://www.linkedin.com/company/rolechain/posts/?feedView=all" className="inline-flex h-12 items-center justify-center bg-[#1C1C1C] px-8 text-sm font-medium text-white transition-all rounded-full">
                Explore Network
              </a>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative w-full max-w-[1000px]">
            <motion.div
              className="h-full w-full"
              animate={{
                scale: [1, 1.02, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Card className="relative overflow-hidden border-0 ">
                <Image
                  src={dashboard}
                  alt="RoleChain Dashboard"
                  width={1000}
                  height={600}
                  className="w-full"
                  priority
                />
                <div className="absolute inset-0 " />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

