import React from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";

const App = () => {
  const [dataForm, handleChange] = useFormulario({
    name: "",
    lastname: "",
  });

  console.log(dataForm);
  return (
    <form>
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
    </form>
  );
};

export default App;
