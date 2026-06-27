import React, { useEffect, useState } from 'react';
import VideoRecommendation from '../componets/video/VideoRecommendation';
import VideoPlayerComponent from '../componets/video/VideoPlayerComponent';
import { useParams } from 'react-router-dom';
import { getVideobyId } from '../services/api';
import Loading from '../componets/Loading';

function VideoPlayer() {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState({});


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const data = await getVideobyId(videoId);
        await setVideo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [videoId]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-[#fffdfd]">
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[68%_32%] gap-6">

          <VideoPlayerComponent video={video} />

          <VideoRecommendation owner={video.owner?._id} />

        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;