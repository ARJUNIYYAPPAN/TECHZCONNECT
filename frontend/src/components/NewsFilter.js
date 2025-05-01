import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchLatestNews } from '../api';
import './NewsFilter.css';

const NewsFilter = () => {
  const [filter, setFilter] = useState("business");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getNews() {
      setLoading(true);
      setError('');
      try {
        const latestNews = await fetchLatestNews(filter);
        setNews(latestNews || []);  // Fallback to empty array if undefined
      } catch (err) {
        console.error("Error fetching news:", err);
        setError('Failed to load news. Please try again later.');
        setNews([]);  // Empty array on error
      }
      setLoading(false);
    }
    getNews();
  }, [filter]);

  return (
    <div className="news-filter">
      <div className="filter">
        <label>Filter by Category:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <TransitionGroup className="news-list">
          {news.length > 0 ? (
            news.map((item, index) => (
              <CSSTransition key={item.url} timeout={300} classNames="fade" in={true} unmountOnExit >
                <div className="news-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              </CSSTransition>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </TransitionGroup>
      )}
    </div>
  );
};

export default NewsFilter;
