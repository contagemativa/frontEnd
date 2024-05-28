import config from '../config';

export async function login(usuario, senha) {
  const loginData = {
    username: usuario,
    password: senha,
  };

  const response = await fetch(`${config.apiUrl}/funcionario/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Erro no login');
  }
}
