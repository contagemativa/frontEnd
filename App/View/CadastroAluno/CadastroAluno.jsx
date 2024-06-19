import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserBoxMobile from "../../Components/Common/Box/UserBoxMain.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import MainFrame from "../../Components/Layout/Main/Main.jsx";
import InformacoesGerais from "../../Components/C_CadastroALuno/InformacoesGerais.jsx";
import DadosGerais1 from "../../Components/C_CadastroALuno/DadosGerais1.jsx";
import DadosGerais2 from "../../Components/C_CadastroALuno/DadosGerais2.jsx";
import DadosGerais3 from "../../Components/C_CadastroALuno/DadosGerais3.jsx";
import DadosGerais4 from "../../Components/C_CadastroALuno/DadosGerais4.jsx";
import DadosFisicos1 from "../../Components/C_CadastroALuno/DadosFisicos1.jsx";
import DadosFisicos2 from "../../Components/C_CadastroALuno/DadosFisicos2.jsx";
import DadosFisicos3 from "../../Components/C_CadastroALuno/DadosFisicos3.jsx";
import DadosFisicos4 from "../../Components/C_CadastroALuno/DadosFisicos4.jsx";
import DadosSocioeconomicos from "../../Components/C_CadastroALuno/DadosSocioeconomicos.jsx";
import DadosSocioeconomicos2 from "../../Components/C_CadastroALuno/DadosSocioeconomicos2.jsx";
import QuestionarioProntidao from "../../Components/C_CadastroALuno/QuestionarioProntidao.jsx";
import QuestionarioProntidao2 from "../../Components/C_CadastroALuno/QuestionarioProntidao2.jsx";
import QuestionarioProntidao3 from "../../Components/C_CadastroALuno/QuestionarioProntidao3.jsx";

// Import Hooks
import useForm from "../../Hooks/useForm.jsx"

export default function CadastroAluno() {
    const formComponents = [
        <InformacoesGerais />,
        <DadosGerais1 />,
        <DadosGerais2 />,
        <DadosGerais3 />,
        <DadosGerais4 />,
        <DadosFisicos1 />,
        <DadosFisicos2 />,
        <DadosFisicos3 />,
        <DadosFisicos4 />,
        <DadosSocioeconomicos />,
        <DadosSocioeconomicos2 />,
        <QuestionarioProntidao />,
        <QuestionarioProntidao2 />,
        <QuestionarioProntidao3 />
    ];

    const { currentStep, currentComponent, nextStep, prevStep } = useForm(formComponents);

    return (
        <>
            <MainFrame>
                <div>
                    <p className="grid text-3xl font-bold text-slate-700 justify-items-center">
                        Cadastro Aluno
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center">
                        <ul className="steps steps-vertical">
                            <li className={`step ${currentStep >= 0 ? 'step-primary' : ''}`}>Informações Gerais</li>
                            <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}>Dados Gerais 1</li>
                            <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}>Dados Gerais 2</li>
                            <li className={`step ${currentStep >= 3 ? 'step-primary' : ''}`}>Dados Gerais 3</li>
                            <li className={`step ${currentStep >= 4 ? 'step-primary' : ''}`}>Dados Gerais 4</li>
                            <li className={`step ${currentStep >= 5 ? 'step-primary' : ''}`}>Dados Físicos 1</li>
                            <li className={`step ${currentStep >= 6 ? 'step-primary' : ''}`}>Dados Físicos 2</li>
                            <li className={`step ${currentStep >= 7 ? 'step-primary' : ''}`}>Dados Físicos 3</li>
                            <li className={`step ${currentStep >= 8 ? 'step-primary' : ''}`}>Dados Físicos 4</li>
                            <li className={`step ${currentStep >= 9 ? 'step-primary' : ''}`}>Dados Socioeconômicos</li>
                            <li className={`step ${currentStep >= 10 ? 'step-primary' : ''}`}>Dados Socioeconômicos 2</li>
                            <li className={`step ${currentStep >= 11 ? 'step-primary' : ''}`}>Questionário Prontidão</li>
                            <li className={`step ${currentStep >= 12 ? 'step-primary' : ''}`}>Questionário Prontidão 2</li>
                            <li className={`step ${currentStep >= 13 ? 'step-primary' : ''}`}>Questionário Prontidão 3</li>
                        </ul>
                    </div>
                    <div className="card card-compact w-full lg:w-1/4 bg-base-100 shadow-xl h-fit">
                        <div className="card-body">
                            <div className="form-control">
                                <form action="">
                                    {currentComponent}
                                </form>
                                <div className="flex p-5 justify-between">
                                    <Button className="btn btn-primary w-50" buttonText="Voltar" onClick={prevStep} />
                                    <Button className="btn btn-primary" buttonText="Continuar" onClick={nextStep} />
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </MainFrame>
        </>
    );
}
