import { useState } from "react";

//CSS
import "./Proyectos.scss";

//Datos
import projects from "../../Data/Data.jsx";
import imagenes from "../../../public/Assets/Img";

//Componentes
import Layout from "../../Layout/Index";
import ProyectCard from "../../Components/Proyectcard/index";
import Items from "../../Components/Items/Index";

const Proyecto = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <Layout>
      <section className="Proyectos">
        <div className="Proyectos__Flex__Desktop">
          <div className="Proyectos__Container__First">
            <div className="Proyectos__Imagenes">
              <img
                src={imagenes[12].component}
                alt={imagenes[12].name}
                className="Proyectos__Imagenes__Person"
              ></img>
              <img
                src={imagenes[14].component}
                alt={imagenes[14].name}
                className="Proyectos__Imagenes__Blob"
              ></img>
            </div>
          </div>
          <div className="Proyectos__Container__Second">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`Proyectos_Container ${
                  currentSlide === index ? "active" : ""
                }`}
              >
                <div className="Proyectos__First">
                  <ProyectCard img={project.imagen} enlace={project.enlace} />
                </div>
                <div className="Proyectos__Second">
                  <h3 className="Proyecto__Container_Tittle">{project.name}</h3>
                  <p className="Proyecto__Container_Parrafo">
                    {project.descripcion}
                  </p>
                  <div className="Proyecto__Tecnologias">
                    {project.tecnologias.map((item, index) => (
                      <figure key={index} className="Proyecto__Tecnologia">
                        <img src={item} alt="#" />
                      </figure>
                    ))}
                  </div>
                  <div className="Proyectos__controls">
                    <button
                      className="Proyectos__controls__Button"
                      onClick={goToPreviousSlide}
                    >
                      <img src={imagenes[8].component} />
                    </button>
                    <button
                      className="Proyectos__controls__Button"
                      onClick={goToNextSlide}
                    >
                      <img src={imagenes[9].component} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Items />
      </section>
    </Layout>
  );
};

export default Proyecto;
