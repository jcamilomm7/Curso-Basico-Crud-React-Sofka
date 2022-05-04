import React, { useState ,useEffect} from "react";
import { UserTable } from "../components/UserTable";
import { v4 as uuidv4 } from "uuid";
import FormRegistro from "../components/FormRegistro";
const Crud = () => {
  //State
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("localUsuarios")))
  }, []);

 
  const [addUsuario, setAddUsuario] = useState(false);

  //Agregar usuarios
  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4();
    /*     setUsuarios(usuarios) */
   usuarios.push(usuario);
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
  };

  return (
    <div className="contaiiner">
      <div className="row">
        <div className="col-md-12">
          <h1>CRUD App with hooks</h1>
        </div>
        <div className="col-md-6">
          <button
            id="add"
            onClick={() => {
              setAddUsuario(true);
            }}
          >
            Add user
          </button>
          <FormRegistro
            addUsuario={addUsuario}
            agregarUsuario={agregarUsuario}
          />
        </div>
        <div className="col-md-6">
          <h1>View user</h1>
          <div className="containertable">
            <div className="row"></div>{" "}
            {/* Desde aca viene la tabla dinamica de usuarios */}
            <UserTable usuarios={usuarios} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
