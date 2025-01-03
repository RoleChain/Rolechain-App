import React from "react";
import DownloadForm from "./DownloadForm";

const CtaFileDownload = () => {
  return (
    <div className="rounded-4xl mx-auto grid w-11/12 max-w-[1050px] grid-cols-1 place-items-center overflow-hidden sm:grid-cols-2 ">
      <div className="space-y-[10px] bg-[#F2B833] px-8 py-8 lg:pl-[70px] lg:pr-[50px]">
        <h3 className="text-balance text-4xl font-bold">
          <span className="text-primary">Join </span> RoleChain and Claim Your Exclusive Guide!
        </h3>
        <p className="text-primary text-xl font-medium">
        Discover the key strategies to unlock seamless blockchain and AI integration.
        </p>
      </div>
      <div className="yellow-gradient-bg grid h-full w-full place-items-center ">
        <DownloadForm />
      </div>
    </div>
  );
};

export default CtaFileDownload;
