// VideoCard.jsx
import React from "react";

const VideoCard = ({
  thumbnail,
  avatar,
  title,
  views,
  duration,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-52 object-cover"
        />

        {/* Duration */}
        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
          {duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex gap-4 p-4">
        
        {/* Avatar */}
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Info */}
        <div className="flex-1">
          <h2 className="font-semibold text-gray-800 line-clamp-2">
            {title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {views}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;