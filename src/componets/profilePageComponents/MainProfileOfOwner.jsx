import React from 'react'
import VideoCard from '../video/VideoCard';
import { useNavigate } from 'react-router-dom';


function MainProfileOfOwner(incomingChannel) {
    const channel = incomingChannel.channel;
    const navigate = useNavigate();

    const uploadedVideos = [
        {
            _id: 1,
            title: "React Tutorial",
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            views: "120K views",
            duration: 725,
        },
        {
            _id: 2,
            title: "Node JS Crash Course",
            thumbnail:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            views: "90K views",
            duration: 840,
        },
        {
            _id: 3,
            title: "React Tutorial",
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            views: "120K views",
            duration: 725,
        },
        {
            _id: 4,
            title: "Node JS Crash Course",
            thumbnail:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            views: "90K views",
            duration: 840,
        },
    ];

    const watchHistory = [
        {
            _id: 1,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
        {
            _id: 2,
            thumbnail:
                "https://images.unsplash.com/photo-1537432376769-00aabcfa3731",
        },
        {
            _id: 3,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            _id: 4,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
        {
            _id: 5,
            thumbnail:
                "https://images.unsplash.com/photo-1537432376769-00aabcfa3731",
        },
        {
            _id: 6,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
    ];

    const handleUploadVideo = () => {
        navigate("/upload-video");
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">

                {/* Left Section */}
                <div className="flex-1 p-6 h-screen overflow-hidden flex flex-col">

                    {/* Sticky Profile Section */}
                    <div className="sticky top-5 z-10 bg-gray-100 pb-5">

                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                            {/* Smaller Cover */}
                            <div
                                className="h-24 md:h-32 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${channel.coverImage.url})`
                                }}
                            />

                            {/* Profile Section */}
                            <div className="relative px-6 pb-4">

                                <div className="flex items-end gap-4">

                                    {/* Avatar */}
                                    <div className="-mt-12 md:-mt-16 flex-shrink-0">

                                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-300">

                                            <img
                                                src={channel.avatar.url}
                                                alt="avatar"
                                                className="w-full h-full object-cover"
                                            />

                                        </div>

                                    </div>

                                    {/* Username + Subscribers */}
                                    <div className="pb-2">

                                        <h2 className="text-xl md:text-2xl font-bold">
                                            {channel.userName}
                                        </h2>

                                        <p className="text-gray-500 text-sm">
                                            {channel.subscriberCount} Subscribers
                                        </p>

                                    </div>

                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-4">

                                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                                        Edit Profile
                                    </button>

                                    <button
                                        className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition"
                                        onClick={handleUploadVideo}
                                    >
                                        Upload Video
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Scrollable Videos Section */}
                    <div className="mt-6 flex-1 flex flex-col overflow-hidden">

                        {/* Sticky Header */}
                        <div className="sticky top-0 z-10 bg-gray-100 pb-4">

                            <h2 className="text-2xl font-bold">
                                Uploaded Videos
                            </h2>

                        </div>

                        {/* Scrollable Video Grid */}
                        <div className="flex-1 overflow-y-auto hide-scrollbar">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {uploadedVideos.map((video) => (

                                    <VideoCard
                                        key={video._id}
                                        thumbnail={video.thumbnail}
                                        title={video.title}
                                        views={video.views}
                                        duration={video.duration}
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="sticky top-5 w-full lg:w-80 bg-white shadow-md p-5 h-screen overflow-hidden">

                    {/* Header */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Watch History
                        </h2>
                    </div>

                    {/* Scrollable Videos */}
                    <div className="space-y-5 overflow-y-auto h-[calc(100vh-100px)] pr-2 ">

                        {watchHistory.map((video) => (

                            <div
                                key={video._id}
                                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                            >

                                <img
                                    src={video.thumbnail}
                                    alt="history"
                                    className="w-full h-40 object-cover"
                                />

                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainProfileOfOwner