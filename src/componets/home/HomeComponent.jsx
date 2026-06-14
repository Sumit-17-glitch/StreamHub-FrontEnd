import React from 'react'
import LoginBtn from '../buttons/LoginBtn'
import RegisterBtn from '../buttons/RegisterBtn'
import { useNavigate } from 'react-router-dom';

function HomeComponent() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">

            <div className="text-center max-w-2xl">

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                    Welcome to{" "}
                    <span className="text-blue-500">
                        StreamHub
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                    Watch, stream, and enjoy your favorite content anytime,
                    anywhere. Join the future of entertainment today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                    {/* Login */}
                    <LoginBtn />

                    {/* Register */}
                    <RegisterBtn />

                    {/* Continue */}
                    <button
                        className="w-64 sm:w-auto px-8 py-3 rounded-xl border border-gray-500 text-gray-200 hover:bg-gray-800 transition duration-300"
                        onClick={() => navigate("/all-videos")}
                    >
                        Continue Without Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent