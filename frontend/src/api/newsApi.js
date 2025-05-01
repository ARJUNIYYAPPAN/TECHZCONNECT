import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "9bcbced8eb264b769ad3f4de41fc11fa";  // Get from https://newsapi.org/

export const fetchLatestNews = async () => {
    try {
        const response = await axios.get(`${NEWS_API_URL}?country=us&category=business&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error("❌ Error fetching news:", error);
        return [];
    }
};
