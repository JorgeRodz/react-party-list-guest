import React from "react";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  // handlers
  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  console.log(usuarios);
  return (
    <div style={{ marginTop: "5%" }}>
      <h1 className="main_title">🎉 Party List 🗒️</h1>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}></UserForm>
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
