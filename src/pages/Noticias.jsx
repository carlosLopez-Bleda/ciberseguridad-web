import React from "react";
import { useState, useEffect } from "react";
import "../styles/Noticias.css";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/noticias"); // O usa la URL de Render si ya está en producción
        const data = await response.json();
        console.log("Noticias recibidas:", data); // 👈 Verifica en consola
        setNoticias(data); // Aseguramos que guardamos el array de noticias directamente
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="fade-in">
      <h2>Últimas Noticias de Ciberseguridad</h2>

      {loading ? <p>Cargando noticias...</p> : (
        <div className="noticias-container">
          {noticias.length > 0 ? (
            noticias.map((noticia, index) => (
              <div key={index} className="noticia-card">
                {noticia.urlToImage ? (
                  <img src={noticia.urlToImage} alt={noticia.title} className="noticia-img" />
                ) : (
                  <div className="no-image">No Image</div>
                )}
                <h3>{noticia.title}</h3>
                <p>{noticia.description ? noticia.description : "Sin descripción disponible"}</p>
                <a href={noticia.url} target="_blank" rel="noopener noreferrer">Leer más</a>
              </div>
            ))
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>No hay noticias disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Noticias;
