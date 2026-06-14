import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth.slice";


const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userData = {
        userName: username,
        email: email,
        password: password
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:8000/api/v1/users/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(userData),
                }
            );
            const data = await response.json();
            const user = data.data.user;
            dispatch(login(user));
            

        } catch (error) {
            console.log("Error:", error);

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">

            <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 shadow-xl rounded-2xl p-8">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Login
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Welcome back to StreamHub
                </p>

                {/* Form */}
                <form
                    className="space-y-5"
                    onSubmit={submitHandler}
                >

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;