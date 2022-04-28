
import Inicio  from "../pages/Inicio"


const routesUser= [
    {
      patch: "/inicio",   //La ruta
      component: Inicio,  //el contenedor prinicpal "pages"
    }
  ];


  const routes = [...routesUser]

  export default routes;