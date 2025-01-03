import Image from "next/image";
import sphereOld from "@/assets/images/sphere.png";

const InfoSection = () => {
  return (
    <section className="relative " id="key-features">
      <div className="left-0 top-0 hidden h-[400px] w-[400px] md:absolute md:block">
        <Image src={sphereOld} alt="Sphere background" />
      </div>
      <div className="relative mx-auto hidden w-11/12 max-w-screen-xl flex-col gap-16 md:flex">
        <h2 className="text-center text-5xl font-bold">Key information</h2>
        <div className="grid grid-cols-2 place-items-center gap-4 divide-white/30  py-7 text-center lg:grid-cols-3 lg:gap-0 lg:divide-x-2">
          {/* <div className="pr-6">
            <div className="space-y-2 rounded-2xl bg-gradient-to-r from-lightYellow to-darkYellow p-4">
              <h4 className="text-3xl font-bold text-primary">*10% discount</h4>
              <p className="text-lg font-semibold text-primary/50">
                Exclusive 10% Discount for the First 50 Enrollees!
              </p>
            </div>
          </div> */}
          <div className="space-y-2 px-6">
            <h4 className="yellow-gradient-text text-3xl font-bold ">purpose</h4>
            <p className=" text-lg font-medium leading-7">
              Revolutionizing growth, engagement, and monetization for gamers,
              streamers, investors, and founders through decentralized AI and
              Web3.
            </p>
          </div>
          <div className="space-y-2 px-6">
            <h4 className=" bg-gradient-to-r from-lightYellow to-darkYellow bg-clip-text text-3xl font-bold text-transparent">
              Core Features
            </h4>
            <p className=" text-lg font-medium leading-7">
              Scalable, autonomous, and reliable AI agents hosted on
              decentralized nodes.
            </p>
          </div>
          <div className="space-y-2 pl-6">
            <h4 className=" bg-gradient-to-r from-lightYellow to-darkYellow bg-clip-text text-3xl font-bold text-transparent">
              Unique Features{" "}
            </h4>
            <p className=" text-lg font-medium leading-7">
            Self-sustaining AI agents that evolve and adapt to empower communities effectively.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
