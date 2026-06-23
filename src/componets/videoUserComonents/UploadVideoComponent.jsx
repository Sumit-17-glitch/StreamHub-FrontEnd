// VideoUpload.jsx
import React, { useEffect, useState } from "react";
import { publishVideo } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { useSelector } from "react-redux";


function UploadVideoComponent() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const currentUser = useSelector((state) => state.auth.user);
    const [thumbnailPreview, setThumbnailPreview] = useState("");

    const handleVideoChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setVideo(file);
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setThumbnail(file);
            setThumbnailPreview(
                URL.createObjectURL(file)
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("video", video);
        formData.append("thumbnail", thumbnail);

        try {
            const data = await publishVideo(formData);
            if (data) {
                navigate(`/profile/${data.owner.userName}`);
                alert("Video uploaded successfully!");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold mb-8">
                Upload Video
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* Title */}
                <div>
                    <label className="block font-medium mb-2">
                        Title
                    </label>

                    <input
                        type="text"
                        placeholder="Enter video title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium mb-2">
                        Description
                    </label>

                    <textarea
                        rows="5"
                        placeholder="Enter video description"
                        value={description}
                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Video Upload */}
                <div>
                    <label className="block font-medium mb-2">
                        Video File
                    </label>

                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoChange}
                        className="w-full border rounded-xl p-3"
                    />

                    {video && (
                        <p className="mt-2 text-sm text-gray-500">
                            {video.name}
                        </p>
                    )}
                </div>

                {/* Thumbnail Upload */}
                <div>
                    <label className="block font-medium mb-2">
                        Thumbnail
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className="w-full border rounded-xl p-3"
                    />

                    {thumbnailPreview && (
                        <img
                            src={thumbnailPreview}
                            alt="Thumbnail Preview"
                            className="mt-4 w-full h-48 object-cover rounded-xl border"
                        />
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                >
                    Upload Video
                </button>

            </form>

        </div>
    );
}

export default UploadVideoComponent;