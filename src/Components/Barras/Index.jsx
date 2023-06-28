import "./Barra.scss";

const Barras = (props) => {

  // destructuracion
  const {name,size} = props.item;

  const ancho = `${size}%`;


  return (
    <div className="Skills__Descripcion__Container">
      <div className="Skills__Descripcion__Barra">
        <span></span>
        <span className="Skills__Barra--front" style={{width:ancho}}></span>
      </div>
      <p className="Skills__Descripcion__Parrafo">{name}</p>
    </div>
  );
};

export default Barras;
