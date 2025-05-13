import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { fetchBlogById } from "../api";
import { motion } from "framer-motion";
import "./BlogDetailsPage.css";

const dummyBlogs = [
    {
        id: 1,
        title: "AI in HR – A Game Changer",
        author: "Techzin Team",
        date: "2025-04-10",
        description: "Explore how AI is transforming recruitment, training, and employee engagement.",
        content: `Artificial Intelligence is revolutionizing HR operations. From automating resume screening to predictive analytics in employee retention, AI is becoming indispensable. Companies are leveraging chatbots, sentiment analysis tools, and more.`,
        imageUrl: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        title: "Top 5 Hiring Trends in 2025",
        author: "Arjun Iyyappan",
        date: "2025-04-05",
        description: "From remote-first roles to skills-based hiring – discover what’s shaping talent acquisition.",
        content: `2025 is bringing big changes in hiring. Remote-first culture, diversity-driven hiring, AI-powered sourcing, and skills-based assessments are gaining momentum. Employers are also investing in virtual onboarding and training.`,
        imageUrl: "https://img.freepik.com/free-photo/businessmen-shaking-hands-while-another-is-writing_1262-721.jpg?uid=R199951794&ga=GA1.1.1205905824.1747115791&semt=ais_hybrid&w=740"
    },
];

// const BlogDetailsPage = () => {
//     const { id } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadBlogDetails = async () => {
//             try {
//                 const blogData = await fetchBlogById(id);
//                 if (!blogData) {
//                     setError("Blog not found.");
//                 } else {
//                     setBlog(blogData);
//                 }
//             } catch (error) {
//                 console.error("❌ Error fetching blog details:", error);
//                 setError("Failed to load blog. Please try again.");
//             }
//         };
//         loadBlogDetails();
//     }, [id]);

//     if (error) return <p className="error-message">{error}</p>;
//     if (!blog) return <p className="loading-message">Loading blog details...</p>;

//     return (
//         <motion.div 
//             className="blog-details-container"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <h1>{blog?.title}</h1>
//             <p className="blog-meta">
//                 By {blog?.author || "Unknown"} | {blog?.date ? new Date(blog.date).toDateString() : "Unknown Date"}
//             </p>

//             {blog?.image && (
//                 <img src={blog.image} alt="Blog cover" className="blog-image" />
//             )}

//             {/* Optional: Use HTML content rendering if blog.content contains HTML */}
//             <div
//                 className="blog-content"
//                 dangerouslySetInnerHTML={{ __html: blog?.content || "<p>No content available.</p>" }}
//             />
//         </motion.div>
//     );
// };

const BlogDetailsPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const selectedBlog = dummyBlogs.find((b) => b.id === parseInt(id));
        setBlog(selectedBlog);
    }, [id]);

    if (!blog) return <p className="error-message">Blog not found.</p>;

    return (
        <motion.div
            className="blog-detail-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{blog.title}</h1>
            <p className="blog-detail-meta">
                By {blog.author} | {new Date(blog.date).toDateString()}
            </p>
            <motion.img
                src={blog.imageUrl}
                alt={blog.title}
                className="blog-detail-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="blog-detail-content">{blog.content}</p>
        </motion.div>
    );
};    

export default BlogDetailsPage;
