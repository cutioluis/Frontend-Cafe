import React from "react";
import "../assets/styles/Header.scss";

const Header = () => {
  return (
    <div className="coffe-header">
      <div>
        <p className="header-mini">
          <b>FrontendCafè</b>
        </p>
        <h1 className="header-title">
          Una Comunidad
          <br />
          Divertidad
        </h1>
        <span>
          Learn in our community without fear of being judged
          <br />
          totally start now
        </span>
        <br />
        <button className="header-discord">
          <i className="fab fa-discord"></i>
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default Header;
