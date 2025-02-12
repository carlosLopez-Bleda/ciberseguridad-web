import React from "react";
import { useState, useEffect } from "react";
import "../styles/Noticias.css";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${apiKey}`
        );
        const data = await response.json();
        setNoticias(data.articles.slice(0, 5)); // Solo mostramos 5 noticias
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="fade-in">
      <h2>Últimas Noticias de Ciberseguridad</h2>
      <ul>
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <li key={index}>
              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                {noticia.title}
              </a>
            </li>
          ))
        ) : (
          <p>Cargando noticias...</p>
        )}
      </ul>
    </div>
  );
};

export default Noticias;
