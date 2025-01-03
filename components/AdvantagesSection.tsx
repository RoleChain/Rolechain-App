"use client";
import Image from "next/image";

import advantageIcon from "@/assets/icons/advantage.svg";
import useMatchMedia from "@/hooks/useMediaQuery";
import { useState } from "react";
import CTAButton from "./CTAButton";

const BeforeCard = () => {
  return (
    <div className="rounded-[30px] bg-gradient-to-b from-[#0028fa0f] to-[#0c03750d]">
      <div className="flex flex-col gap-[30px] p-8 text-white/50">
        <div className="flex items-center gap-5">
          <Image src={advantageIcon} alt="Star icon" />
          <h2 className="text-[28px] font-bold text-white lg:text-5xl">
            Before <span className="yellow-gradient-text">RoleChain</span>
          </h2>
        </div>

        <div className="space-y-[10px] ">
          <h5 className="text-2xl font-bold">Fragmented Web3 Development</h5>
          <p className="text-base lg:text-lg">
          Struggling with isolated solutions and lack of integration, leading to slow progress in decentralized innovation.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Unrealized Potential</h5>
          <p className="text-base lg:text-lg">
          Dreaming of blockchain adoption but hindered by inefficiencies in scalability and AI utilization.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Risk Aversion</h5>
          <p className="text-base lg:text-lg">
          Hesitant to embrace cutting-edge decentralized technology due to lack of trust and interoperability.


          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Limited Ecosystem
          </h5>
          <p className="text-base lg:text-lg">
          Operating within a narrow network, restricting creativity and community growth.


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

        <CTAButton>Make a First Step to Change</CTAButton>
      </div>
    </div>
  );
};

const AfterCard = () => {
  return (
    <div className="rounded-[30px] bg-gradient-to-b from-[#45ffa61f] to-[#1e806514]">
      <div className="flex flex-col gap-[30px] p-8">
        <div className="flex items-center gap-5">
          <Image src={advantageIcon} alt="Star icon" />
          <h2 className="text-[28px] font-bold text-white lg:text-5xl">
            After <span className="yellow-gradient-text">RoleChain</span>
          </h2>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Seamless Decentralized AI</h5>
          <p className="text-base lg:text-lg">
          Transitioning to a unified platform that integrates AI and blockchain, driving exponential growth and innovation.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Unlocking Web3 Potential</h5>
          <p className="text-base lg:text-lg">
          Enabling creators, developers, and investors to achieve success in the decentralized future.
          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Enhanced Security
          </h5>
          <p className="text-base lg:text-lg">
          Fostering trust and reducing risks through a robust and adaptable AI-driven ecosystem.


          </p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="text-2xl font-bold">Collaborative Growth</h5>
          <p className="text-base lg:text-lg">
          Connecting a global community to build, innovate, and thrive together in Web3 industries.
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
        <CTAButton>Create and own</CTAButton>
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
      className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32 space-y-11 md:space-y-16"
    >
      <h2 className="md:yellow-gradient-text py-2 text-center text-[42px] font-bold text-white md:text-5xl ">
        Advantages
      </h2>

      {isMobile ? (
        <div className="space-y-[30px]">
          <div className="flex items-center justify-center text-base text-white">
            <div
              onClick={() => setTab("before")}
              className={`border-b-4 px-6 py-2 transition-all ${
                tab === "before" ? "border-lightYellow" : "border-gunmetal"
              }`}
            >
              Before
            </div>
            <div
              onClick={() => setTab("after")}
              className={`border-b-4 px-6 py-2 transition-all ${
                tab === "after" ? "border-lightYellow" : "border-gunmetal"
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
