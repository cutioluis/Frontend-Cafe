import React from "react";
import "../assets/styles/NuestraComunidad.scss";
import Left from "../assets/static/coffe-recomendation.png";
import Right from "../assets/static/coffe-recomendation2.png";

const NuestraComunidad = () => {
  return (
    <div className="coffe-comunidad-container">
      <div className="coffe-left-comunidad">
        <h2 className="title-home">Nuestra Comunidad</h2>
        <p>
          Somos una comunidad centradamente en el aprendizaje de Area como
          Diseño, Frontend Backend, todo lo que te puedas imaginar
        </p>
        <img className="coffe-img-left" src={Left} alt="Recomendacion" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="coffe-right-comunidad">
        <img className="coffe-img-rigth" src={Right} alt="Recomendacion" />
      </div>
    </div>
  );
};

export default NuestraComunidad;
