//Datos
import Data from "../../Data/Data";

//Componentes
import Proyectcard from "../Proyectcard";

//import
import "./projectss.scss";

const Projectss = () => {
  return (
    <section className="Projectss">
      <h2 className="Projectss__Tittle">Proyectos</h2>
      <div className="Projects__Slider">
        {Data.map((project, index) => (
            <Proyectcard img={project.imagen} enlace={project.enlace} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projectss;
