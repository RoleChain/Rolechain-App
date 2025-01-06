"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/assets/icons/logo.svg";
const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/rolechain", icon: logo },
  { name: "Telegram", url: "https://t.me/rolechain", icon:logo },
];

const SocialSection = () => {
  return (
    <section
      id="social"
      className="relative z-10 mx-auto w-11/12 max-w-screen-xl scroll-mt-32 space-y-16 py-24" 
    >
      <div className="space-y-6 text-center">
        <h2 className="text-balance text-4xl font-bold leading-[60px] md:text-6xl">
          Join the <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">RoleChain</span> community
        </h2>
        <h5 className="mx-auto max-w-4xl text-balance text-xl text-gray-300 md:text-2xl">
          Connect with us on social media to stay updated on the latest developments in decentralized AI and Web3 innovation!
        </h5>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer" 
                className="flex flex-col items-center space-y-4 rounded-xl bg-gradient-to-br from-yellow-900/20 to-yellow-700/20 p-6 transition-all hover:from-yellow-900/30 hover:to-yellow-700/30">
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
                <span className="text-lg font-semibold text-gray-200">{social.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

