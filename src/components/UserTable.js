import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import imagenLogo from "../image/png/png-clipart-technology-machine-programmer-computer-software-industry-administrator-electronics-logo.png";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import { Alert } from "react-bootstrap";

export const UserTable = (props) => {
  let usuarios = props.usuarios;
  let listarUsuarios = props.listarUsuarios;
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: "",
    nombre: "",
    usuario: "",
  });
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });

  const seleccionarUsuario = (user, caso) => {
    setUsuarioSeleccionado(user);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Funcion para editar usuario
  const editar = () => {
    let usuarios = JSON.parse(localStorage.getItem("localUsuarios"));
    usuarios.map((element, index) => {
      if (element.id === usuarioSeleccionado.id) {
        usuarios[index] = usuarioSeleccionado;
      }
    });
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
    window.location.replace("");
    setModalEditar(false);
  };

  //Funcion para elimnar usuario
  const eliminar = () => {
    let usuarios = JSON.parse(localStorage.getItem("localUsuarios"));
    usuarios.map((element, index) => {
      if (element.id === usuarioSeleccionado.id) {
        usuarios.splice(index, index + 1);
      }
    });
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
    setShow(true);
    setAlert({ variant: "success", message: "Usuario Eliminado" });
    setTimeout(() => {
      window.location.replace("");
      setModalEditar(false);
    }, 3000);
  };

  return (
    <>
      {listarUsuarios ? (
        <div className="col-12  divtable">
          <Table
            className="table"
            responsive
            id="tableusers"
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length > 0 ? (
                usuarios.map((usuario, i) => (
                  <tr key={i}>
                    <td className="td">{usuario.nombre}</td>
                    <td className="td">{usuario.usuario}</td>
                    <td id="tdactualizar" className="td">
                      <button
                        id="btneditar"
                        onClick={() => seleccionarUsuario(usuario, "Editar")}
                      >
                        Editar
                      </button>
                      <button
                        id="btneliminar"
                        onClick={() => seleccionarUsuario(usuario, "Eliminar")}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No hay usuarios registrados</td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Modal para editar el usuario, le aparecera el modal con los datos del usuario a editar */}
          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar usuario</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>ID</label>
                <input
                  className="form-control"
                  name="id"
                  readOnly
                  type="text"
                  value={usuarioSeleccionado && usuarioSeleccionado.id}
                />
              </FormGroup>
              <FormGroup>
                <label>Nombre</label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Usuario</label>
                <input
                  className="form-control"
                  name="usuario"
                  type="text"
                  value={usuarioSeleccionado && usuarioSeleccionado.usuario}
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={editar} color="primary">
                Editar
              </Button>
              <Button
                onClick={() => {
                  setModalEditar(false);
                }}
                color="danger"
              >
                Salir
              </Button>
            </ModalFooter>
          </Modal>

          {/* Modal que se abre cuando le damos en eliminar y este le preguntara si de verdad desea eliminar a x usuario */}
          <Modal isOpen={modalEliminar}>
            <ModalHeader>
              <div>
                <h3>Estas seguro de Eliminar al usuario: </h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <h2 className="nombreeliminar">{usuarioSeleccionado.nombre}</h2>
              <img className="imgModal" src={imagenLogo} />
            </ModalBody>
            <div className="containermodaleliminar">
              <div className="row">
                <ModalFooter>
                  <div className="col-12">
                    <div className="col-12 message">{alert.message}</div>
                  </div>
                  <div className="col-12">
                    <button onClick={eliminar} className="btnmodaleliminar">
                      ELiminar
                    </button>
                  </div>
                  <div className="col-12">
                    <button
                      className="btnmodaleliminar"
                      onClick={() => {
                        setModalEliminar(false);
                      }}
                    >
                      Salir
                    </button>
                  </div>
                </ModalFooter>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
