import React from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterBtn() {
    const navigate = useNavigate();
    return (
        <button
            className="group relative overflow-hidden px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            onClick={() => navigate("/register")}
        >

            {/* Glow Effect */}
            <span className="absolute inset-0 bg-white opacity-10 blur-xl group-hover:opacity-20 transition"></span>

            {/* Content */}
            <span className="relative flex items-center gap-2">
                Register
            </span>
        </button>
    )
}

export default RegisterBtn