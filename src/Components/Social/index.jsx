import { NavLink } from "react-router-dom";
import Img from "../../../public/Assets/Img";

import "./Social.scss";

const Social = () => {
  return (
    <div className="Footer__Redes">
      <li className="Footer__Redes_link">
        <NavLink to='https://www.linkedin.com/in/andycega/' target="_blank">
          <img src={Img[4].component} alt={Img[4].name} />
        </NavLink>
      </li>
      <li className="Footer__Redes_link Footer__Redes_link--Margen">
        <NavLink to='https://github.com/AndresCerero' target="_blank">
          <img src={Img[5].component} alt={Img[5].name} />
        </NavLink>
      </li>
    </div>
  );
};

export default Social;
