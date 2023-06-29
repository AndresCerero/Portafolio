import { NavLink } from "react-router-dom";

import Linkeind from "../../Img/Linkedin.svg";
import Github from "../../Img/Github.svg";

import "./Social.scss";

const Social = () => {
  return (
    <div className="Footer__Redes">
      <li className="Footer__Redes_link">
        <NavLink to='https://www.linkedin.com/in/andycega/' target="_blank">
          <img src={Linkeind} alt='Linkeind' />
        </NavLink>
      </li>
      <li className="Footer__Redes_link Footer__Redes_link--Margen">
        <NavLink to='https://github.com/AndresCerero' target="_blank">
          <img src={Github} alt='Github' />
        </NavLink>
      </li>
    </div>
  );
};

export default Social;
