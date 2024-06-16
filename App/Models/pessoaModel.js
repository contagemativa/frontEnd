import config from "../config";

export async function getAllPessoas() {
    const response = await fetch(`${config.apiUrl}/pessoa`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.json();
    } else if (response.status == 404) {
      return [];
    } else {
      throw new Error("Erro ao buscar alunos");
    }
  }