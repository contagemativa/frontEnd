import { getAllRegionais } from "../Models/regionalModel";

export async function fetchRegionais() {
  try {
    const regionais = await getAllRegionais();
    return regionais;
  } catch (error) {
    console.error("Erro ao buscar regionais:", error);
    throw error;
  }
}
