import React from "react";
import "../assets/styles/Blog.scss";
import ArticleBlog from "../components/ArticleBlog";

const Blog = () => {
  return (
    <section className="coffe-container">
      <h1 className="coffe-title-left">
        World
        <span className="coffe-title-rigth"> Histories</span>
      </h1>
      <p>
        Historias perfectas para ser contadas y escritas
        <br />
        por los mejores historiadores
      </p>
      <input
        className="coffe-search"
        type="text"
        placeholder="Search your Stories"
      />
      <ArticleBlog />
    </section>
  );
};

export default Blog;
