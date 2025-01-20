"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import coin from "@/assets/images/Rolechain Token 1.webp";
import icon from "@/assets/hero-icon/icon.webp"
import icon2 from "@/assets/hero-icon/icon2.webp"
import icon3 from "@/assets/hero-icon/icon3.webp"
import icon4 from "@/assets/hero-icon/icon4.webp"
import icon5 from "@/assets/hero-icon/icon5.webp"
import icon1 from "@/assets/hero-icon/icon1.webp"
import icon6 from "@/assets/hero-icon/icon.svg"
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Handle resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateIconPositions = (numIcons: number, radius: number) => {
    return Array.from({ length: numIcons }).map((_, index) => {
      const angle = (index * 2 * Math.PI) / numIcons;
      const responsiveRadius = windowWidth >= 1024 ? radius * 1.5 : radius;
      const x = responsiveRadius * Math.cos(angle);
      const y = responsiveRadius * Math.sin(angle);
      return { x, y, angle: (angle * 180) / Math.PI };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userEmailResponse = await fetch('https://api.rolechain.org/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
        }),
      });

      if (userEmailResponse.ok) {
        setShowPopup(false);
        setFormData({ name: '', email: '' });
        setShowSuccess(true);
        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error('Failed to send emails');
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

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
              Create, Train & Deploy <br /> AI Agents for Web3
            </span>
          </h1>
          <h4 className="hidden text-balance text-left text-xl text-gray-300 md:block">
            RoleChain empowers anyone to create customized AI agents for any role in Web3. 
            From DeFi analysis to community management, our decentralized infrastructure 
            enables secure, scalable, and intelligent solutions for the future of Web3.
          </h4>

          {/* visible on tablet and mobile */}
          <h4 className="text-balance text-center text-lg text-gray-300 md:hidden">
            Create powerful AI agents for any Web3 role. Scale your ecosystem, 
            boost engagement, and unlock new possibilities with RoleChain.
          </h4>
          <div className="flex flex-col divide-y divide-dotted  rounded-3xl bg-gradient-to-r from-[#3C1542] to-transparent px-5 text-center md:hidden">
            <div className="grid grid-cols-1 place-items-center divide-y divide-dotted ">
              <div className="space-y-2 py-5">
                <h4 className="bg-white bg-clip-text text-xl font-bold text-transparent">
                  Customizable Agents
                </h4>
                <p className="text-sm text-gray-400">
                  Create AI agents for any role with our intuitive platform
                </p>
              </div>
              <div className="space-y-2 py-5">
                <h4 className="bg-clip-text text-xl font-bold text-white">
                  Decentralized Training
                </h4>
                <p className="text-sm text-gray-400">
                  Secure, scalable infrastructure with decentralized node training
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 md:justify-start">
            <button 
              onClick={() => setShowPopup(true)}
              className="flex flex-row rounded-full bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] p-4 text-white hover:opacity-90"
            >
              Get Started
              <LuArrowUpRight className="ml-2 mt-1 h-4 w-4" />
            </button>
            <button className="rounded-full  bg-[#272638] p-4">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] max-w-md self-center md:max-w-xl md:self-start md:pb-16 lg:mt-10">
          {/* Rotating orbit container */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {/* Static positioned icons */}
            {generateIconPositions(7, 140).map((pos, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Image
                  src={[icon, icon2, icon3, icon4, icon5, icon1, icon6][index]}
                  alt={`Icon ${index + 1}`}
                  width={40}
                  height={40}
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>
            ))}
          </motion.div>

          {/* Centered coin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={coin}
              alt="RoleChain Network Visualization"
              className="h-[150px] w-[200px] lg:h-[300px] lg:w-[300px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#3C1542] to-[#1E1E2E] p-8 shadow-xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-bold text-white">Get Early Access</h2>
              <p className="text-sm text-gray-300">Join our exclusive beta testing. We&apos;ll send the MVP access link to your email.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 w-full rounded-lg bg-[#272638] p-3 text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 w-full rounded-lg bg-[#272638] p-3 text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] p-4 text-white font-medium hover:opacity-90 transform transition-all duration-200 hover:scale-[0.98]"
              >
                Get Access
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-green-500 p-4 text-white shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>Successfully joined the waitlist!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
