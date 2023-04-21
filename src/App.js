import React from "react";
import "./App.css";
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
    <div style={{ marginTop: "5%" }}>
      <h1 className="main_title">🎉 Party List 🗒️</h1>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
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
          </div>
        </Card>
        <Card>
          <h2>
            <span style={{ display: "inline-block", paddingRight: "10px" }}>
              📝
            </span>
            My guest list
            <span style={{ display: "inline-block", paddingLeft: "10px" }}>
              ✅
            </span>
          </h2>
          <ul>
            {usuarios.map((usuario) => (
              <li
                data-icon="🥳"
                key={usuario.email}
              >{`  ${usuario.name} ${usuario.lastname}: 📧  ${usuario.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
