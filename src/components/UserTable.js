import { findAllByTestId } from "@testing-library/react";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

export const UserTable = (props) => {
  let usuarios = props.usuarios;
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: "",
    nombre: "",
    usuario: "",
  });

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

  const eliminar = () => {
    let usuarios = JSON.parse(localStorage.getItem("localUsuarios"));
    usuarios.map((element, index) => {
      if (element.id === usuarioSeleccionado.id) {
        usuarios.splice(index, index + 1);
      }
    });
    localStorage.setItem("localUsuarios", JSON.stringify(usuarios));
    window.location.replace("");
    setModalEditar(false);
  };

  return (
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

      <Modal isOpen={modalEliminar}>
        <ModalHeader>
          <div>
            <h3>Estas seguro de Eliminar el usuario</h3>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button onClick={eliminar} color="primary">
            ELiminar
          </Button>
          <Button
            onClick={() => {
              setModalEliminar(false);
            }}
            color="danger"
          >
            Salir
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
