import React from "react";
import "../styles/Animations.css";

const Historias = () => {
  const historias = [
    {
      titulo: "El gusano de Morris (1988)",
      descripcion: "Uno de los primeros gusanos informáticos que causó estragos en la red.",
      imagen: "/images/morris_Worm.jpg"
    },
    {
      titulo: "El hackeo de Yahoo (2013-2014)",
      descripcion: "Una de las mayores filtraciones de datos, con más de 3 mil millones de cuentas comprometidas.",
      imagen: "/images/yahoo.jpg"
    },
    {
      titulo: "WannaCry (2017)",
      descripcion: "Un ransomware que afectó a miles de empresas y gobiernos en todo el mundo.",
      imagen: "/images/wannacry.jpg"
    }
  ];

  return (
    <div className="fade-in">
      <h2>Historias de Ciberseguridad</h2>
      {historias.map((historia, index) => (
        <div key={index} className="historia-card">
          <img src={historia.imagen} alt={historia.titulo} className="historia-img" />
          <h3>{historia.titulo}</h3>
          <p>{historia.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Historias;
