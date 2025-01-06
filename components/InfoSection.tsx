"use client";
import Image from "next/image";
import sphereOld from "@/assets/images/image (17).webp";
import { motion } from "framer-motion";
import frame1 from "@/assets/info-icon/Frame1.webp";
import frame2 from "@/assets/info-icon/Frame2.webp";
import frame3 from "@/assets/info-icon/Frame3.webp";

const InfoSection = () => {
  return (
    <section className="relative mt-12 mb-12" id="key-features">
      <div className="left-0 top-0 hidden h-[400px] w-[400px] md:absolute md:block">
        <Image src={sphereOld} alt="Sphere background" className="opacity-70 -ml-[100px]" />
      </div>
      
      <div className="relative mx-auto w-11/12 max-w-screen-xl top-[100px]">
        {/* Heading */}
        <h2 className=" text-center text-5xl font-bold text-white ">
          Key information
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 mt-[100px]">
          {/* Purpose Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="shadow-r group relative overflow-hidden bg-gradient-to-r from-[#8D420D] to-[#171721] p-6 shadow-[rgba(141,66,13,0.5)_0px_0px_15px]"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#F67114] to-transparent " />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8D420D] to-[#171721] opacity-0 transition-opacity duration-300 " />
            <div className="relative space-y-4">
              <div className="flex flex-col gap-3">
                <Image src={frame1} alt="Frame 1" className="h-10 w-10" />
                <h4 className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-2xl font-bold text-transparent">
                  Infrastructure
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Create, customize, train, and deploy AI agents for any role in Web3. 
                Leveraging decentralized infrastructure to scale Web3 innovation with 
                a projected 43% CAGR in AI adoption.
              </p>
            </div>
          </motion.div>

          {/* Core Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shadow-left group relative overflow-hidden bg-gradient-to-r from-[#85118C] to-[#171721] p-6 shadow-[0_0_15px_rgba(133,17,140,0.5)] backdrop-blur-sm"
          >
            <div className="] absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#E21AEF] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#85118C] to-[#171721] opacity-0 transition-opacity duration-300 " />
            <div className="relative space-y-4">
              <div className="flex flex-col gap-3">
                <Image src={frame2} alt="Frame 2" className="h-10 w-10" />
                <h4 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
                  Decentralized Training
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Train AI agents across a decentralized network of nodes, leveraging 
                global data sources for improved accuracy and reduced bias. Access to 
                over 10M+ datasets for versatile agent development.
              </p>
            </div>
          </motion.div>

          {/* Unique Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative overflow-hidden bg-gradient-to-r from-[#0F4CAC] to-[#171721] p-6 shadow-[0_0_15px_rgba(15,76,172,0.5)] backdrop-blur-sm"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#2A76EE] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F4CAC] to-[#171721] opacity-0 transition-opacity duration-300 " />
            <div className="relative space-y-4">
              <div className="flex flex-col gap-3">
                <Image src={frame3} alt="Frame 3" className="h-10 w-10" />
                <h4 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Flexible Integration
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Choose between tokenized and non-tokenized AI agents with seamless 
                Web3 platform integration. Node operators can earn up to 25% of network 
                revenue through hosting and training.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
