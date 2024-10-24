import React, { useState, useEffect } from 'react';
import './style.css';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '3810a03439db495695409f14efab0326';
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    useEffect(() => {
        // Fetch news data from API
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                return response.json();
            })
            .then((data) => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Top News Headlines</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </a>
                        <img src={article.urlToImage} alt="Image Loading..." />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
