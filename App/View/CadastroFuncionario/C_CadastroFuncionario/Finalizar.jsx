import React, { useContext } from "react";
import { FuncionarioContext } from "../../../Models/Class/funcionarioClass";
import Button from "../../../Components/Common/Button/Button";
import { cadastrarFuncionario } from "../../../Controllers/funcionarioController";
import { toast } from "react-toastify";

export default function Finalizar() {
  const { funcionario } = useContext(FuncionarioContext);

  const handleConfirmarCadastro = async (e) => {
    e.preventDefault();
    try {
      await cadastrarFuncionario(funcionario);
    } catch (erro) {
      toast.error("Erro ao cadastrar funcionário: " + erro.message);
    }
  };

  return (
    <div>
      <div>
        <p className="grid text-2xl font-bold text-accent justify-items-left mb-2">
          Confirmar Cadastro
        </p>
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <p className="font-medium">Nome:</p>
                <p className="italic">{funcionario.pessoa.nome}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">Data de Nascimento:</p>
                <p className="italic">{funcionario.pessoa.dataDeNascimento}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">Sexo:</p>
                <p className="italic">{funcionario.pessoa.Sexo}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">CPF:</p>
                <p className="italic">{funcionario.pessoa.cpf}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">Endereço:</p>
                <p className="italic">{funcionario.pessoa.endereco.rua}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">Bairro:</p>
                <p className="italic">{funcionario.pessoa.endereco.bairro}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-medium">Usuário:</p>
                <p className="italic">{funcionario.pessoa.usuario}</p>
            </div>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <Button
            className="btn btn-accent justify-self-end text-white w-fit"
            buttonText="Cadastrar Funcionario"
            onClick={handleConfirmarCadastro}
          />
        </div>
      </div>
    </div>
  );
};

