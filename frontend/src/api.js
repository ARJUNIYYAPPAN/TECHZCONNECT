import axios from "axios";


export const API_BASE_URL = "http://localhost:5000/api/admin"; // Backend URL

// 🔹 Login API
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, {withCredentials: true});

        if (response.data.token) {
            localStorage.setItem("token", response.data.token); // Store token
            return response.data;
        } else{
            throw new Error("No token received form API");  
        }
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        throw error.response?.data || { error: "Login failed" };
    }
};

// Admin Login

export const adminLogin = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login`, 
            { username, password }, 
            { withCredentials: true } // ✅ Enable credentials
        );

        if (response.data.token) {
            localStorage.setItem("token", response.data.token); // ✅ Store token
            return response.data;
        } else {
            throw new Error("No token received from API");
        }
    } catch (error) {
        console.error("❌ Login Failed:", error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : { error: "Login failed" };
    }
};


// 🔹 Register API
export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, { username, email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

//Fetch AdminDashboard
export const fetchAdminDashboard = async () => {
    try {
        console.log("🟢 Function Called: fetchAdminDashboard()"); // Check if this appears
        const token = localStorage.getItem("token");

        if (!token) {
            console.log("❌ No token found in localStorage!");
            throw new Error("No token found, please log in again.");
        }

        console.log("🔍 Fetching admin dashboard...");
        const response = await axios.get(`${API_BASE_URL}/admin`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
        }); 

        console.log("✅ API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Dashboard Fetch Error:", error.response ? error.response.data : error.message);
        throw error.response ? error.response.data : { error: "Failed to fetch admin dashboard" };
    }
};





// export const fetchAdminDashboard = async () => {
//     try {
//         console.log("🟢 Function Called: fetchAdminDashboard()");
//         console.log(`🔍 Fetching admin dashboard from: ${API_BASE_URL}`);
        
//         const response = await axios.get(`${API_BASE_URL}/admin`,{
//             headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},
//             withCredentials: true
//         });
//         console.log("✅ Dashboard Data:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("❌ Dashboard Fetch Error:", error.response?.data || error.message);
//         throw error;
//     }
// };




// 🔹 Fetch Jobs API (with JWT token)
export const fetchJobs = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/jobs`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error.response?.data || error.message);
        throw error;
    }   
};

// 🔹 Logout Function
export const logout = () => {
    localStorage.removeItem("token");
};


// fetchLatestNews

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY; // ✅ Use environment variable

console.log("🔍 API Key from .env:", API_KEY);

export const fetchLatestNews = async (category = "business") => {
    try {
        if (!API_KEY) throw new Error("❌ Missing API Key! Check .env file.");
        const response = await axios.get(NEWS_API_URL, {
            params: {
                country: "us",
                category: category,
                apiKey: API_KEY, // ✅ Correct API key
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error("❌ Error fetching news:", error.response?.data || error.message);
        return [];
    }
};

// Fetch single job by ID
export const fetchJobById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/jobs/${id}`);
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching job details:", error);
        throw error;
    }
};

export const fetchBlogs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/blogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        return await response.json();
    } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        throw error;
    }
};

export const fetchBlogById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog details");
        return await response.json();
    } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        throw error;
    }
}; 

// ✅ Fetch All Jobs (Admin)
export const fetchAllJobs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        if (!response.ok) throw new Error("Failed to fetch jobs");
        return await response.json();
    } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        throw error;
    }
};

// ✅ Delete Job
export const deleteJob = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Failed to delete job");
    } catch (error) {
        console.error("❌ Error deleting job:", error);
        throw error;
    }
};




