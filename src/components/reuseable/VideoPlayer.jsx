// VideoPlayer.js
import React from "react";

const VideoPlayer = ({ src, className }) => {
  return (
    <div className={`relative overflow-hidden ${className} py-8`}>
      <iframe
        width="560"
        height="300"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="overflow-hidden absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center text-white text-xl font-bold">
        {/* Add any overlay text or controls here */}
      </div>
    </div>
  );
};

export default VideoPlayer;
