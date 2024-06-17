import config from "../config";

export async function PostLogin(usuario, senha) {
  const loginData = {
    usuario: usuario,
    senha: senha,
  };

  const response = await fetch(`${config.apiUrl}/funcionario/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 200) {
    return response;
  } else if (response.status == 404) {
    return response;
  } else {
    throw new Error("Erro no login");
  }
}
