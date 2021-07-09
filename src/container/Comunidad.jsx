import React from "react";
import ComunidadCard from "../components/ComunidadCard";

const Comunidad = () => {
  return (
    <div className="coffe-container">
      <h1 className="coffe-title-left">
        Nuestra
        <span className="coffe-title-rigth"> Comunidad</span>
      </h1>
      <p>
      Crea tu perfil en nuestra comunidad para ser reconocido 
      <br />
      y tener preserncia online
        
      </p>
      <button className="header-discord">
          Crea tu perfil</button>
          <div className="container-cards">
            <ComunidadCard/>
          </div>
    </div>
  );
};

export default Comunidad;
