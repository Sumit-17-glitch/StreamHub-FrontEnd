import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Logo from "../Logo";
import { getAllVideos } from "../../services/api";
import Loading from "../Loading";

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await getAllVideos("" ,1, 10); //since initially there is no query
                setVideos(data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    if(loading){
        return <Loading />;
    }
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Videos Grid */}
            <div className="max-w-7xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {videos.map((video) => (    
                    <VideoCard
                        key={video._id}
                        videoId={video._id}
                        videoFile={video.videoFile.url}
                        thumbnail={video.thumbnail.url}
                        avatar={video.owner.avatar.url}
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