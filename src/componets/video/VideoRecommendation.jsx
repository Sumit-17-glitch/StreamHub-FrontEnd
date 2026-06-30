import React, { useEffect, useState } from "react";
import VideoRecommendationCard from "./VideoRecommendationCard";
import { getVideobyUserId } from "../../services/api";

function VideoRecommendation({ owner }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchVideo = async () => {
      try {
        const data = await getVideobyUserId(owner);
        setVideos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [owner]);

  return (

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-80px)] hide-scrollbar rounded-2xl shadow-gray-500 shadow-2xl">
        <div className="sticky top-0 z-10 p-4">

          <h2 className="text-2xl font-bold">
            Uploaded Videos
          </h2>

        </div>
        {videos.map((video) => (
          <VideoRecommendationCard key={video._id} video={video} />
        ))}
      </div>
  );
}

export default VideoRecommendation;