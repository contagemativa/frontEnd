import React, { useContext } from 'react';
import { FormContext } from '../../Models/Class/alunoPrevioClass';
import axios from 'axios';

const FinalizaCadastroAluno = () => {
  const { aluno } = useContext(FormContext);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://sua-api-url.com/alunos', aluno);
      console.log(response.data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o aluno:', error);
      alert('Erro ao cadastrar o aluno. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Revise suas informações e clique em "Finalizar" para completar o cadastro.</h2>
      <button onClick={handleSubmit}>Finalizar</button>
    </div>
  );
};

export default FinalizaCadastroAluno;
