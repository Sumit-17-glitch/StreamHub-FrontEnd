import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import LoginBtn from "../buttons/LoginBtn";
import RegisterBtn from "../buttons/RegisterBtn";
import ProfileBtn from "../buttons/ProfileBtn";

const Header = () => {
    const navigate = useNavigate();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [search, setSearch] = useState("");
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 w-auto">
            {/* Desktop Menu */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Logo />

                {/* Desktop Menu */}


                {/* Conditional Buttons */}
                {!isLoggedIn && (
                    <>
                        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                            <li
                                className="hover:text-blue-600 transition cursor-pointer"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </li>
                            <li className="hover:text-blue-600 transition cursor-pointer">
                                About
                            </li>
                        </ul>
                        <div className="hidden md:flex items-center gap-4">
                            <LoginBtn />
                            <RegisterBtn />
                        </div>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="hidden md:flex items-center gap-4">
                            <ProfileBtn />
                        </div>
                    </>

                )}


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden bg-white shadow-lg px-6 py-4">
                    <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                        <li className="hover:text-blue-600 transition cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-blue-600 transition cursor-pointer">
                            About
                        </li>
                    </ul>

                    {/* Conditional Buttons */}
                    {!isLoggedIn && (
                        <div className=" md:flex items-center gap-4 ">
                            <LoginBtn />
                            <RegisterBtn />
                        </div>
                    )}
                    {isLoggedIn && (
                        <div className=" md:flex items-center gap-4">
                            <ProfileBtn />
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Header;