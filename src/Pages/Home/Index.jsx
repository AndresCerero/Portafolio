//Libreria de imagenes
import { useEffect, useState } from "react";

//img
import ImgPerfil from "../../Img/ImagendeHome.png";
import Blob1 from '../../Img/blob1.png';
import ImgPerfil2 from '../../Img/ImagendePerfil2.png';

//Components
import Items from "../../Components/Items/Index";
import Projectss from "../../Components/Projectss/Index";

//Layout
import Layout from "../../Layout/Index";

//Css
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsImg(window.innerWidth > 1200);
    };
    handleResize();
  }, []);

  return (
    <Layout>
      <div className="Home">
        <section className="Home__Perfil">
          {isImg ? (
            <div className="Home__Perfil__Imagenes">
              <img
                src={ImgPerfil}
                alt='ImgPerfil'
                className="Home__Perfil__Image"
              />
              <img
                src={Blob1}
                alt='Blob1 '
                className="Home__Perfil__Blob"
              />
            </div>
          ) : (
            <div className="Home__Perfil__Imagenes">
              <img
                src={ImgPerfil2}
                alt='ImgPerfil2'
                className="Home__Perfil__Image"
              />
              <img
                src={Blob1}
                alt='Blob1'
                className="Home__Perfil__Blob"
              />
            </div>
          )}
          <div className="Home__Perfil__Parrafo">
            <h2 className="Home__Perfil__Tittle">Andres Cerero</h2>
            <p className="Home__Perfil__Paragraph">
              Junior front-end developer con habilidades en HTML, CSS,
              JavaScript y React con conocimiento en diseño digital
            </p>
            <div className="Home__Perfil__Buttons">
              <Link
                to="perfil"
                className="Home__Perfil__Button Home__Perfil__Button--Margin"
              >
                <button>Perfil</button>
              </Link>
              <Link to="proyectos" className="Home__Perfil__Button">
                <button>Proyectos</button>
              </Link>
            </div>
          </div>
        </section>
        <div className="Home__Perfil__Projectss">
          <Projectss />
        </div>
        <div className="Home__Perfil__Items">
          <Items />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
