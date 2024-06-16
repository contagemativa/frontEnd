import { getAllAlunos } from "../Models/alunoModel";

export async function fetchAlunos() {
  try {
    const alunos = await getAllAlunos();
    return alunos;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    throw error;
  }
}
