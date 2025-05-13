import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../api";
import { motion } from "framer-motion";
import "./BlogPage.css";
import { NavLink } from "react-router-dom";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5;

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const blogData = await fetchBlogs();
                setBlogs(blogData);
            } catch (error) {
                console.error("❌ Error fetching blogs:", error);

                setBlogs([
                    {
                        id: 1,
                        title: "AI in HR – A Game Changer",
                        author: "Techzin Team",
                        date: "2025-04-10",
                        description: "Explore how AI is transforming recruitment, training, and employee engagement.",
                        imageUrl: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D"
                    },
                    {
                        id: 2,
                        title: "Top 5 Hiring Trends in 2025",
                        author: "Arjun Iyyappan",
                        date: "2025-04-05",
                        description: "From remote-first roles to skills-based hiring – discover what’s shaping talent acquisition.",
                        imageUrl: "https://img.freepik.com/free-photo/businessmen-shaking-hands-while-another-is-writing_1262-721.jpg?uid=R199951794&ga=GA1.1.1205905824.1747115791&semt=ais_hybrid&w=740"
                    },
                    // Add more dummy blogs if needed
                ]);
                
                setError(null);
            } finally {
                setLoading(false);
            }
        };
        loadBlogs();
    }, []);

    // Pagination Logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <p className="loading-message">Loading blogs...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="blog-container">
            <h1>Latest HR Blogs</h1>
            <div className="blog-list">
                {currentBlogs.map((blog, index) => (
                    // <motion.div 
                    //     key={blog.id}
                    //     className="blog-card"
                    //     initial={{ opacity: 0, y: 30 }}
                    //     animate={{ opacity: 1, y: 0 }}
                    //     transition={{ duration: 0.4, delay: index * 0.1 }}
                    // >
                    //     {blog.imageUrl && (
                    //         <img src={blog.imageUrl} alt={blog.title} className="blog-thumbnail" />
                    //     )}    
                    //     <h2>{blog.title}</h2>
                    //     <p className="blog-meta">
                    //         By {blog.author} | {new Date(blog.date).toDateString()}
                    //     </p>
                    //     <p>{blog.description.slice(0,100)}...</p>
                    //     <a href={`/blog/${blog.id}`} className="read-more">Read More</a>
                    // </motion.div>

                    <motion.div
  className="blog-card"
  key={blog.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
  whileHover={{ scale: 1.03 }}
>
  <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
  <h2>{blog.title}</h2>
  <p className="blog-meta">By {blog.author} | {new Date(blog.date).toDateString()}</p>
  <p>{blog.description}</p>
  <NavLink to={`/blog/${blog.id}`} className="read-more">Read More</NavLink>
</motion.div>

                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="pagination">
                {[...Array(Math.ceil(blogs.length / blogsPerPage))].map((_, i) => (
                    <button
                        key={i} 
                        className={currentPage === i + 1 ? "active" : ""}
                        onClick={() => paginate(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
