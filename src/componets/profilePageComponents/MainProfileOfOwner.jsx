import React from 'react'
import VideoCard from '../video/VideoCard';


function MainProfileOfOwner() {
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
    ];

    // Dummy Watch History
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
    ];

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row">

                {/* Left Section */}
                <div className="flex-1 p-6 h-screen overflow-hidden flex flex-col">

                    {/* Sticky Profile Section */}
                    <div className="sticky top-5 z-10 bg-gray-100 pb-5">

                        <div className="bg-white rounded-2xl shadow-md p-6">

                            <div className="flex flex-col sm:flex-row items-center gap-6">

                                {/* Avatar */}
                                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">

                                    <img
                                        src="https://i.pravatar.cc/300"
                                        alt="avatar"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* User Info */}
                                <div>

                                    <h2 className="text-3xl font-bold">
                                        username
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        1.2K Subscribers
                                    </p>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-5 mt-8">

                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                                    Edit profile
                                </button>

                                <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl transition">
                                    Upload Video
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* Scrollable Videos Section */}
                    <div className="mt-6 overflow-y-auto flex-1 pr-2 hide-scrollbar max-h-screen">

                        <h2 className="text-2xl font-bold mb-6">
                            Uploaded Videos
                        </h2>

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

                {/* Right Sidebar */}
                <div className="sticky top-5 w-full lg:w-80 bg-white shadow-md p-5 h-screen overflow-hidden">

                    {/* Header */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Watch History
                        </h2>
                    </div>

                    {/* Scrollable Videos */}
                    <div className="space-y-5 overflow-y-auto h-[calc(100vh-100px)] pr-2 hide-scrollbar">

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