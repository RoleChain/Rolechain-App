

const CourseInfoSection = () => {
  return (
    <section
      id="who-is-it-for"
      className=" relative mx-auto w-full max-w-screen-xl scroll-mt-32 py-24 px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3C1542] via-transparent to-transparent opacity-90">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-40"></div>
      </div>
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Who RoleChain Is For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="relative group overflow-hidden  border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Aspiring Blockchain Developers
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Individuals passionate about building smart contracts, dApps, and leveraging blockchain technology to shape the future.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden  border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Web3 Enthusiasts
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Those eager to explore decentralized systems, cryptocurrencies, and the evolution of the internet.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden  border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Tech Entrepreneurs
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                People aiming to integrate blockchain and AI solutions into their startups to drive innovation and efficiency.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Investors & Strategists
              </h4>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Professionals seeking insights into blockchain trends, crypto investments, and AI-powered decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfoSection;

