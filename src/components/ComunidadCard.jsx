import React, { useState, useEffect } from "react";
import "../assets/styles/ComunidadCard.scss";

const API = "http://localhost:3000/initalState";

const ComunidadCard = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSpeakers(data.speakers));
  }, []);

  return (
    <div className="coffe-comunidadCard">
      {speakers.map((speaker) => (
        <div className="coffe-card">
          <div className="container-card-top">
            <img className="img-card" src={speaker.image} alt="" />
            <img className="flag-img" src={speaker.country}></img>
          </div>
          <div className="container-card-mid">
            <h3 className="coffe-ttitle-comunidad">{speaker.name}</h3>
            <i className="fab fa-twitter"></i>
            <br />
            <span className="coffe-span-comunidad">{speaker.profession}</span>
            <p className="coffe-bio-comunidad">{speaker.description}</p>
          </div>
          <div className="container-card-line"></div>
          <div className="container-card-bot">
            <p className="coffe-bio-comunidad">Skills</p>
            <ul>
              <li>React</li>
              <li>Node Js</li>
              <li>Kotiln</li>
              <li>Node Js</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComunidadCard;
