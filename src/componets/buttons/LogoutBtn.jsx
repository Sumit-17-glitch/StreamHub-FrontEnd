import React from 'react'
import { LogOut } from "lucide-react";
import { logoutUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth.slice";

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
    logoutUser();
    dispatch(logout());
    navigate("/");
  }
    return (
        <button
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition text-red-600"
            onClick={logoutHandler}
        >
            <LogOut size={18} />
            Logout
        </button>
    )
}

export default LogoutBtn;