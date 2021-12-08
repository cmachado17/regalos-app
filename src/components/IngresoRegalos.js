import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const IngresoRegalos = () => {
  return (
    <Fragment>
      <h2 className="titulo-borde">Ingresar regalos</h2>
      <Form className="formulario py-3 px-5 border-radius">
        <Form.Group>
          <Form.Label>Destinatario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el destinatario" />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Regalo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el regalo" />
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </Fragment>
  );
};

export default IngresoRegalos;
