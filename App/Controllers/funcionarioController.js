import { toast } from "react-toastify";
import { postEndereco } from "../Models/enderecoModel";
import { postFuncionario } from "../Models/funcionarioModel";
import { postPessoa } from "../Models/pessoaModel";

export async function cadastrarFuncionario(funcionario) {
  try {
    const enderecoResponse = await postEndereco(funcionario.pessoa.endereco);
    if (enderecoResponse !== null) {
      const pessoaResponse = await postPessoa(funcionario.pessoa, enderecoResponse.id);
      if (pessoaResponse !== null) {
        const funcionarioResponse = await postFuncionario(funcionario.id, pessoaResponse.id);
        if(funcionarioResponse.status !== null){
            toast.success("Funcionário finalizado com sucesso");
            return funcionarioResponse;
        } else {
            toast.error("Erro a finalizar cadastro funcionário");
            return;
        }
      } else {
        toast.error("Dados Gerais do funcionário");
        return;
      }
    } else {
      toast.error("Informações de endereço");
      return;
    }
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
