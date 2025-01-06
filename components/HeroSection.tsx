"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import network from "@/assets/images/Group .webp";
import coin from "@/assets/images/Rolechain Token 1.webp";

const HeroSection = () => {
  return (
    <section
      className="relative  bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-transparent "
      id="hero"
    >
      <div className="-top-12 left-0 hidden w-full select-none place-items-center text-center uppercase md:absolute md:grid lg:-top-[45px]">
        <p className="font-outline bg-gradient-to-b from-[#C193FD]  to-transparent to-60% bg-clip-text text-[150px] font-bold tracking-tight text-[#3C0C3E] opacity-50  lg:text-[200px]">
          AI Agents
        </p>
      </div>
      <div className="relative z-10 mx-auto flex w-11/12 max-w-screen-xl flex-col items-stretch justify-between gap-12 md:pt-28 lg:flex-row ">
        <div className="mt-20 w-full space-y-8 self-end lg:w-1/2 ">
          <h1 className="text-center text-5xl font-bold text-white md:text-left md:text-7xl">
            <span className=" text-3xl md:text-5xl">
              The Decentralized AI <br /> Backbone for Web3
            </span>
          </h1>
          <h4 className="hidden text-balance text-left text-xl text-gray-300 md:block">
            RoleChain combines autonomous AI agents with a decentralized
            infrastructure, empowering Web3 communities to scale, monetize, and
            thrive. From DeFi and gaming to social platforms and DAOs, RoleChain
            is revolutionizing how ecosystems grow and engage.
          </h4>

          {/* visible on tablet and mobile */}
          <h4 className="text-balance text-center text-lg text-gray-300 md:hidden">
            Empowering Web3 communities with decentralized AI agents. Scale your
            ecosystem, boost engagement, and unlock new revenue streams with
            RoleChain.
          </h4>
          <div className="flex flex-col divide-y divide-dotted  rounded-3xl bg-gradient-to-r from-[#3C1542] to-transparent px-5 text-center md:hidden">
            <div className="grid grid-cols-1 place-items-center divide-y divide-dotted ">
              <div className="space-y-2 py-5">
                <h4 className="bg-white bg-clip-text text-xl font-bold text-transparent">
                  Autonomous Agents
                </h4>
                <p className="text-sm text-gray-400">
                  AI-powered agents that adapt and evolve to community needs
                </p>
              </div>
              <div className="space-y-2 py-5">
                <h4 className=" bg-clip-text text-xl font-bold text-white">
                  Decentralized Network
                </h4>
                <p className="text-sm text-gray-400">
                  Secure, scalable infrastructure built on blockchain technology
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <button className="flex flex-row rounded-full bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] p-4 text-white hover:opacity-90">
              Get Started
              <LuArrowUpRight className="ml-2 mt-1 h-4 w-4" />
            </button>
            <button className="rounded-full  bg-[#272638] p-4">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] max-w-md self-center md:max-w-xl md:self-start md:pb-16 lg:mt-10">
          {/* Rotating background */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={network}
              alt="Network Nodes"
              className="h-full w-full rounded-full object-contain"
            />
          </motion.div>

          {/* Centered coin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={coin}
              alt="RoleChain Network Visualization"
              className=" h-[150px] w-[200px] lg:h-[300px] lg:w-[300px] object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
