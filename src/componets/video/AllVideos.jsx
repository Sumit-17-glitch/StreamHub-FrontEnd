// VideosPage.jsx
import React, { useState } from "react";
import VideoCard from "./VideoCard";
import Logo from "../Logo";

const AllVideos = () => {
  const [search, setSearch] = useState("");

  // Dummy Videos
  const videos = [
    {
      id: 1,
      title: "Learn React in One Video",
      views: "1.2M views",
      duration: "12:45",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      title: "Tailwind CSS Full Course",
      views: "850K views",
      duration: "18:20",
      thumbnail:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      title: "JavaScript Crash Course",
      views: "950K views",
      duration: "22:10",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      title: "Build Full Stack App",
      views: "500K views",
      duration: "30:00",
      thumbnail:
        "https://images.unsplash.com/photo-1537432376769-00aabcfa3731",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
  ];

  // Filter Videos
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumbnail}
            avatar={video.avatar}
            title={video.title}
            views={video.views}
            duration={video.duration}
          />
        ))}

      </div>
    </div>
  );
};

export default AllVideos;