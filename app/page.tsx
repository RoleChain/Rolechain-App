import Link from "next/link";
import Header from "@/components/Header";
import RoleChainAnswers from "@/components/RoleChainAnswers";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer, { socialLinks } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-[90px] scroll-smooth bg-primary text-white md:space-y-32">
        <HeroSection />
        {/* <RoleChainAnswers /> */}
        <div className="h-[10px]"></div>
        <FAQSection />
        
        <ContactSection />
        <div className="fixed left-6 top-32 z-10 hidden w-fit text-white xl:block">
          <div className="grid h-full w-full grid-cols-1 gap-6 ">
            {socialLinks.map((item, i) => (
              <Link
                className="text-2xl text-white/50 transition hover:text-white/90"
                key={i}
                rel="noopener noreferrer"
                href={item.link}
              >
                {<item.icon />}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
