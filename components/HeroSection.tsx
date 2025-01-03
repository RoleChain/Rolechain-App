"use client"

import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative" id="hero">
      <div className="-top-12 left-0 hidden w-full select-none place-items-center text-center uppercase md:absolute md:grid lg:-top-20">
        <p className="font-outline bg-gradient-to-b from-yellow-500 to-transparent to-75% bg-clip-text text-[150px] font-bold tracking-tight text-primary lg:text-[240px]">
          RoleChain
        </p>
      </div>
      <div className="relative z-10 mx-auto flex w-11/12 max-w-screen-xl flex-col items-stretch justify-between gap-12 md:pt-28 lg:flex-row">
        <div className="w-full space-y-8 self-end lg:w-1/2 mt-20">
          <h1 className="text-center text-5xl font-bold text-white md:text-left md:text-7xl">
            RoleChain<br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-2xl md:text-3xl">
              The Decentralized AI Backbone for Web3
            </span>
          </h1>
          <h4 className="hidden text-balance text-left text-xl text-gray-300 md:block">
            RoleChain combines autonomous AI agents with a decentralized infrastructure, empowering Web3 communities to scale, monetize, and thrive. From DeFi and gaming to social platforms and DAOs, RoleChain is revolutionizing how ecosystems grow and engage.
          </h4>

          {/* visible on tablet and mobile */}
          <h4 className="text-balance text-center text-lg text-gray-300 md:hidden">
            Empowering Web3 communities with decentralized AI agents. Scale your ecosystem, boost engagement, and unlock new revenue streams with RoleChain.
          </h4>
          <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-700/20 flex flex-col divide-y divide-dotted divide-yellow-500/30 rounded-3xl px-5 text-center md:hidden">
            <div className="grid grid-cols-1 place-items-center divide-y divide-dotted divide-yellow-500/30">
              <div className="space-y-2 py-5">
                <h4 className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-xl font-bold text-transparent">
                  Autonomous Agents
                </h4>
                <p className="text-sm text-gray-400">
                  AI-powered agents that adapt and evolve to community needs
                </p>
              </div>
              <div className="space-y-2 py-5">
                <h4 className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-xl font-bold text-transparent">
                  Decentralized Network
                </h4>
                <p className="text-sm text-gray-400">
                  Secure, scalable infrastructure built on blockchain technology
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg p-4 flex flex-row">
              Get Started
              <LuArrowUpRight className="ml-2 h-4 w-4 mt-1" />
            </button>
            <button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-lg p-4">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="max-w-md self-center md:max-w-xl md:self-start md:pb-16">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-square"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="RoleChain Network Visualization"
              width={400}
              height={400}
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

