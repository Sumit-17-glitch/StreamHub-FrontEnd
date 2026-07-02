import React from 'react'
import { useState } from 'react';

function ProfileUpdate() {
  const [formData, setFormData] = useState({
        userName: "",
        email: "",
    });

    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const [avatarPreview, setAvatarPreview] = useState("");
    const [coverPreview, setCoverPreview] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleCoverChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setCoverImage(file);
        setCoverPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("userName", formData.userName);
        data.append("email", formData.email);

        if (avatar) {
            data.append("avatar", avatar);
        }

        if (coverImage) {
            data.append("coverImage", coverImage);
        }

        console.log(data);

        // API Call Here
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
                Update Profile
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* Username */}

                <div>

                    <label className="block font-medium mb-2">
                        Username
                    </label>

                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter username"
                    />

                </div>

                {/* Email */}

                <div>

                    <label className="block font-medium mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email"
                    />

                </div>

                {/* Avatar */}

                <div className='w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>

                    <label className="block font-medium mb-2">
                        Avatar
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />

                    {avatarPreview && (

                        <img
                            src={avatarPreview}
                            alt="Avatar Preview"
                            className="w-28 h-28 rounded-full object-cover mt-4"
                        />

                    )}

                </div>

                {/* Cover Image */}

                <div className='w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>

                    <label className="block font-medium mb-2">
                        Cover Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverChange}
                    />

                    {coverPreview && (

                        <img
                            src={coverPreview}
                            alt="Cover Preview"
                            className="w-full h-44 object-cover rounded-xl mt-4"
                        />

                    )}

                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    Update Profile
                </button>

            </form>

        </div>
    );
}

export default ProfileUpdate