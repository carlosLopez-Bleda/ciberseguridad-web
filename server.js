import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend

const PORT = process.env.PORT || 5000;

// Ruta para obtener noticias desde el backend
app.get("/api/noticias", async (req, res) => {
    try {
      const apiKey = process.env.VITE_NEWS_API_KEY;
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error(`Error al obtener noticias: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Datos enviados al frontend:", data.articles.slice(0, 5)); // 👈 Verifica la respuesta en el backend
      res.json(data.articles.slice(0, 5)); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
