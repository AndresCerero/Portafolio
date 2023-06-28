import Barras from "../../Components/Barras/Index";

import './PerfilSkill.scss'

const PerfilSkill = (props) => {

  return (
    <div className="Perfil__Skills">
      <div className="Perfil__Skills__Content">
        <h3 className="Skills__Descripcion__Tittle">{props.title}</h3>
        <div className="Perfil__Skills__Descripcion">

          {
            props.datos.map((dato,index)=>(
              <Barras item={dato} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PerfilSkill;
