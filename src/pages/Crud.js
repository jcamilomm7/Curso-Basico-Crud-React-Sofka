import React, { useState, useEffect } from "react";
import { UserTable } from "../components/UserTable";
import { v4 as uuidv4 } from "uuid";
import FormRegistro from "../components/FormRegistro";
import logoSofka from "../image/png/logo-sofkau.webp";

const Crud = () => {
  //Estado que se utilizaran para  inicializar usuarios con un array vacio y luego irlo llenando
  const [usuarios, setUsuarios] = useState([]);

  //Estos estados es para controlar los button para saber si desplegar el formulario o la tabla usuarios
  const [contador, setContador] = useState(0);
  const [addUsuario, setAddUsuario] = useState(false);
  const [listarUsuarios, setListarUsuario] = useState(false);
  //Con useEffect siempre estamos buscando los usuarios que estan en el localstorage
  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("localUsuarios")));
  }, []);

  //Funcion para enviarla por props al componente hijo para recibir el parametro del usuario almacenar
  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4();
    usuarios.push(usuario);
    //Se le agrega el objeto usuario al array usuarios y se alamcena en localstorage
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 titulos">
          <h1>Verificacion de conocimiento</h1>
          <h2>Curso basico react</h2>
          <img src={logoSofka} />
        </div>

        {/* Formulario de registro */}
        <div className="col-md-6 divbtn">
          <button
            className="btn"
            id="add"
            onClick={() => {
              console.log(contador);
              if (contador === 0) {
                setAddUsuario(true);
                setContador(1);
              } else {
                setAddUsuario(false);
                setContador(0);
              }

              setListarUsuario(false);
            }}
          >
            Agregar usuario
          </button>
        </div>

        <div className="col-md-6 divbtn">
          <button
            className="btn"
            id="listar"
            onClick={() => {
              if (contador === 0) {
                setListarUsuario(true);
                setContador(1);
              } else {
                setListarUsuario(false);
                setContador(0);
              }

              setAddUsuario(false);
            }}
          >
            listar usuarios
          </button>
        </div>

        <div className="col-12">
          <FormRegistro
            addUsuario={addUsuario}
            agregarUsuario={agregarUsuario}
          />
        </div>

        {/* Listar usuarios */}
        <div className="col-12">
          <UserTable usuarios={usuarios} listarUsuarios={listarUsuarios} />
        </div>
      </div>
    </div>
  );
};

export default Crud;
