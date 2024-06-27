import config from '../config';

export async function postEndereco(endereco) {
  try {
    const response = await fetch(`${config.apiUrl}/endereco/cadastrar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: endereco.id,
        cep: endereco.cep,
        rua: endereco.rua,
        numero: endereco.numero,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        pais: endereco.pais
      }),
    });

    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      return null; 
    } else {
      throw new Error(`Erro ao cadastrar endereço: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao cadastrar endereço:', error);
    throw error;
  }
};
