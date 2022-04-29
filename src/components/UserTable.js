import React from "react";
import Table from "react-bootstrap/Table";

export const UserTable = (props) => {
  const usuarios = props.usuarios;
  console.log(usuarios)
  return (
    <div className="col-12  divtable">
      <Table className="table" responsive id="tableusers" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              usuarios.length > 0 ?
          usuarios.map((usuario,i) => (
            <tr key={i}>
              <td className="td">{usuario.id}</td>
              <td className="td">{usuario.nombre}</td>
              <td className="td">{usuario.usuario}</td>
              <td id="tdactualizar" className="td">
                <button  id="btneditar">Editar</button>
                <button  id="btneliminar">Eliminar</button>
              </td>
            </tr>
          )) : (
              <tr>
                 <td colSpan={3}>No hay usuarios registrados</td> 
              </tr>
          )
        
        }
        </tbody>
      </Table>
    </div>
  );
};
