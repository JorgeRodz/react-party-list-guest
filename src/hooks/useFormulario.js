import { useState } from "react";

const useFormulario = (inicial) => {
  const [dataForm, setDataForm] = useState(inicial);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return [dataForm, handleChange];
};

export default useFormulario;
