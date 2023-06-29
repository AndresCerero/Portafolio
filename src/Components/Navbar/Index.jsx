import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Social from "../Social/index.jsx";

//Img
import Logo from "../../Img/Logo.svg";
import Menu from "../../Img/Menu.svg";

import "./Navbar.scss";

const Navbar = () => {
  //La función useState toma un valor inicial para la variable de estado, que en este caso es window.innerWidth > 1200. Esto significa que isToggled se inicializará con true si el ancho de la ventana es mayor a 1200 píxeles, y false en caso contrario.
  const [isToggled, setIsToggled] = useState(window.innerWidth > 1200);

  useEffect(() => {
    // Manejo del evento de redimensionamiento de la ventana
    const handleResize = () => {
      // Actualizar el estado "isToggled" según el ancho de la ventana
      setIsToggled(window.innerWidth > 1200);
    };

    // Agregar event listener para el evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpiar event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleOn = () => {
    if (window.innerWidth > 1200) {
      setIsToggled(true);
    } else {
      setIsToggled(!isToggled);
    }
  };

  const handleToggleOff = () => {
    if (window.innerWidth > 1200) {
      setIsToggled(false);
    } else {
      setIsToggled(!isToggled);
    }
  };

  return (
    <nav className={`NavBar ${isToggled ? "isActive" : ""}`}>
      <ul className="NavBar_Container">
        <div className="NavBar_Left">
          <li className="NavBar_link Navbar_link--logo">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </li>
          <li className="NavBar_link Navbar_link--menu">
            <button onClick={handleToggleOff} className="Navbar_link--Button">
              <img src={Menu} alt="Menu" />
            </button>
          </li>
        </div>
        <div className={`NavBar_Middle ${isToggled ? "isActive" : ""}`}>
          <li className="NavBar_link NavBar_Middle_link">
            <NavLink to="/" onClick={handleToggleOn}>
              Home
            </NavLink>
          </li>
          <li className="NavBar_link NavBar_Middle_link">
            <NavLink to="perfil" onClick={handleToggleOn}>
              Perfil
            </NavLink>
          </li>
          <li className="NavBar_link NavBar_Middle_link">
            <NavLink to="proyectos" onClick={handleToggleOn}>
              Proyectos
            </NavLink>
          </li>
          <li className="NavBar_link NavBar_Middle_link NavBar_Middle--LineNone">
            <NavLink to="contacto" onClick={handleToggleOn}>
              Contacto
            </NavLink>
          </li>
        </div>
        <div className={`NavBar_Right ${isToggled ? "isActive" : ""}`}>
          <Social />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
