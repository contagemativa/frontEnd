import { login } from '../Models/loginModel';

export async function handleLoginClick(usuario, senha, setError) {
  try {
    const data = await login(usuario, senha);
    console.log('Login bem-sucedido!', data);
  } catch (error) {
    console.log('Erro na requisição', error);
  }
}
