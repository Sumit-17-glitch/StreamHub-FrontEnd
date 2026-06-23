import React from "react";
import { useNavigate } from "react-router-dom";

function VideoRecommendationCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/video-player/${video._id}`)}
      className="flex gap-2 cursor-pointer hover:bg-[#d1d0d0] rounded-xl p-2 transition"
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0">
        <img
          src={video?.thumbnail?.url}
          alt={video?.title}
          className="w-40 h-[90px] rounded-xl object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-start min-w-0 pt-1 gap-1">
        <h3 className="text-white text-sm font-semibold line-clamp-2 leading-snug">
          {video?.title}
        </h3>
        <p className="text-[#aaaaaa] text-xs">
          {video?.owner?.userName || "Unknown"}
        </p>
        <p className="text-[#aaaaaa] text-xs">
          {video?.views} views
        </p>
      </div>
    </div>
  );
}

export default VideoRecommendationCard;