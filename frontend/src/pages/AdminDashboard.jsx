import React, { useEffect, useState } from "react";
import { fetchAdminDashboard, logout } from "../api";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("🟢 AdminDashboard Mounted!");
        fetchAdminDashboard()
            .then(setData)
            .catch(error => console.error("❌ Error fetching dashboard:", error));
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/admin-login");
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li><a href="/admin/manage-jobs">Manage Jobs</a></li>
                    <li><a href="/admin/manage-blogs">Manage Blogs</a></li>
                    <li><a href="/admin/manage-users">Manage Users</a></li>
                    <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                </ul>
            </aside>

            <main className="dashboard-content">
                <h2>Admin Dashboard</h2>
                {data ? (
                    <div className="dashboard-cards">
                        <div className="card">
                            <h3>Total Users</h3>
                            <p>{data.totalUsers}</p>
                        </div>
                        <div className="card">
                            <h3>Total Jobs</h3>
                            <p>{data.totalJobs}</p>
                        </div>
                        <div className="card">
                            <h3>Total Blogs</h3>
                            <p>{data.totalBlogs}</p>
                        </div>
                    </div>
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
