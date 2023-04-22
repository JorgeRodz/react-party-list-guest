import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [dataForm, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(dataForm);
    reset();
  };

  console.log(dataForm);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        onChange={handleChange}
        placeholder="Nombre"
        type="text"
        value={dataForm.name}
      />
      <Input
        label="Apellido"
        name="lastname"
        onChange={handleChange}
        placeholder="Apellido"
        type="text"
        value={dataForm.lastname}
      />
      <Input
        label="Correo"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        type="email"
        value={dataForm.email}
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
