import config from '../config';

export async function login(usuario, senha) {
  const loginData = {
    username: usuario,
    password: senha,
  };

  console.log(config.apiUrl);

  const response = await fetch('/funcionario/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Erro no login');
  }
}
