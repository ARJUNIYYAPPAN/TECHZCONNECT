import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (token) {
        console.log("❌ No token! Redirecting to login...");
        return <Navigate to="/admin-login" />;
    } else {
        console.log("✅ Token found, rendering private route");
        return children; // ✅ Return children directly
    }
};

export default PrivateRoute;
