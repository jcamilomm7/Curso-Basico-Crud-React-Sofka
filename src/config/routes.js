
import Inicio  from "../pages/Crud"
import Registro from "../pages/Crud";


const routesUser= [
    {
      patch: "/",   //La ruta
      component: Inicio,  //el contenedor prinicpal "pages"
    }
   
  ];


  const routes = [...routesUser]

  export default routes;