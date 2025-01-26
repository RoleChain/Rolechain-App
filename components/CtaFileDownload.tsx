"use client";

import React from "react";
import DownloadForm from "./DownloadForm";

const CtaFileDownload = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/docs.pdf';
    link.download = 'RoleChain-Guide.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-4xl mx-auto grid w-11/12 max-w-[1050px] grid-cols-1 place-items-center overflow-hidden sm:grid-cols-2 bg-gradient-to-b from-[#FF6600] via-[#F700F7] to-[#0078F6] ">
      <div className="space-y-[10px]  px-8 py-8 lg:pl-[70px] lg:pr-[50px]">
        <h3 className="text-balance text-4xl font-bold">
          <span className="text-white">Join </span> RoleChain and Claim Your Exclusive Guide!
        </h3>
        <p className="text-white/60 text-xl font-medium">
        Discover the key strategies to unlock seamless blockchain and AI integration.
        </p>
      </div>
      <div className=" grid h-full w-full place-items-center ">
        <DownloadForm onValidEmail={handleDownload} />
      </div>
    </div>
  );
};

export default CtaFileDownload;
