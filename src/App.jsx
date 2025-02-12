import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Hackers from "./pages/Hackers";
import Historias from "./pages/Historias";
import Contacto from "./pages/Contacto";
import MatrixEffect from "./components/MatrixEffect";
import Noticias from "./pages/Noticias";

const App = () => {
  return (
    <Router>
      <MatrixEffect />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackers" element={<Hackers />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/noticias" element={<Noticias />} />

      </Routes>
    </Router>
  );
};

export default App;
