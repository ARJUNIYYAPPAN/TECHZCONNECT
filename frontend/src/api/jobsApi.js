const API_URL = "http://localhost:5000/api/jobs"; // Backend API URL

// Function to add a new job
export const addJob = async (jobData) => {
    try {
        const response = await fetch(`${API_URL}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}` // Auth token
            },
            body: JSON.stringify(jobData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding job:", error);
        return { error: "Failed to add job" };
    }
};

// Function to fetch all jobs
export const getJobs = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
