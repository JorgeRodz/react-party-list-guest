import React from "react";
import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

const App = () => {
  // hooks
  const [usuarios, setUsuarios] = useState([]);
  const [dataForm, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  // handlers
  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, dataForm]);
    reset();
  };

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Nombre"
              name="name"
              onChange={handleChange}
              placeholder="nombre"
              type="text"
              value={dataForm.name}
            />
            <Input
              label="Apellido"
              name="lastname"
              onChange={handleChange}
              placeholder="apellido"
              type="text"
              value={dataForm.lastname}
            />
            <Input
              label="Correo"
              name="email"
              onChange={handleChange}
              placeholder="email"
              type="email"
              value={dataForm.email}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map((usuario) => (
            <li
              data-icon="🧑‍💻"
              key={usuario.email}
            >{`  ${usuario.name} ${usuario.lastname}: 📧  ${usuario.email}`}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default App;
