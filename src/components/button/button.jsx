import "./button.css";
import CV from "../props/CV.pdf";

function Buttons() {
  return (
    <div className="container button-container">
      <a href={CV} download className="btn pri">
      Descargar CV
      </a>
      <a href="#contact" className="btn sec">
      Contacto
      </a>
    </div>
  );
}

export default Buttons;