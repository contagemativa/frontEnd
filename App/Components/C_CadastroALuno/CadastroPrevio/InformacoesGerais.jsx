import React, { useContext } from 'react';
import { FormContext } from '../../../Models/Class/alunoPrevioClass';

const InformacoesGerais = () => {
  const { aluno, setAluno } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      pessoa: {
        ...prev.pessoa,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h2>Informações Gerais do Aluno</h2>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={aluno.pessoa.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          value={aluno.pessoa.cpf}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Naturalidade:
        <input
          type="text"
          name="naturalidade"
          value={aluno.pessoa.naturalidade}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Data de Nascimento:
        <input
          type="date"
          name="dataDeNascimento"
          value={aluno.pessoa.dataDeNascimento}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sexo:
        <select
          name="sexo"
          value={aluno.pessoa.sexo}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </label>
      <br />
      <label>
        Cor/Raça:
        <select
          name="corRaca"
          value={aluno.pessoa.corRaca}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="Branca">Branca</option>
          <option value="Preta">Preta</option>
          <option value="Parda">Parda</option>
          <option value="Amarela">Amarela</option>
          <option value="Indígena">Indígena</option>
          <option value="Outra">Outra</option>
        </select>
      </label>
      <br />
      <label>
        Usuário:
        <input
          type="text"
          name="usuario"
          value={aluno.pessoa.usuario}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={aluno.pessoa.senha}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Tamanho da Camisa:
        <input
          type="text"
          name="tamanhoCamisa"
          value={aluno.tamanhoCamisa}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default InformacoesGerais;
