import "../styles/Hackers.css";
import "../styles/Animations.css";

const Hackers = () => {
  const hackers = [
    { 
      nombre: "Kevin Mitnick", 
      descripcion: "Uno de los hackers más famosos del mundo, conocido por sus intrusiones en sistemas de grandes empresas.",
      imagen: "/images/kevin.jpg"
    },
    { 
      nombre: "Anonymous", 
      descripcion: "Un grupo descentralizado de hackers activistas que han llevado a cabo múltiples operaciones en todo el mundo.",
      imagen: "/images/anonymous.jpg"
    },
    { 
      nombre: "Adrian Lamo", 
      descripcion: "Hacker conocido por reportar a Chelsea Manning, quien filtró documentos a WikiLeaks.",
      imagen: "/images/adrian-lamo.jpg"
    },
  ];

  return (
    <div className="fade-in">
      <h2>Hackers Famosos</h2>
      <div className="hackers-container">
        {hackers.map((hacker, index) => (
          <div key={index} className="hacker-card">
            <img src={hacker.imagen} alt={hacker.nombre} className="hacker-img" />
            <strong>{hacker.nombre}</strong>: {hacker.descripcion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackers;
