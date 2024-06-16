import { getAllNucleos } from "../Models/nucleoModel";

export async function fetchNucleos() {
  try {
    const nucleos = await getAllNucleos();
    return nucleos;
  } catch (error) {
    console.error("Erro ao buscar nucleos:", error);
    throw error;
  }
}
