// VideoPlayer.jsx
import React, { useState } from "react";
import { updateViewsAndWatchHistory } from "../../services/api";
import { useNavigate } from "react-router-dom";

function VideoPlayerComponent({ video }) {
    const navigate = useNavigate();
    const [likeCount, setLikeCount] = useState(1);
    const [viewConted, setViewConted] = useState(false);

    const handleWatchTime = async (e) => {
        const currentTime = e.target.currentTime;
        if (currentTime >= 5 && !viewConted) {
            setViewConted(true);
            try {
                await updateViewsAndWatchHistory(video._id);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex flex-col gap-4">

            {/* Video Player */}
            <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl">
                <video
                    src={video?.videoFile?.url}
                    controls
                    className="w-full aspect-video"
                    onTimeUpdate={handleWatchTime}
                />
            </div>

            {/* Title */}
            <div className="shadow-md p-2 rounded-lg bg-white">
                <h1 className="text-black text-xl font-bold leading-snug">
                    {video?.title}
                </h1>

                {/* Views */}
                <p className="text-[#030303] text-sm -mt-2">
                    {video?.views} views
                </p>
            </div>
            {/* Divider */}


            {/* Channel row + actions */}
            <div className="flex items-center justify-between gap-3">

                {/* Avatar + Channel info + Subscribe */}
                <div className="flex items-center gap-3">
                    <img
                        src={video?.owner?.avatar?.url}
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        onClick={navigate(`/profile/${video?.owner?.userName}`)}
                    />
                    <div>
                        <h3 className="text-black font-semibold text-sm">
                            {video?.owner?.userName}
                        </h3>
                        <p className="text-[#aaaaaa] text-xs">subscribers</p>
                    </div>
                    <button className="ml-3 px-5 py-2 rounded-full bg-gray-200 text-black text-sm font-bold hover:bg-gray-300 transition">
                        Subscribe
                    </button>
                </div>

                {/* Like */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
                        <button
                            onClick={() => setLikeCount(prev => prev + 1)}
                            className="flex items-center gap-2 px-4 py-2 text-white text-sm hover:bg-[#3f3f3f] transition border-r border-[#444]"
                        >
                            👍 {likeCount}
                        </button>
                    </div>
                </div>

            </div>

            {/* Description box */}
            <div className="bg-[#ffffff] rounded-xl p-4 text-sm text-[#ffffff] shadow-md">
                <h1 className="font-bold text-black">Description</h1>
                <p className="text-[#000000] whitespace-pre-wrap line-clamp-3">
                    {video?.description}
                </p>
            </div>

        </div>
    );
}

export default VideoPlayerComponent;