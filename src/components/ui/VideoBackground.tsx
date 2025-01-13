import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImage: string;
}

const VideoBackground = ({ videoUrl, fallbackImage }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback image if video fails to load */}
        <img
          src={fallbackImage}
          alt="Sri Lanka Scenery"
          className="w-full h-full object-cover"
        />
      </video>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
    </div>
  );
};

export default VideoBackground;