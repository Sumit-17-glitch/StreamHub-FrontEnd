import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Logo from "../Logo";
import { getAllVideos } from "../../services/api";
import Loading from "../Loading";

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await getAllVideos("", pageNo, 10); //since initially there is no query
                setVideos(data.videos);
                setPage(data.currentPage);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, [pageNo]);

    if (loading) {
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
            <div className="flex justify-center gap-3 mt-8">

                    <button
                        disabled={page === 1}
                        onClick={() => setPageNo(prev => prev - 1)}
                        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span className="px-4 py-2">
                        {page} / {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPageNo(prev => prev + 1)}
                        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
        </div>
    );
};

export default AllVideos;