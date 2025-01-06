const CourseInfoSection = () => {
  return (
    <section
      id="who-is-it-for"
      className="relative mx-auto w-11/12 max-w-screen-xl scroll-mt-32 overflow-hidden"
    >
      {/* Gradient background with noise texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/50 via-transparent to-transparent opacity-90">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-10 text-center">
        <h2 className="text-[42px] font-bold md:text-5xl">
          <span className="text-white">Who </span>
          <span className=" text-white bg-clip-text text-transparent">
            RoleChain Is For
          </span>
        </h2>

        <div className="relative grid grid-cols-1 place-content-center place-items-center gap-[30px] md:grid-cols-2">
          {/* Top divider glow effect */}
          {/* <div className="absolute inset-x-0 top-0 h-px bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div> */}
          
          <div className="space-y-4 md:pr-8">
            <h4 className="text-white bg-clip-text text-xl font-bold text-transparent md:text-3xl">
              Aspiring Blockchain Developers
            </h4>
            <p className="text-balance text-center text-base text-white/80 md:text-lg">
              Individuals passionate about building smart contracts, dApps, and leveraging blockchain technology to shape the future.
            </p>
          </div>
          
          {/* Vertical divider with glow */}
          {/* <div className="absolute inset-y-0 left-1/2 hidden w-px  bg-black shadow-[0_0_15px_rgba(255,255,255,0.3)] md:block"></div> */}
          
          <div className="space-y-4 md:pl-8">
            <h4 className="text-white bg-clip-text text-xl font-bold text-transparent md:text-3xl">
              Web3 Enthusiasts
            </h4>
            <p className="text-balance text-center text-base text-white/80 md:text-lg">
              Those eager to explore decentralized systems, cryptocurrencies, and the evolution of the internet.
            </p>
          </div>
        </div>

        {/* Middle horizontal divider with enhanced glow */}
        <div className="relative">
          {/* <div className="absolute inset-x-0 h-px bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.4)]"></div> */}
        </div>

        <div className="relative grid grid-cols-1 place-items-center gap-[30px] md:grid-cols-2">
          <div className="space-y-4 md:pr-8">
            <h4 className="text-white bg-clip-text text-xl font-bold text-transparent md:text-3xl">
              Tech Entrepreneurs
            </h4>
            <p className="text-balance text-center text-base text-white/80 md:text-lg">
              People aiming to integrate blockchain and AI solutions into their startups to drive innovation and efficiency.
            </p>
          </div>
          
          {/* Vertical divider with glow */}
          {/* <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] md:block"></div> */}
          
          <div className="space-y-4 md:pl-8">
            <h4 className="text-white bg-clip-text text-xl font-bold text-transparent md:text-3xl">
              Investors & Strategists
            </h4>
            <p className="text-balance text-center text-base text-white/80 md:text-lg">
              Professionals seeking insights into blockchain trends, crypto investments, and AI-powered decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfoSection;

