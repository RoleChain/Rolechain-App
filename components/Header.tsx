"use client";
import Image from "next/image";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const navLinks = [
  {
    title: "About ",
    link: "#about-james",
  },
  {
    title: "Key Features",
    link: "#key-features",
  },
  {
    title: "Socials",
    link: "#social",
  },
  
  {
    title: "Who is it for",
    link: "#who-is-it-for",
  },
  {
    title: "Capabilities",
    link: "#capabilities",
  },
  {
    title: "Who is it for",
    link: "#who-is-it-for",
  },

  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClose() {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  }

  function handleMenuOpen() {
    setMenuOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#190D0E]  to-[#3C0C3E]">
      <div className="mx-auto flex w-11/12  items-center justify-between gap-2 py-4">
        <div className="flex items-center gap-2 sm:gap-14 md:gap-5">
          <div
            className="cursor-pointer rounded-full"
            onClick={handleMenuOpen}
          >
            <Image src={burgerIcon} alt="Open menu" />
          </div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="" />
          </Link>
        </div>
        <div className="flex items-center md:gap-4">
         
          <button className="hidden place-items-center whitespace-nowrap  rounded-full bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] text-sm  font-medium text-white md:grid">
            <Link
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-[10px] px-6 py-3"
            >
              <p>RoleChain</p>
              <LuArrowUpRight size={18} className="text-white" />
            </Link>
          </button>
          <button className="hidden place-items-center whitespace-nowrap  rounded-full bg-[#1C1C1C] text-sm  font-medium text-white md:grid">
            <Link
              href="https://deck.rolechain.org"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-[10px] px-6 py-3"
            >
              <p>Pitch Deck</p>
              <LuArrowUpRight size={18} className="text-white" />
            </Link>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 h-full w-full bg-primary/90 backdrop-blur-sm ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={handleMenuClose}
      />
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 z-40 h-dvh w-full overflow-y-auto bg-[#0B0C0D] text-white transition-all duration-500  ease-out md:max-w-lg ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex h-full flex-col gap-14 whitespace-nowrap px-16 py-6 pb-10 text-white ">
          <div className="flex items-center gap-14">
            <div
              className="cursor-pointer rounded-full p-3"
              onClick={handleMenuClose}
            >
              <ImCross size={18} />
            </div>
            <Link href={"/"} onClick={handleMenuClose}>
              <Image src={logo} alt="JCG logo" className="" />
            </Link>
          </div>

          <div>
            <ul className="text-sm font-medium">
              {navLinks.map((item, i) => (
                <Link key={i} href={item.link}>
                  <li onClick={handleMenuClose} className="py-3">
                    {item.title}
                  </li>
                </Link>
              ))}
              {/* <li>About James</li>
              <li>Trailer</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>Who is it for</li>
              <li>Topics</li>
              <li>10% Discount Deal</li>
              <li>FAQ</li>
              <li>Contact</li> */}
            </ul>
          </div>

          <div>
            <div className="mb-5 ">
              {/* <SignUpDialog>
                <button className="yellow-gradient-bg grid  place-items-center whitespace-nowrap rounded-full text-sm font-medium text-primary ">
                  <div className="flex items-center gap-[10px] px-6 py-3">
                    <p>Sign up for the course</p>
                    <LuArrowUpRight size={18} className="text-primary" />
                  </div>
                </button>
              </SignUpDialog> */}
              {/* <CTAButton>Buy Now on Gumroad</CTAButton> */}
            </div>

            <div className="pb-10">
              {/* <Link
                className="text-sm font-semibold"
                href="mailto:contact@jamescryptoguru.com"
              >
                contact@jamescryptoguru.com
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
