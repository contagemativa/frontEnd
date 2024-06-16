import { getAllPessoas } from "../Models/pessoaModel";

export async function fetchPessoas() {
  try {
    const pessoas = await getAllPessoas();
    return pessoas;
  } catch (error) {
    console.error("Erro ao buscar pessoas:", error);
    throw error;
  }
}
