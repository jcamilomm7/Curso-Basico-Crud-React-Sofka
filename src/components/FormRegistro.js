import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormRegistro = (props) => {
  const addUsuario = props.addUsuario;
  const agregarUsuario = props.agregarUsuario;

  //Estados temporales donde se almacenan los datos, antes de armar el objeto a registrar
  const [nombretem, setNombretem] = useState("");
  const [usernametem, setUsernametem] = useState("");
  const [alert, setAlert] = useState({ variant: "success", message: "" });

  //Ir guardando el valor de cada input y asi poder guardar la informacion cuando se registre
  const handleNombre = (e) => {
    setNombretem(e.target.value);
  };
  const handleUsuario = (e) => {
    setUsernametem(e.target.value);
  };

  //Registrar persona
  const register = (e) => {
    e.preventDefault();
    const divAlerta = document.querySelector(".message");
    if (nombretem && usernametem) {
      const usuario = {
        id: 0,
        nombre: nombretem,
        usuario: usernametem,
      };
      agregarUsuario(usuario);
      setAlert({
        variant: "success",
        message: "usuario creado",
      });
      setTimeout(() => {
        const myForm = document.querySelector("#myform").reset();
        divAlerta.innerHTML = "";
      }, 3000);
      divAlerta.innerHTML = alert.message;
    } else {
      setAlert({
        variant: "success",
        message: "Debe ingresar todos los datos",
      });
      setTimeout(() => {
        divAlerta.innerHTML = "";
      }, 3000);
      divAlerta.innerHTML = alert.message;
    }
  };

  return (
    <>
      {addUsuario ? (
        <div className="containerRegadmin">
          <form id="myform" onSubmit={register}>
            <div className="row">
              <div className="col-12">
                <Form.Group className="mb-3 input" controlId="name">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    onChange={(e) => handleNombre(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group className="mb-3 input" controlId="username">
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Ingrese su usuario"
                    onChange={(e) => handleUsuario(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <div className="col-12 message">{alert.message}</div>
              </div>

              <div className="col-sm-12 col-md-12 registro">
                <Button
                  className="btnregistrar"
                  variant="primary"
                  type="submit"
                >
                  Registarse
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormRegistro;
