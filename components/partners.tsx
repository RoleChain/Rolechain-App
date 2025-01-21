import Image from "next/image";
import aws from "@/assets/partners/amazon.png";
import azure from "@/assets/partners/images__1_-removebg-preview.png";
import mongodb from "@/assets/partners/images-removebg-preview.png";
import gcp from "@/assets/partners/gcp-removebg-preview.png";

const partnerLogos = [
  { src: aws, alt: "Amazon Web Services" },
  { src: azure, alt: "Microsoft Azure" },
  { src: mongodb, alt: "MongoDB" },
  { src: gcp, alt: "Google Cloud Platform" }
];

export default function PartnersSection() {
  return (
    <section className="min-h-screen  py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-pink-500 font-medium"> Our Partners</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Collaborative Excellence: Building Bridges, Driving Success
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Empowering partnerships and fostering teamwork to achieve unparalleled excellence. Our dedicated approach
            and shared vision create a synergy that fuels innovation and drives sustainable success for all.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#7e3281] backdrop-blur-sm rounded-xl p-8 flex items-center justify-center
                        border border-purple-500/20 hover:border-pink-500/50 transition-colors"
            >
              <div className="w-24 h-12  rounded flex items-center justify-center">
                <Image src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#3C0C3E]  
                      backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Join the Rolechain network</h3>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              ))}
            </div>
          </div>
          <a
            href="https://calendly.com/harsh-rolechain"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                     font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Book a Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

