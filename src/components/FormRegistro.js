import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormRegistro = (props) => {
  const addUsuario = props.addUsuario;
  const agregarUsuario = props.agregarUsuario;


  //Estados temporales donde se alamcenan los datos, antes de armar el objeto a registrar
  const [nombretem, setNombretem] = useState("");
  const [usernametem, setUsernametem] = useState("");

  //Almacenar datos
  const handleNombre = (e) => {
    setNombretem(e.target.value);
  };
  const handleUsuario = (e) => {
    setUsernametem(e.target.value);
  };

  //Registrar persona
  const register = (e) => {
    e.preventDefault();
    const usuario = {
      id: 0,
      nombre: nombretem,
      usuario: usernametem,
    };
    agregarUsuario(usuario);
  };

  //Limipar formulario
  const limpiar = () => {
    const myForm = document.querySelector("#myform").reset();
  };

  return (
    <div className="containerRegadmin">
      <form id="myform" onClick={limpiar} onSubmit={register}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingrese su nombre"
                onChange={(e) => handleNombre(e)}
              />
            </Form.Group>
          </div>
          <div className="col-sm-12 col-md-6">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Ingrese su usuario"
                onChange={(e) => handleUsuario(e)}
              />
            </Form.Group>
          </div>

          <div className="col-sm-12 col-md-12 registro">
            <Button className="btn" variant="primary" type="submit">
              Registarse
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegistro;
