import Link from "next/link";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ReviewSection from "@/components/ReviewSection";
import AdvantagesSection from "@/components/AdvantagesSection";
// import TestimonialSection from "@/components/TestimonialSection";
import CtaFileDownload from "@/components/CtaFileDownload";
import CourseInfoSection from "@/components/CourseInfoSection";
// import PricingSection from "@/components/PricingSection";
// import JamesInfoSection from "@/components/JamesInfoSection";
// import TopicsSection from "@/components/TopicsSection";
// import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer, { socialLinks } from "@/components/Footer";
import DemoSection from "@/components/DemoSection";
import FeaturesList from "@/components/Feature-list";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import TeamSection from "@/components/Team";
import PartnersSection from "@/components/partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-[90px] scroll-smooth bg-primary text-white md:space-y-32">
        <HeroSection />
        <InfoSection />
        <div className="h-[10px]"></div>
        <PartnersSection/>
        {/* <ReviewSection /> */}
        <AdvantagesSection />
        <EarlyAccessSection/>
        <CtaFileDownload />
        <CourseInfoSection />
        <DemoSection/>

        <FeaturesList/>
        <CoreCapabilities/>
        <TeamSection/>
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
