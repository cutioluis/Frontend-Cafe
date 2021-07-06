import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navigation.scss";
import logo from "../assets/static/logo-cafe.png";

const Navigation = () => {
  return (
    <div className="nav-elipse">
      <nav className="coffe-nav">
        <Link to="/">
          <img className="coffe-logo" src={logo} alt="Frontend Cafe" />
        </Link>
        <div className="coffe-left">
          <ul className="left-coffe">
            <Link to="/comunidad">
             <li>Comunidad</li>
            </Link>
            <li>Online</li>
            <Link to="/blog">
              <li className="list-blog">
                  ▼ Blogs
              </li>
            </Link>
          </ul>
          <Link to="/login">
            <button className="coffe-join">Join Now</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
