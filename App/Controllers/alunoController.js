import { toast } from "react-toastify";
import { getAllAlunos, postAluno } from "../Models/alunoModel";

export async function fetchAlunos() {
  try {
    const alunos = await getAllAlunos();
    return alunos;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    throw error;
  }
}

export async function cadastrarAluno(aluno){
  try{
    const result = await postAluno(aluno);
    if(result.status === 200){
      toast.success(`Cadastro do aluno confirmado!`);
    }
    else if(result.status === 404){
      toast.error("Algum erro aconteceu ao cadastrar aluno, tente novamente!");
    }

  } catch (error) {
    console.error("Erro ao Cadastrar Aluno:", error);
    throw error;
  }
}