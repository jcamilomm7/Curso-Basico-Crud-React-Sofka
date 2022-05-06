
import Usuarios from "../pages/Crud"



const routesUser= [
    {
      patch: "/",   //La ruta
      component: Usuarios,  //el contenedor prinicpal "pages"
    }
   
  ];


  const routes = [...routesUser]

  export default routes;