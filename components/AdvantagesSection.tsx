"use client";
import Image from "next/image";

import advantageIcon from "@/assets/images/star.webp";
import useMatchMedia from "@/hooks/useMediaQuery";
import { useState } from "react";

const BeforeCard = () => {
  return (
    <div className="rounded-[30px] bg-gradient-to-b from-[#0F1114] to-[#07090C]">
      <div className="flex flex-col gap-[30px] p-8 text-white/50">
        <div className="flex items-center gap-5">
          <Image src={advantageIcon} alt="Star icon" />
          <h2 className="text-[28px] font-bold text-white lg:text-5xl">
            Before <span className="text-white">RoleChain</span>
          </h2>
        </div>

        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Centralized AI Development</h5>
          <p className="text-base lg:text-lg">
            Limited by traditional AI training methods, lacking the benefits of decentralized learning and global data sources.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Training Limitations</h5>
          <p className="text-base lg:text-lg">
            Restricted access to diverse datasets and computational resources, resulting in less adaptable AI models.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Integration Challenges</h5>
          <p className="text-base lg:text-lg">
            Difficulty implementing AI solutions in Web3 environments due to lack of standardized frameworks and tools.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Limited Scalability</h5>
          <p className="text-base lg:text-lg">
            Constrained by centralized infrastructure, preventing efficient scaling of AI applications in decentralized ecosystems.
          </p>
        </div>
        {/* <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Isolation</h5>
          <p className="text-base lg:text-lg">
            Hesitating to engage with successful individuals, limiting personal
            and financial grow
          </p>
        </div> */}

        {/* <SignUpDialog>
          <button className="grid w-full place-items-center whitespace-nowrap rounded-full bg-gradient-to-r from-lightYellow to-darkYellow text-sm font-medium text-primary ">
            <div className="flex items-center gap-[10px] px-6 py-3">
              <p>Make a First Step to Change</p>
              <LuArrowUpRight size={18} className="text-primary" />
            </div>
          </button>
        </SignUpDialog> */}

        <button className="bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] rounded-full px-6 py-3 text-sm font-medium text-white">Make a First Step to Change</button>
      </div>
    </div>
  );
};

const AfterCard = () => {
  return (
    <div className="rounded-[30px] bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6]">
      <div className="flex flex-col gap-[30px] p-8">
        <div className="flex items-center gap-5">
          <Image src={advantageIcon} alt="Star icon" />
          <h2 className="text-[28px] font-bold text-white lg:text-5xl">
            After <span className="text-white">RoleChain</span>
          </h2>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Decentralized Node Training</h5>
          <p className="text-base lg:text-lg">
            Access global computational resources and diverse datasets through our network of decentralized nodes.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Advanced AI Capabilities</h5>
          <p className="text-base lg:text-lg">
            Create sophisticated AI agents that learn and adapt in real-time, powered by decentralized training methodology.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Seamless Integration</h5>
          <p className="text-base lg:text-lg">
            Deploy AI agents effortlessly using our Node.js framework, with or without token integration.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Infinite Scalability</h5>
          <p className="text-base lg:text-lg">
            Leverage our decentralized infrastructure to scale AI applications globally with enhanced performance and resilience.
          </p>
        </div>
        {/* <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Strategic Wealth Management</h5>
          <p className="text-base lg:text-lg">
            Participants will learn to transition from saving out of fear to
            confidently making investments and spending wisely. You&apos;ll
            learn effective strategies for managing and increasing wealth.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Entrepreneurial Leadership</h5>
          <p className="text-base lg:text-lg">
            The course offers insights into leading and growing successful
            companies.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Networking and Influence</h5>
          <p className="text-base lg:text-lg">
            The course highlights the importance of engaging with successful
            individuals and expanding financial and personal growth networks.
          </p>
        </div> */}

        {/* <SignUpDialog>
          <button className="yellow-gradient-bg grid w-full place-items-center whitespace-nowrap rounded-full  text-sm font-medium text-primary ">
            <div className="flex items-center gap-[10px] px-6 py-3">
              <p className="text-base">Sign Up & Save 10%*</p>
              <LuArrowUpRight size={18} className="text-primary" />
            </div>
          </button>
        </SignUpDialog> */}
        <button className="bg-white rounded-full px-6 py-3 text-sm font-medium text-black">Create and own</button>
      </div>
    </div>
  );
};

const AdvantagesSection = () => {
  const isMobile = useMatchMedia(768);
  const [tab, setTab] = useState<String>("before");

  return (
    <section
      id="advantages"
      className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32 space-y-11 md:space-y-16 "
    >
      <h2 className=" py-2 text-center text-[42px] font-bold text-white md:text-5xl ">
        Advantages
      </h2>

      {isMobile ? (
        <div className="space-y-[30px]">
          <div className="flex items-center justify-center text-base text-white">
            <div
              onClick={() => setTab("before")}
              className={`border-b-4 px-6 py-2 transition-all ${
                tab === "before" ? "border-white" : "border-gunmetal"
              }`}
            >
              Before
            </div>
            <div
              onClick={() => setTab("after")}
              className={`border-b-4 px-6 py-2 transition-all ${
                tab === "after" ? "border-white" : "border-gunmetal"
              }`}
            >
              After
            </div>
          </div>

          {tab === "before" ? <BeforeCard /> : <AfterCard />}
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-start gap-8 md:grid-cols-2">
          <BeforeCard />
          <AfterCard />
        </div>
      )}
    </section>
  );
};

export default AdvantagesSection;
