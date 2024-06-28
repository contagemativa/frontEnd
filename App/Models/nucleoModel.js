import config from "../config";

export async function getAllNucleos() {
    const response = await fetch(`${config.apiUrl}/nucleo`, {
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
  
  export async function postNucleo(nucleo, enderecoId) {
    console.log(enderecoId)
    try {
      const response = await fetch(`${config.apiUrl}/nucleo/cadastrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": nucleo.id,
          "nome": nucleo.nome,
          "endereco": enderecoId,
          "regional": nucleo.regional
        }),
      });
  
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return []; 
      } else {
        throw new Error(`Erro ao cadastrar núcleo: ${response.statusText}`);
      }
  
    } catch (error) {
      console.error('Erro ao cadastrar núcleo:', error);
      throw error;
    }
  };
  