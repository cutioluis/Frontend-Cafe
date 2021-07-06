import React from "react";
import "../assets/styles/ComunidadCard.scss";

const ComunidadCard = () => {
  return (
    <div className="coffe-comunidadCard">
      <div className="coffe-card">
        <div className="container-card-top">
              <img className="img-card" src="https://static.platzi.com/media/speakers/cvander.png" alt="" />
          <img
            className="flag-img"
            src="https://static.platzi.com/media/flags/MX.png"
          ></img>
        </div>
        <div className="container-card-mid">
          <h3 className="coffe-ttitle-comunidad">Christian Van Der Henst</h3>
          <i className="fab fa-twitter"></i>
          <br />
          <span className="coffe-span-comunidad">Ui/Ux Designer</span>
          <p className="coffe-bio-comunidad">
            Me llamo Luis y me encanta crear contenido para redes sociales y
            compartir mi conocimieto como Frontend
          </p>
        </div>
        <div className="container-card-line"></div>
        <div className="container-card-bot">
          <p className="coffe-bio-comunidad" >Skills</p>
          <ul>
            <li>React</li>
            <li>Node Js</li>
            <li>Kotiln</li>
            <li>Node Js</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComunidadCard;
