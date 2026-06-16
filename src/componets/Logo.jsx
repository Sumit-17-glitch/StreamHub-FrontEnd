// Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => { navigate("/") }}
        >
            {/* Icon */}
            <div className="relative w-12 h-12 p-2">
                <div className="p-2 absolute inset-0 rounded-4xl bg-linear-to-br from-blue-500 to-purple-600 "></div>
                <div className="p-2 absolute inset-0 rounded-4xl bg-white flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-extrabold bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        SH
                    </span>
                </div>
            </div>

            {/* Text */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                    Stream<span className="text-blue-600">Hub</span>
                </h1>
            </div>
        </div>
    );
};

export default Logo;