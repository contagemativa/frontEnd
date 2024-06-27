import React, { useEffect } from "react";
import config from "../../config.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../Components/Common/Button/Button.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import DadosGerais from "./C_CadastroFuncionario/DadosGerais.jsx";
import useForm from "../../Hooks/useForm.jsx"
import MediaQuery from "react-responsive";
import { FuncionarioProvider } from "../../Models/Class/funcionarioClass.js";
import Endereco from "./C_CadastroFuncionario/Endereco.jsx";
import UsuarioSenha from "./C_CadastroFuncionario/UsuarioSenha.jsx";
import Finalizar from "./C_CadastroFuncionario/Finalizar.jsx";

const formComponents = [
    <DadosGerais />,
    <Endereco/>,
    <UsuarioSenha/>,
    <Finalizar/>
];

export default function CadastroFuncionario() {
    const { currentStep, currentComponent, nextStep, prevStep } = useForm(formComponents);

    useEffect(() => {
        document.title = `${config.documentTitle} | Cadastro Funcionário`;
    }, []);

    const FlowButtons = () => {
        if (currentStep === 0) {
            return (
                <div className="grid grid-cols-1">
                    <Button className="btn btn-ghost hover:bg-primary justify-self-end text-primary hover:text-white w-fit" buttonText="Continuar" iconRight={<FaArrowRight />} onClick={nextStep} />
                </div>
            );
        } else if (currentStep > 0 && currentStep < formComponents.length - 1) {
            return (
                <div className="grid grid-cols-2">
                    <Button className="btn btn-ghost hover:bg-primary justify-self-start text-primary hover:text-white w-fit" buttonText="Voltar" iconLeft={<FaArrowLeft />} onClick={prevStep}/>
                    <Button className="btn btn-ghost hover:bg-primary justify-self-end text-primary hover:text-white w-fit" buttonText="Continuar" iconRight={<FaArrowRight />} onClick={nextStep} />
                </div>
            );
        } else {
            return (
                <div className="grid grid-cols-1">
                    <Button className="btn btn-ghost hover:bg-primary justify-self-start text-primary hover:text-white w-fit" buttonText="Voltar" iconLeft={<FaArrowLeft />} onClick={prevStep}/>
                </div>
            );
        }
    };

    return (
        <>
            <MainFrame>
                <FuncionarioProvider>
                    <div className="my-4"> 
                        <p className="grid text-3xl font-bold text-slate-700 justify-items-center">
                            Cadastro de Funcionário
                        </p>
                    </div>
                    <div className="flex justify-center gap-12 my-4">
                        <MediaQuery minWidth={800}>
                            <div className="flex justify-start h-fit p-4">
                                <ul className={`w-64 steps steps-vertical ${currentStep >= 3 ? 'step-accent' : ''}`}>
                                    <li className={`step ${currentStep >= 0 ? (currentStep >= 3 ? 'step-accent' : `step-primary ${currentStep === 0 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Dados Gerais</li>
                                    <li className={`step ${currentStep >= 1 ? (currentStep >= 3 ? 'step-accent' : `step-primary ${currentStep === 1 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Endereço</li>
                                    <li className={`step ${currentStep >= 2 ? (currentStep >= 3 ? 'step-accent' : `step-primary ${currentStep === 2 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Usuário e Senha</li>
                                    <li className={`step ${currentStep >= 3 ? (currentStep >= 3 ? 'step-accent' : `step-primary ${currentStep === 3 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Finalizar</li>
                                </ul>
                            </div>
                        </MediaQuery>      

                        <MediaQuery minWidth={800}>
                            <div className="w-1/2">
                                <FlowButtons />
                                <div className="card card-compact bg-base-100 drop-shadow-md h-fit">
                                    <div className="p-6">
                                        <div className="form-control my-4">  
                                            <form>
                                                {currentComponent}
                                            </form>                            
                                        </div>
                                        {currentStep < 3 ? 
                                            <div className="flex justify-end">
                                                <Button className="btn btn-primary justify-self-end text-white w-fit" buttonText="Confirmar" onClick={nextStep} />
                                            </div> :null
                                        }
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>   

                        <MediaQuery maxWidth={799}>
                            <div className="w-full">
                                <FlowButtons />
                                <div className="card card-compact bg-base-100 drop-shadow-md h-fit">
                                    <div className="p-6">
                                        <div className="form-control my-4">  
                                            <form>
                                                {currentComponent}
                                            </form>                            
                                        </div>
                                        {currentStep < 3 ? 
                                            <div className="flex justify-end">
                                                <Button className="btn btn-primary justify-self-end text-white w-fit" buttonText="Confirmar" onClick={nextStep} />
                                            </div> :null
                                        }
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                    </div>
                </FuncionarioProvider>
            </MainFrame>
        </>
    );
}
