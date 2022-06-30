import "./qualifications.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

const Qualifications = () => {
  return (
    <section id="experience">
        <h2>HABILIDADES</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Desarrollo Front-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="experience_details-icon" />
              <div>
               <h4>HTML</h4>
               <small>Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <DiCss3 className="experience_details-icon"/>
              <div>
              <h4>CSS</h4>
              <small>Intermedio</small></div>
            </article>

            <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small>Intermedio</small></div>
            </article>

            <article className="experience_details">
              <FaBootstrap className="experience_details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small>Intermedio</small></div>
            </article>

            <article className="experience_details">
              <FaAngular className="experience_details-icon"/>
              <div>
              <h4>Angular</h4>
              <small>Basico</small></div>
            </article>

            <article className="experience_details">
              <FaReact className="experience_details-icon"/>
              <div>
              <h4>ReactJS</h4>
              <small>Basico</small></div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Desarrollo Back-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiNodedotjs className="experience_details-icon"/>
              <div>
              <h4>NodeJS</h4>
              <small>Intermedio</small></div>
            </article>

            <article className="experience_details">
              <SiMysql className="experience_details-icon" />
              <div>
              <h4>MySQL</h4>
              <small>Intermedio</small></div>
            </article>

            <article className="experience_details">
              <SiMongodb className="experience_details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small>Basico</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPython className="experience_details-icon"/>
              <div>
              <h4>Python</h4>
              <small>Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <SiDjango className="experience_details-icon"/>
              <div>
              <h4>Django</h4>
              <small>Basico</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCsharp className="experience_details-icon"/>
              <div>
              <h4>C# .Net</h4>
              <small>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
