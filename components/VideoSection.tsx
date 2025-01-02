import React from "react";

const VideoSection = () => {
  return (
    <section
      id="trailer"
      className="relative z-10 mx-auto w-11/12 max-w-screen-xl scroll-mt-32 space-y-16"
    >
      <div className="space-y-6 text-center">
        <h2 className="text-balance text-4xl font-bold leading-[60px] md:text-6xl">
          Welcome to the world of{" "}
          <span className="yellow-gradient-text">decentralized AI</span> and{" "}
          <span className="yellow-gradient-text">Web3 innovation</span>!
        </h2>

        <h5 className="mx-auto max-w-4xl text-balance text-xl md:text-2xl">
        Explore how RoleChain revolutionizes growth, engagement, and monetization for Web3 communities with scalable AI agents.
        </h5>
      </div>
      <div className="mx-auto h-[300px] max-w-[940px] overflow-hidden rounded-[30px] border border-white/30 md:h-[350px] lg:h-[530px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/75HZw-bk0M4?si=TerRT-lvDmRQVBZu"
          title="Laws of Money | James Crypto Guru"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
