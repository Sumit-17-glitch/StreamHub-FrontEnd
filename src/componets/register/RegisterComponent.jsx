
import React, { useState } from "react";

const RegisterComponent = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  // Preview Images
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join StreamHub today
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Username */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Avatar Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Avatar
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full border border-gray-300 rounded-xl p-2"
            />

            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="mt-4 w-24 h-24 rounded-full object-cover border"
              />
            )}
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Cover Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              className="w-full border border-gray-300 rounded-xl p-2"
            />

            {coverPreview && (
              <img
                src={coverPreview}
                alt="Cover Preview"
                className="mt-4 w-full h-40 rounded-xl object-cover border"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;