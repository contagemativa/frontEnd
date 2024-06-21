import { getAllNucleos, postNucleo } from "../Models/nucleoModel";

export async function fetchNucleos() {
  try {
    const nucleos = await getAllNucleos();
    return nucleos; 
  } catch (error) {
    console.error("Erro ao buscar nucleos:", error);
    throw error;
  }
}

export async function createNucleo(nucleo) {
  try {
    const response = await postNucleo(nucleo);

    if (response.status === 200) {
      toast.success("Núcleo cadastrado com sucesso!");
    } else if (response.status === 404) {
      toast.error("Não foi possível cadastrar o núcleo.");
    }
  } catch (error) {
    console.error("Erro ao cadastrar núcleo:", error);
    throw error;
  }
}