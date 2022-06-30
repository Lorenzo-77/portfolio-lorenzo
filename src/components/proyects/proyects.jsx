import "./proyects.css";
import img1 from "../props/proyect1.png";
import img2 from "../props/proyect2.png";
import img3 from "../props/proyect3.png";
const Proyects = () => {
  return (
      <section id="portfolio">
        <h2>Proyectos</h2>

        <div className="container portfolio_container">

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={img1} alt=""/>
            </div>
            <h3>To-do List con Nodejs y Mysql</h3>
            <div className="portfolio_item-cta">
             <a href="https://github.com/Lorenzo-77/todo-List" className="boton_personalizado" target="_blank"><span>GitHub Proyecto</span></a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={img2} alt=""/>
            </div>
            <h3>PokeApi con React-js</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Lorenzo-77/app-pokeapi" className="boton_personalizado" target="_blank"><span>GitHub Proyecto</span></a>
            </div>
          </article>
          
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={img3} alt=""/>
            </div>
            <h3>Registro de escuela con C#</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/Lorenzo-77/Registro-De-Estudiantes" className="boton_personalizado" target="_blank"><span>GitHub Proyecto</span></a>
            </div>
          </article>

        </div>
      </section>
  );
};

export default Proyects;