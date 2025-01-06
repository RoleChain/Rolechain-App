import Image from "next/image";
import Link from "next/link";
import { HiOutlineMailOpen } from "react-icons/hi";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="relative md:pb-40">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#2A0E3D] to-transparent" />

      {/* Middle gradient to merge left and right */}
      <div className="absolute left-[40%] top-0 w-[20%] h-[90%] bg-gradient-to-l from-transparent via-[#1F133B] to-transparent" />

      {/* Right gradient */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-transparent via-[#1f123d] to-transparent" />

      <div className="bottom-0 left-0 z-0 hidden xl:absolute xl:block">
        {/* <Image src={artBg} alt="Background artwork" /> */}
      </div>
      <section
        id="contact"
        className="relative mx-auto w-11/12 max-w-screen-xl scroll-mt-32 bg-contact-texture"
      >
        <div className="relative space-y-16">
          <h2 className="text-center text-[42px] font-bold md:text-6xl">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            <div className="space-y-8">
              <h4 className="text-xl font-bold md:text-2xl">
                <span className="text-white">
                  Please use the following
                </span>{" "}
                contact information to get in touch:
              </h4>

              <div className="rounded-4xl p-7 md:px-10 md:py-8 bg-gradient-to-b from-[#FFF]/10 to-[#FFF]/0 border border-white border-opacity-10">
                <div className="flex items-center gap-4 sm:gap-[30px]">
                  <HiOutlineMailOpen className="h-10 w-10 flex-shrink-0 " />

                  <div>
                    <h4 className="text-xl font-bold md:text-2xl">Email</h4>
                    <Link
                      href="mailto:contact@rolechain.io"
                      className=" text-sm font-semibold sm:text-base md:text-lg"
                    >
                      contact@rolechain.io
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-4xl bg-gradient-to-b from-[#FFF]/10 to-[#FFF]/0 border border-white border-opacity-10 p-7 md:px-10 md:py-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
