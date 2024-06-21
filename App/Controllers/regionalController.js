import { toast } from "react-toastify";
import { getAllRegionais, postRegional } from "../Models/regionalModel";

export async function fetchRegionais() {
  try {
    const regionais = await getAllRegionais();
    return regionais;
  } catch (error) {
    console.error("Erro ao buscar regionais:", error);
    throw error;
  }
}

export async function createRegional(regional) {
  try {
    const regionais = await postRegional(regional);

    if(regionais.status === 200) {
      toast.success("Regional cadastrada com sucesso!");
    }
    else if(regionais.status === 404) {
      toast.error("Não foi possível cadastrar a regional");
    }
  } catch (error) {
    console.error("Erro ao buscar regionais:", error);
    throw error;
  }
}