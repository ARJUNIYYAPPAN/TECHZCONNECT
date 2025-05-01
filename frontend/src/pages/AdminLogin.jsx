import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password);
            if (response && response.token) {
                console.log("✅ Token Received:", response.token);
                localStorage.setItem("token", response.token); // Store token
                navigate("/admin");  // Redirect to Admin Dashboard
            } else {
                throw new Error("No token received");
            }
        } catch (err) {
            console.error("❌ Login Failed:", err);
            setError("Login failed. Please check credentials.");
        }
    };
    

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
