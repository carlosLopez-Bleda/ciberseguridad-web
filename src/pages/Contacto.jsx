import { useState } from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    if (!nombre || !email || !mensaje) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validarEmail(email)) {
      setError("Por favor, introduce un correo válido.");
      return;
    }

    setExito("¡Mensaje enviado correctamente!");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="fade-in">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {exito && <p className="exito">{exito}</p>}

        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Tu nombre" 
        />

        <label>Correo electrónico:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Tu correo" 
        />

        <label>Mensaje:</label>
        <textarea 
          value={mensaje} 
          onChange={(e) => setMensaje(e.target.value)} 
          placeholder="Tu mensaje"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
