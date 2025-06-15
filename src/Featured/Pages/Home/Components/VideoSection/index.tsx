import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="my-[141px]">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[850px] object-cover"
        >
          <source
            src="https://nov-one.myshopify.com/cdn/shop/videos/c/vp/a6b80b0736484cea842b723184e56075/a6b80b0736484cea842b723184e56075.HD-1080p-4.8Mbps-27388172.mp4?v=0"
            type="video/mp4"
          />
        </video>
        <div
          className={`
            absolute inset-0 z-[99999] transition-opacity duration-700 
            ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <img
            src="https://nov-one.myshopify.com/cdn/shop/files/img-9-6-video.jpg?v=1713258523"
            alt="Video Thumbnail"
            className="w-full h-[850px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h2 className="text-[40px] text-white mb-4">Excellent sound</h2>
            <button
              onClick={handlePlay}
              className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Play />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
