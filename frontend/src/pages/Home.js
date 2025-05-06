import React, {useEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
// import HeroSlider from "../components/HeroSlider";
import { fetchLatestNews } from "../api/newsApi";
import {motion} from "framer-motion";
import "../styles/Home.css";
import NewsFilter from "../components/NewsFilter";
import GoToTop from "../components/GoToTop";
// import Carousel from "../components/Carousel";  
// import { NavLink } from "react-router-dom";
import HRSolutions from "../components/HRSolutions";


function Home() {

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter] = useState("business");
  const newsPerPage = 4;

  useEffect(() =>{
    async function getNews() {
      const latestNews = await fetchLatestNews(filter);
      setNews(latestNews);
      setTotalPages(Math.ceil(latestNews.length / newsPerPage));
    }
    getNews();
  }, [filter]);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-page">
      
      <HeroSection />
      <HRSolutions/>
      {/* <section className="services">
        <h2>Our HR Solutions</h2>
        <div className="service-cards">
        <motion.div 
            className="card" 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink to="/talent-acquisition" className="home-nav-link">
              Recruitment & Talent Acquisition
            </NavLink>
          </motion.div>
          <motion.div 
            className="card" 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink to="/employee-trainee" className="home-nav-link">Employee Training & Development</NavLink>
          </motion.div>
          <motion.div 
            className="card" 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <NavLink to="/global-it-recruitment" className="home-nav-link">Global IT Recruitment</NavLink>
          </motion.div>
        </div>
      </section> */}



      <section className="testimonials">
  <h2>What Our Clients Say</h2>
  <motion.div 
  className="testimonial-cards"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  >
    <div className="testimonial-card">
      <p>"The AI-powered recruitment solution is simply amazing!"</p>
      <h4>- Michael, HR Manager</h4>
    </div>
    <div className="testimonial-card">
      <p>"Their career coaching sessions boosted my confidence for interviews."</p>
      <h4>- Arjun, Software Engineer</h4>
    </div>
    <div className="testimonial-card">
      <p>"TechzAspire helped us find the perfect candidates in no time!"</p>
      <h4>- Prawin, CEO of XYZ Corp</h4>
    </div>
  </motion.div>
</section>
    

<section className="latest-news">
        <h2>Latest News & Updates</h2>
        <div className="news-cards">
          {currentNews.map((article, index) => (
            <motion.div 
              className="news-card" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </motion.div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({length: totalPages}, (_, index) =>(
            <button
            key={index + 1}
            onClick={()=>paginate(index + 1)}
            className={currentPage === index + 1 ?  "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      <GoToTop/>

      <NewsFilter/>

      




    </div>
  );
}

export default Home;
