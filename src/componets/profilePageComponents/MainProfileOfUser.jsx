// UserProfile.jsx
import React, { useEffect, useState } from "react";
import VideoCard from "../video/VideoCard";
import { subscribeToChannel } from "../../services/api";

function MainProfileOfUser(incomingChannel) {
    const channel = incomingChannel.channel;
    const [isSubscribed, setIsSubscribed] = useState(channel.isSubscribed);
    const [subscriberCount, setSubscriberCount] = useState(channel.subscriberCount);
    const user = {
        username: "john_doe",
        subscribers: "1.2K Subscribers",
        avatar: "https://i.pravatar.cc/300",
        coverImage:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    };

    const uploadedVideos = [
        {
            _id: 1,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            title: "React Tutorial",
            views: "12K views",
            duration: "10:25",
        },
        {
            _id: 2,
            thumbnail:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            title: "Node.js Crash Course",
            views: "8K views",
            duration: "15:20",
        },
        {
            _id: 3,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            title: "MongoDB Basics",
            views: "5K views",
            duration: "08:12",
        },
        {
            _id: 4,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            title: "React Tutorial",
            views: "12K views",
            duration: "10:25",
        },
        {
            _id: 5,
            thumbnail:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            title: "Node.js Crash Course",
            views: "8K views",
            duration: "15:20",
        },
        {
            _id: 6,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            title: "MongoDB Basics",
            views: "5K views",
            duration: "08:12",
        },
    ];


    const handleSubscribedClick = async (e) => {
        try {
            const data = await subscribeToChannel(channel.userName);
            setIsSubscribed(!isSubscribed);
            if (data.data) {
                setSubscriberCount(subscriberCount - 1);
            } else {
                setSubscriberCount(subscriberCount + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="w-[95%] lg:w-[70%] mx-auto">

                {/* Cover Image */}
                <div className="relative">
                    <img
                        src={channel.coverImage.url}
                        alt="cover"
                        className="w-full h-40 md:h-56 object-cover rounded-2xl"
                    />

                    <div className="absolute -bottom-12 left-6">
                        <img
                            src={channel.avatar.url}
                            alt="avatar"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* User Info */}
                <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {channel.userName}
                        </h1>

                        <p className="text-gray-600">
                            {subscriberCount} subscribers
                        </p>
                    </div>

                    {
                        isSubscribed &&
                        <button
                            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full font-medium"
                            onClick={handleSubscribedClick}
                        >
                            Subscribed
                        </button>
                    }
                    {
                        !isSubscribed &&
                        <button
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium"
                            onClick={handleSubscribedClick}
                        >
                            Subscribe
                        </button>
                    }

                </div>

                {/* Uploaded Videos Section */}
                <div className="mt-8 bg-white rounded-2xl shadow-md p-5">

                    <h2 className="text-xl font-bold mb-4">
                        Uploaded Videos
                    </h2>

                    <div className="h-[55vh] overflow-y-auto hide-scrollbar">

                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

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
        </div>
    );
}

export default MainProfileOfUser;