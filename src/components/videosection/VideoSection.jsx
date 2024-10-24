import React from "react";
import VideoPlayer from "../reuseable/VideoPlayer";

function VideoSection() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-[36px] font-[700] text-[#363636] mt-8">
          ভিডিও <span className="text-[#0984e3]">গ্যালারী -</span>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] flex flex-col sm:flex-row sm:gap-3">
          <VideoPlayer src="https://www.youtube.com/embed/3ZqPF61Rbsg?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=3ZqPF61Rbsg" />
          <VideoPlayer src="https://www.youtube.com/embed/GHw693SgGrM?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=GHw693SgGrM" />
          <VideoPlayer src="https://www.youtube.com/embed/ljsmUu_mVNo?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=ljsmUu_mVNo" />
        </div>
      </div>
    </>
  );
}

export default VideoSection;
