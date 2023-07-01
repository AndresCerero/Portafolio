import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Img
import ContactoForm from "../../Img/ImagendeContactoForm.png";
import Blob2 from "../../Img/blob2.png";

import "./Contacto.scss";

import Layout from "../../Layout/Index";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contacto = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        resetForm();
        const encodedEmail = encodeURIComponent(email);
        const encodedName = encodeURIComponent(name);
        navigate(`/checkcontact/${encodedEmail}/${encodedName}`);
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <section className="contacto">
        <section className="contacto__container">
          <article className="contacto__First">
            <div className="contacto__imagenes">
              <figure>
                <img
                  src={Blob2}
                  alt="Blob2"
                  className="contacto__imagenes__blob"
                />
              </figure>
              <figure>
                <img
                  src={ContactoForm}
                  alt="ContactoForm"
                  className="contacto__imagenes__imagen"
                />
              </figure>
            </div>
          </article>

          {/* _______________________________________________ */}

          <article className="contacto__Second">
            <h2 className="contacto__Tittle">Contacto</h2>
            <div className="contacto__form">
              <form
                // name="contact"
                // action="/pages/success"
                // method="POST"
                // data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="contacto__form_wrap">
                  <label className="contacto_form__name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="contacto_form__input"
                  />
                </div>

                <div className="contacto__form_wrap">
                  <label className="contacto_form__name">Correo</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="contacto_form__input"
                  />
                </div>

                <div className="contacto__form_wrap">
                  <label className="contacto_form__mensaje">
                    Deja tu mensaje :
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="contacto_form__textArea"
                  />
                </div>
                {/* <div data-netlify-recaptcha="true"></div> */}
                <button type="submit" className="Form__Button">
                  Contactar
                </button>
              </form>
            </div>
          </article>

          {/* ________________________________________ */}
        </section>
      </section>
    </Layout>
  );
};

export default Contacto;
