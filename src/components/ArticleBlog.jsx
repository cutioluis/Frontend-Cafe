import React, { useState, useEffect } from "react";
import "../assets/styles/ArticleBlog.scss";

const API =
  "https://newsapi.org/v2/everything?q=amazon&apiKey=daa3a3d7c6634f648cc283e039621894";

const ArticleBlog = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="coffe-article">
      {news.map((article) => (
        <div className="article-container">
          <div className="article-img-container">
            <img className="article-img" src={article.urlToImage} alt="" />
          </div>
          <div className="article-rigth-container">
            <button className="article-button"> {article.source.name} </button>
            <a className="article-title-ancla" href={article.url}>
              <h2 className="article-title">{article.title}</h2>
            </a>
            <a className="article-title-ancla" href={article.url}>
              <p className="article-paragraph">{article.description}</p>
            </a>
            <span className="article-time">
              <i className="far fa-clock"></i>
              {article.publishedAt}
            </span>
            <i class="fas fa-bookmark"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleBlog;
