import React, { useContext } from 'react';
import { FormContext } from '../../../Models/Class/alunoPrevioClass';

const DadosGerais1 = () => {
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
      <h2>Dados Gerais do Aluno</h2>
      
      <label>
        Núcleo de Origem:
        <input
          type="text"
          name="nome"
          value={aluno.nucleoDeOrigem.nome}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Regional do Núcleo de Origem:
        <select
          name="regional"
          value={aluno.nucleoDeOrigem.regional.id} // Supondo que o valor selecionado seja o ID da regional
          onChange={handleChange}
        >
         
          <option value="">Selecione</option>
          {/* {regionais.map((regional) => (
            <option key={regional.id} value={regional.id}>
              {regional.nome}
            </option>
          ))} */}
        </select>
      </label>
      
      <label>
        Cadastrado Por:
        <input
          type="text"
          name="cadastradoPor"
          value={aluno.cadastradoPor}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default DadosGerais1;
