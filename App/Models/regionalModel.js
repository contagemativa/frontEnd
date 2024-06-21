import config from "../config";

export async function getAllRegionais() {
    const response = await fetch(`${config.apiUrl}/regional`, {
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

  export async function postRegional(regional) {
    try {
      const response = await fetch(`${config.apiUrl}/regional/cadastrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regional),
      });
  
      if (response.status === 200) {
        return response;
      } else if (response.status === 404) {
        return []; 
      } else {
        throw new Error(`Erro ao cadastrar regional: ${response.statusText}`);
      }
  
    } catch (error) {
      console.error('Erro ao cadastrar regional:', error);
      throw error;
    }
  };
  