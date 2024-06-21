import config from '../config';

export async function postEndereco(endereco) {
  try {
    const response = await fetch(`${config.apiUrl}/endereco/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ endereco }),
    });

    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      return null; // Pode ser um valor apropriado para indicar que nada foi encontrado.
    } else {
      throw new Error(`Erro ao cadastrar endereço: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao cadastrar endereço:', error);
    throw error;
  }
};
