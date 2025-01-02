const CourseInfoSection = () => {
  return (
    <section
      id="who-is-it-for"
      className="relative mx-auto w-11/12 max-w-screen-xl scroll-mt-32"
    >
      <div className="yellow-gradient-bg absolute inset-0 m-auto grid h-[350px] w-full place-items-center opacity-15 blur-[120px] md:hidden"></div>
      <div className="space-y-10 text-center">
        <h2 className="text-[42px] font-bold md:text-5xl">
          Who{" "}
          <span className="md:yellow-gradient-text text-balance text-white">
          RoleChain Is For
          </span>
        </h2>

        <div className="grid grid-cols-1 place-content-center place-items-center gap-[30px] divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 md:pr-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
            Aspiring Blockchain Developers
            </h4>
            <p className="text-balance text-center  text-base md:text-lg">
            Individuals passionate about building smart contracts, dApps, and leveraging blockchain technology to shape the future.
            </p>
          </div>
          <div className="space-y-4 md:pl-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
            Web3 Enthusiasts            </h4>
            <p className="text-balance text-center text-base md:text-lg">
            Those eager to explore decentralized systems, cryptocurrencies, and the evolution of the internet.


            </p>
          </div>
        </div>

        <div className="h-[2px] w-full bg-white/30" />

        <div className="grid grid-cols-1 place-items-center gap-[30px] divide-white/30 md:grid-cols-2 md:divide-x">
          <div className="space-y-4 md:pr-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
            Tech Entrepreneurs            </h4>
            <p className="text-balance text-center text-base md:text-lg">
            People aiming to integrate blockchain and AI solutions into their startups to drive innovation and efficiency.
            </p>
          </div>
          <div className="space-y-4 md:pl-8">
            <h4 className="yellow-gradient-text text-center text-xl font-bold md:text-3xl">
            Investors & Strategists
            </h4>
            <p className="text-balance text-center text-base md:text-lg">
            Professionals seeking insights into blockchain trends, crypto investments, and AI-powered decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfoSection;
