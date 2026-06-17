import React from 'react'
import { User } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProfileNavigationBtn() {
    const navigate = useNavigate();
    const currentuser = useSelector((state) => state.auth.user);

    return (
        <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-700"
            onClick={() => {
                navigate(`/profile/${currentuser.userName}`)
            }}
        >
            <User size={18} />
            Profile
        </button>
    )
}

export default ProfileNavigationBtn