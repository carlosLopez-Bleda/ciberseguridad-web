import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [modoOscuro, setModoOscuro] = useState(true);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.jpg" alt="Logo" className="logo" />
        <h1>Ciberseguridad</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/hackers">Hackers Famosos</Link></li>
        <li><Link to="/historias">Historias</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
      </ul>
      <button className="modo-btn" onClick={toggleModo}>
        {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </nav>
  );
};

export default Navbar;
