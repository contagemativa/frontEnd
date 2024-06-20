import React, { useContext } from 'react';
import { FormContext } from '../../../Models/Class/alunoPrevioClass';

const Endereco = () => {
  const { aluno, setAluno } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      pessoa: {
        ...prev.pessoa,
        endereco: {
          ...prev.pessoa.endereco,
          [name]: value,
        },
      },
    }));
  };

  return (
    <div>
      <h2>Endereço do Aluno</h2>
      
      <label>
        CEP:
        <input
          type="text"
          name="cep"
          value={aluno.pessoa.endereco.cep}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Rua:
        <input
          type="text"
          name="rua"
          value={aluno.pessoa.endereco.rua}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Número:
        <input
          type="number"
          name="numero"
          value={aluno.pessoa.endereco.numero}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Complemento:
        <input
          type="text"
          name="complemento"
          value={aluno.pessoa.endereco.complemento}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Bairro:
        <input
          type="text"
          name="bairro"
          value={aluno.pessoa.endereco.bairro}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Cidade:
        <input
          type="text"
          name="cidade"
          value={aluno.pessoa.endereco.cidade}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        Estado:
        <input
          type="text"
          name="estado"
          value={aluno.pessoa.endereco.estado}
          onChange={handleChange}
        />
      </label>
      
      <br />
      
      <label>
        País:
        <input
          type="text"
          name="pais"
          value={aluno.pessoa.endereco.pais}
          onChange={handleChange}
        />
      </label>
      
    </div>
  );
};

export default Endereco;
