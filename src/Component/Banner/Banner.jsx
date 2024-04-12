import React from "react";

const Banner = () => {
  return (
    <div className="flex gap-x-4">
      <div className="w-1/2 border border-red-400">
        <h1 className="text-sm font-bold">THE ULTIMATE LUXURY EXPERIENCE </h1>
        <h1 className="text-9xl font-normal">The Perfect</h1>
        <h1 className="text-9xl font-normal">Base For You</h1>
      </div>
      <div className="w-1/2 border border-red-400">
        <h1>This is right side</h1>
      </div>
    </div>
  );
};

export default Banner;
