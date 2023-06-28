import imagen from "../../../public/Assets/Img";

import "./Contacto.scss";

import Layout from "../../Layout/Index";

const Contacto = () => {
  const { name, component } = imagen[7];

  return (
    <Layout>
      <section className="contacto">
        <section className="contacto__container">
          <article className="contacto__First">
            <div className="contacto__imagenes">
              <figure>
                <img
                  src={imagen[11].component}
                  alt={imagen[11].name}
                  className="contacto__imagenes__blob"
                />
              </figure>
              <figure>
                <img
                  src={component}
                  alt={name}
                  className="contacto__imagenes__imagen"
                />
              </figure>
            </div>
          </article>
          <article className="contacto__Second">
            <h2 className="contacto__Tittle">Contacto</h2>
            <div className="contacto__form">
              <form action="/" method="post">
                <div className="contacto__form_wrap">
                  <label className="contacto_form__name">Nombre</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    className="contacto_form__input"
                  />
                </div>
                <div className="contacto__form_wrap">
                  <label className="contacto_form__mensaje">
                    Deja tu mensaje
                  </label>
                  <textarea
                    type="text"
                    required
                    autoComplete="off"
                    className="contacto_form__textArea"
                  />
                </div>
                <button type="submit" className="Form__Button">
                  Contactar
                </button>
              </form>
            </div>
          </article>
        </section>
      </section>
    </Layout>
  );
};

export default Contacto;
