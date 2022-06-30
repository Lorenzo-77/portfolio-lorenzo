import "./about.css";
import Qualifications from "../qualifications/qualifications";
import { FcKindle } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import ME from "../props/me.jpg"

function About() {

  return (
    <section id="about">
      <h2>
        <span>Sobre mi</span> <br />
      </h2>

      <div className="container about_container">
        <div className="about_me-image">
          <img src={ME} alt="About image"/>
        </div>

        <div className="about_content">
          <div className="about_cards"> 
            <article className="about_card">
               <FcKindle className="about_icon"/>
              <h5>Expreciena</h5>
              <small>Universitaria</small>
            </article>

            <article className="about_card">
            <FcCommandLine className="about_icon"/>
              <h5>Proyectos</h5>
              <small>10</small>
            </article>

          </div>
          <p>
          Soy estudiante de la tecnicatura de “Desarrollo de Software”. Me apasiona la programación siempre estoy tratando de capacitarme día a día en los distintos lenguajes e 
          herramientas que abarcan este mundo ya sea en Backend o Fronend acompañado de profesores, compañeros y amigos.
          </p>

          <a href="https://www.linkedin.com/in/lorennzo-mu07/" className="btn-primary" target="_blank">
            <span>Mi Linkedin</span>
          </a>

        </div>
      </div>
      <Qualifications/>
    </section>
  );
}
export default About;