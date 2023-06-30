//Css
import "../../Vars_Design/_Reset.scss";
import "./App.scss";

//React Router Dom
import { BrowserRouter, useRoutes } from "react-router-dom";

//Page
import Home from "../Home/Index";
import Contacto from "../Contacto/Index";
import Perfil from "../Perfil/Index";
import Proyecto from "../Proyectos/Index";

//Components
import Navbar from "../../Components/Navbar/Index";
import Footer from "../../Components/Footer/Index";

//
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/contacto", element: <Contacto /> },
    { path: "/perfil", element: <Perfil /> },
    { path: "/proyectos", element: <Proyecto /> },
    { path: "/", element: <Home /> },
    { path: "/*", element: <Home /> },


    // Para Git hub pages
    // { path: "/Portafolio/", element: <Home /> },
    // { path: "/Portafolio/perfil", element: <Perfil />},
    // { path: "/Portafolio/proyectos", element: <Proyecto  />},
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
