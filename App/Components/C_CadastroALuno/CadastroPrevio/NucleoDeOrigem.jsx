import React, { useContext } from 'react';
import { FormContext } from '../../../Models/Class/alunoPrevioClass';

const NucleoDeOrigem = () => {
  const { aluno, setAluno } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      nucleoDeOrigem: {
        ...prev.nucleoDeOrigem,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h2>Núcleo e Regional Aluno</h2>

      <br />
      
      <label>
        Núcleo:
        <input
          type="text"
          name="endereco"
          value={aluno.nucleoDeOrigem.endereco}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Regional:
        <input
          type="text"
          name="regional"
          value={aluno.nucleoDeOrigem.regional.nome}
          onChange={handleChange}
        />
      </label>
      
    </div>
  );
};

export default NucleoDeOrigem;
