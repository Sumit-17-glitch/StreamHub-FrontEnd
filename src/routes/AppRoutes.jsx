import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Videos from "../pages/Videos";
import Layout from "../componets/Layout";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/all-videos" element={<Videos />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes