import { useParams } from "react-router-dom";

//img
import img from "../../Img/ImagendePerfil2.png";
import img2 from "../../Img/blob4.png";

//Layout
import Layout from "../../Layout/Index";

//Componentes
import Social from "../../Components/Social/index";
import Proyectos from "../../Components/Projectss/Index";

//css
import "./Checkcontact.scss";

const Checkcontact = () => {
  const { email, name } = useParams();

  return (
    <Layout>
      <div className="Checkcontact">
        <div className="Checkcontact__Container">
          <div className="Checkcontact__Left">
            <div className="Checkcontact__Img">
              <img
                src={img}
                alt="Imagen responsive"
                className="Checkcontact__Imagen"
              />
              <img
                src={img2}
                alt="Imagen Blob"
                className="Checkcontact__Blob"
              />
            </div>
          </div>
          <div className="Checkcontact__Right">
            <p className="Checkcontact__boom">¡Boom!</p>
            <h2 className="Checkcontact__name">{name}</h2>
            <p className="Checkcontact__Parrafo">
              Tus datos han aterrizado en mi correo personal y han generado una
              explosión de entusiasmo en mí. Estoy ansioso por explorar todas
              las emocionantes posibilidades de crecimiento profesional que esta
              oportunidad ofrece
            </p>
            <p className="Checkcontact__Parrafo">
              Respodere directamente a este e-mail
            </p>
            <h2 className="Checkcontact__email">{email}</h2>
            <p className="Checkcontact__Parrafo">
              Tambien puedes contactarme por:
            </p>
            <div className="Checkcontact_Social">
              <Social />
            </div>
          </div>
        </div>
        <div className="Checkcontact_Proyectos">
          <Proyectos />
        </div>
      </div>
    </Layout>
  );
};

export default Checkcontact;
