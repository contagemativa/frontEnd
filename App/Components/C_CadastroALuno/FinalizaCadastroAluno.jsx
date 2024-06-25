import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";
import Button from "../Common/Button/Button";
import { cadastrarAluno } from "../../Controllers/alunoController"; // Corrigir o nome da função importada
import { toast } from "react-toastify";

const FinalizaCadastroAluno = () => {
  const { aluno } = useContext(AlunoContext);
  console.log(aluno);

  const handleConfirmarCadastro = async (e) => {
    e.preventDefault();
    try {
      console.log(aluno);
      await cadastrarAluno(aluno);
    } catch (erro) {
      toast.error("Erro ao cadastrar aluno: " + erro.message);
    }
  };

  return (
    <div>
      <div>
        <p className="grid text-2xl font-bold text-accent justify-items-left mb-2">
          Confirmar Cadastro
        </p>
        <div className="flex flex-col gap-2">
          <p className="grid justify-items-left italic">
            Nome: {aluno.pessoa.nome}
          </p>
          <p className="grid justify-items-left italic">
            Data de Nascimento: {aluno.pessoa.dataDeNascimento}
          </p>
          <p className="grid justify-items-left italic">
            Sexo: {aluno.pessoa.sexo}
          </p>
          <p className="grid justify-items-left italic">
            CPF: {aluno.pessoa.cpf}
          </p>
          <p className="grid justify-items-left italic">
            Endereço: {aluno.pessoa.endereco.rua}
          </p>
          <p className="grid justify-items-left italic">
            Bairro: {aluno.pessoa.endereco.bairro}
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <Button
            className="btn btn-accent justify-self-end text-white w-fit"
            buttonText="Cadastrar Aluno"
            onClick={handleConfirmarCadastro}
          />
        </div>
      </div>
    </div>
  );
};

export default FinalizaCadastroAluno;
