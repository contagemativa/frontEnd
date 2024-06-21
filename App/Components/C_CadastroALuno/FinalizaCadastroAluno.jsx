import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos4 = () => {
  const { aluno } = useContext(AlunoContext);
  console.log(aluno);

  const handleConfirmarCadastro = () => {
    console.log("Dados do aluno a serem cadastrados:", aluno);
    alert("Cadastro do aluno confirmado!"); 
  };

  return (
    <div>
      <p className="grid text-2xl font-bold text-accent justify-items-left mb-2">Confirmar Cadastro</p>
        <div className="flex flex-col gap-2">
          <p className="grid justify-items-left italic">Nome: {aluno.pessoa.nome}</p>
          <p className="grid justify-items-left italic">Data de Nascimento: {aluno.pessoa.dataDeNascimento}</p>
          <p className="grid justify-items-left italic">Sexo: {aluno.pessoa.sexo}</p>
          <p className="grid justify-items-left italic">CPF: {aluno.pessoa.cpf}</p>
          <p className="grid justify-items-left italic">Endereço: {aluno.pessoa.endereco.rua}</p>
          <p className="grid justify-items-left italic">Bairro: {aluno.pessoa.endereco.bairro}</p>
        </div>
    </div>
  );
};

export default DadosFisicos4;
