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
import OurServices from "../components/OurServices";
import FeaturedJobs from "../components/FeaturedJob";
import WhyChooseUs from "../components/WhyChooseUs";
import RecruitmentProcess from "../components/RecruitmentProcess";
import ClientTestimonial from "../components/ClientTestimonial"; 
import IndustriesWeServe from "../components/IndustriesWeServe";
import ClientsAndPartners from "../components/ClientsAndPartners";
import QuickStats from "../components/QuickStats";
import FAQSection from "../components/FAQSection";
// import FinalCTASection from "../components/FinalCTASection";


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
      <OurServices/>
      <WhyChooseUs/>
      <FeaturedJobs/>
      <RecruitmentProcess/>
      <ClientTestimonial/>
      <IndustriesWeServe/>
      <ClientsAndPartners/>
      <QuickStats/>
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

      

      <NewsFilter/>
      <FAQSection/>
      {/* <FinalCTASection/> */}
      <GoToTop/>
      




    </div>
  );
}

export default Home;
