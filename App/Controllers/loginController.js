import { login } from "../Models/loginModel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";

export async function handleLoginClick(usuario, senha, navigate, setError) {
  try {
    if (usuario === "") {
      toast.info('Campo "Usuário" em branco!');
      toast.clearWaitingQueue();
    } else if (senha === "") {
      toast.info('Campo "Senha" em branco!');
      toast.clearWaitingQueue();
    } else {
      // Chama a função de login (Verificar dado de retorno)
      // const data = await login(usuario, senha);
      // console.log("Login bem-sucedido!", data);
      navigate("/home");
      toast.clearWaitingQueue();
    }
  } catch (error) {
    console.log("Erro na requisição", error);
    // Aqui você pode exibir uma mensagem de erro usando ToastManager
    toast.error("Erro na requisição: " + error.message);
    toast.clearWaitingQueue();
  }
}
