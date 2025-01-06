import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaYoutube, FaXTwitter, FaInstagram, FaTelegram, FaGithub } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import React from "react";
import logo from "@/assets/images/logo.webp";
export const socialLinks = [
  { icon: FaDiscord, link: "https://discord.gg/rolechain" },
  { icon: FaYoutube, link: "https://www.youtube.com/rolechain" },
  { icon: FaXTwitter, link: "https://twitter.com/rolechain" },
  { icon: FaInstagram, link: "https://instagram.com/rolechain" },
  { icon: FaTelegram, link: "https://t.me/rolechain" },
  { icon: MdOutlineAlternateEmail, link: "mailto:contact@rolechain.io" },
  { icon: FaGithub, link: "https://github.com/rolechain" },
];

const footerLinks = [
  [
    { title: "About RoleChain", link: "#about" },
    { title: "Core Capabilities", link: "#capabilities" },
    // { title: "Use Cases", link: "#use-cases" },
    // { title: "Tokenomics", link: "#tokenomics" },
    // { title: "Roadmap", link: "#roadmap" },
  ],
  [
    { title: "Documentation", link: "https://docs.rolechain.io" },
    { title: "FAQ", link: "#faq" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Terms of Service", link: "/terms-of-service" },
    { title: "Contact Us", link: "/contact" },
  ],
];

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-2xl  text-white">
      <div className="pb-4 pt-10">
        <div className="flex flex-col items-center justify-center gap-10 pb-10 lg:flex-row lg:items-stretch lg:justify-between lg:pb-32">
          <div className="flex max-w-sm flex-col items-center justify-between gap-4 pb-8 lg:max-w-64 lg:items-start lg:justify-normal lg:ml-20">
            <Image src={logo} alt="RoleChain logo" className="" />
            <p className="text-balance text-center text-lg lg:text-left text-gray-300">
              Empowering Web3 Communities with Decentralized AI
            </p>
          </div>

          <div className="space-y-5">
            <h6 className="  text-white bg-clip-text text-center text-2xl font-bold text-transparent lg:text-left">
              Explore
            </h6>
            <ul className="flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium text-gray-400 lg:max-w-full lg:flex-col">
              {footerLinks[0].map((item, i) => (
                <Link key={i} href={item.link} className="hover:text-white transition-colors">
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h6 className="text-white bg-clip-text text-center text-2xl font-bold text-transparent lg:text-left">
              Resources
            </h6>
            <ul className="flex max-w-sm flex-row flex-wrap justify-center gap-4 font-medium text-gray-400 lg:max-w-full lg:flex-col">
              {footerLinks[1].map((item, i) => (
                <Link key={i} href={item.link} className="hover:text-white transition-colors">
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>

          <div className="max-w-xl lg:max-w-2xl">
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col justify-center gap-5 pt-8 lg:pt-0">
                <h6 className="text-white bg-clip-text text-center text-lg font-bold text-transparent lg:text-left">
                  Stay Updated
                </h6>
                <form className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/40  text-white rounded-full p-4"
                  />
                  <button type="submit" className=" text-white bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6]  rounded-full p-4">
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-gray-400">
                  or via email:{" "}
                  <Link
                    href="mailto:contact@rolechain.io"
                    className="text-[#E21AEF] hover:underline"
                  >
                    contact@rolechain.io
                  </Link>
                </p>
              </div>
              <div className="flex justify-center gap-5 pt-10 text-2xl text-gray-400 md:justify-normal lg:pt-0">
                {socialLinks.map((item, i) => (
                  <Link key={i} href={item.link} target="_blank" rel="noopener noreferrer" className=" transition-colors">
                    <item.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-800" />

        <div className="py-10 text-center lg:pb-0">
          <p className="text-sm font-medium text-gray-400">
            &copy; {new Date().getFullYear()} RoleChain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

