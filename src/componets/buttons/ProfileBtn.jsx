// ProfileMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown } from "lucide-react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close popup when clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-xl hover:shadow-lg transition-all border border-gray-200"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
          S
        </div>

        <span className="hidden sm:block font-medium text-gray-700">
          Sumit
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Popup Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn z-50">
          
          {/* User Info */}
          <div className="px-4 py-3 border-b bg-gray-50">
            <p className="font-semibold text-gray-800">Sumit</p>
            <p className="text-sm text-gray-500">
              sumit@example.com
            </p>
          </div>

          {/* Menu Items */}
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-700">
            <User size={18} />
            Profile
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition text-red-600">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;