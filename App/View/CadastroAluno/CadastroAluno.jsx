import React, { useEffect } from "react";
import config from "../../config.js";
import { FaUserCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
import FinalizaCadastroAluno from "../../Components/C_CadastroALuno/FinalizaCadastroAluno.jsx";

// Import Hooks
import useForm from "../../Hooks/useForm.jsx"

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
    <QuestionarioProntidao3 />,
    <FinalizaCadastroAluno />
];

export default function CadastroAluno() {
    const { currentStep, currentComponent, nextStep, prevStep } = useForm(formComponents);

    useEffect(() => {
        document.title = `${config.documentTitle} | Cadastro Aluno`;
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
                <div className="my-4"> 
                    <p className="grid text-3xl font-bold text-slate-700 justify-items-center">
                        Cadastro Aluno
                    </p>
                </div>
                <div className="flex justify-center gap-12 my-4">
                    <div className="flex justify-start h-fit p-4">
                        <ul className={`w-64 steps steps-vertical ${currentStep >= 14 ? 'step-accent' : ''}`}>
                            <li className={`step ${currentStep >= 0 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep  === 0 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Informações Gerais</li>
                            <li className={`step ${currentStep >= 1 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 1 && currentStep < 5 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Dados Gerais</li>
                            <li className={`step ${currentStep >= 5 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 5 && currentStep < 9 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Dados Físicos</li>
                            <li className={`step ${currentStep >= 9 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 9 && currentStep < 11 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Dados Socioeconômicos</li>
                            <li className={`step ${currentStep >= 11 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 11 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Questionário Prontidão</li>
                            <li className={`step ${currentStep >= 14 ? 'step-accent text-accent font-bold text-lg' : ''}`}>Finalizar</li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <FlowButtons />
                        <div className="card card-compact bg-base-100 drop-shadow-md h-fit">
                            <div className="p-6">
                                <div className="form-control my-4">  
                                    <form>
                                        {currentComponent}
                                    </form>                            
                                </div>
                                <div className="flex justify-end">
                                    <Button className="btn btn-primary justify-self-end text-white w-fit" buttonText="Confirmar" onClick={nextStep} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainFrame>
        </>
    );
}
