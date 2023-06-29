import Layout from "../../Layout/Index";

import PerfilSkill from "../../Components/PerfilSkill/Index";
import Projectss from "../../Components/Projectss/Index";

//Img
import FotoIncognita from "../../Img/ImagenFoto.png";

import "./Perfil.scss";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <Layout>
      <section className="Perfil">
        <section className="Perfil__Container">
          <section className="Perfil__First">
            <img
              src={FotoIncognita}
              alt="FotoIncognita"
              className="Perfil__Imagen"
            />
            <h2 className="Perfil__Tittle">Andres Cerero</h2>
            <p className="Perfil__Descripcion">
              Soy graduado en Tecnología de Producción Multimedia y actualmente
              curso Ingeniería Multimedia. Busco desarrollar mis habilidades en
              desarrollo web como trainee o junior front-end developer para
              aplicar mis habilidades en HTML, CSS, JavaScript y React, mientras
              aprendo de un equipo enfocado en productos digitales
            </p>
            <Link
              to="https://drive.google.com/file/d/1tbsuGwEKNLsvzY9sdTFl2yO1VSgHf5E_/view?usp=sharing"
              target="_blank"
              className="Perfil__Button"
            >
              <button>Descargar Curriculum</button>
            </Link>
          </section>
          <section className="Perfil__Second">
            <PerfilSkill
              title={"Development"}
              datos={[
                { name: "Html 5", size: 70 },
                { name: "CSS 3", size: 70 },
                { name: "JavaScript", size: 60 },
                { name: "Github", size: 60 },
                { name: "Sass", size: 70 },
                { name: "React", size: 60 },
              ]}
            />
            <PerfilSkill
              title={"Design "}
              datos={[
                { name: "Ilustrator", size: 70 },
                { name: "Photoshop", size: 70 },
                { name: "Figma", size: 70 },
              ]}
            />
            <PerfilSkill
              title={"Personal"}
              datos={[
                { name: "Design", size: 80 },
                { name: "Desarrollo", size: 60 },
                { name: "Teamwork", size: 70 },
                { name: "Leadership", size: 40 },
                { name: "Adaptabilidad", size: 80 },
                { name: "Comunicación", size: 70 },
              ]}
            />
          </section>
        </section>
        <Projectss />
      </section>
    </Layout>
  );
};

export default Perfil;
