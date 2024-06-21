import React, { useContext } from "react";
import { AlunoContext } from "../../Models/Class/alunoClass";

const DadosFisicos4 = () => {
  const { aluno } = useContext(AlunoContext);
  console.log(aluno);

  const handleConfirmarCadastro = () => {
    // Aqui você pode chamar um controller para cadastro do aluno
    // Exemplo simplificado de como poderia ser:
    console.log("Dados do aluno a serem cadastrados:", aluno);
    alert("Cadastro do aluno confirmado!"); // Exemplo de alerta, substitua por sua lógica real
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleConfirmarCadastro}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Confirmar Cadastro
      </button>
    </div>
  );
};

export default DadosFisicos4;
