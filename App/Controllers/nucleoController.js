import { toast } from "react-toastify";
import { getAllNucleos, postNucleo } from "../Models/nucleoModel";
import { postEndereco } from "../Models/enderecoModel";

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
    const enderecoResponse = await postEndereco(nucleo.endereco);
    if (enderecoResponse && enderecoResponse.id) {
      const nucleoResponse = await postNucleo(nucleo, enderecoResponse.id);
      if (nucleoResponse != null) {
        toast.success("Núcleo cadastrado com sucesso!");
      }
    }
  } catch (error) {
    console.error("Erro ao cadastrar núcleo:", error);
    throw error;
  }
}
