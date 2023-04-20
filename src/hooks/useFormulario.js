import { useState } from "react";

const useFormulario = (inicial) => {
  const [dataForm, setDataForm] = useState(inicial);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setDataForm(inicial);
  };

  return [dataForm, handleChange, reset];
};

export default useFormulario;
