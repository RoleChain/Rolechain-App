const CourseInfoSection = () => {
  return (
    <section
      id="who-is-it-for"
      className="relative mx-auto w-full max-w-screen-xl scroll-mt-32 py-24 px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3C1542] via-transparent to-transparent opacity-90">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-40"></div>
      </div>
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Modes for Every Web3 Role
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Marketer Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Marketer Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Craft agents for social media engagement and sentiment analysis to enhance your Web3 marketing strategies.
              </p>
            </div>
          </div>

          {/* Developer Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Developer Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Create coding assistants and automated testing agents to streamline your development workflow.
              </p>
            </div>
          </div>

          {/* Trader Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Trader Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Develop market analysts and predictive trading tools for smarter trading decisions.
              </p>
            </div>
          </div>

          {/* Founder Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Founder Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Build community managers and DAO governance solutions for your Web3 project.
              </p>
            </div>
          </div>

          {/* Investor Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Investor Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Design portfolio managers and opportunity scouts to optimize your investment strategy.
              </p>
            </div>
          </div>

          {/* Community User Mode */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Community User Mode
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Create Rewards Hunter agents, analyze project potential, and manage community initiatives effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfoSection;

