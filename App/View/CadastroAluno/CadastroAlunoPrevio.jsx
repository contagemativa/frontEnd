import React, { useEffect } from 'react';
import config from '../../config.js';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../../Components/Common/Button/Button.jsx';
import MainFrame from '../../Components/Layout/Main/Main.jsx';
import InformacoesGerais from '../../Components/C_CadastroALuno/CadastroPrevio/InformacoesGErais.jsx';
import DadosGerais1 from '../../Components/C_CadastroALuno/CadastroPrevio/DadosGerais1.jsx';
import Endereco from '../../Components/C_CadastroALuno/CadastroPrevio/Endereco.jsx';
import NucleoDeOrigem from '../../Components/C_CadastroALuno/CadastroPrevio/NucleoDeOrigem.jsx';
import FinalizaCadastroAluno from '../../Controllers/CadastroPrevio/finalizaCadastroAlunoController.js';
import useForm from '../../Hooks/useForm.jsx';
import { FormContext, FormProvider } from '../../Models/Class/alunoPrevioClass.js';

const formComponents = [
    <InformacoesGerais />,
    <DadosGerais1 />,
    <Endereco />,
    <NucleoDeOrigem />,
    <FinalizaCadastroAluno />
];

export default function CadastroAlunoPrevio() {
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
      <FormProvider>
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
                <li className={`step ${currentStep >= 5 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 5 && currentStep < 9 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Endereço</li>
                <li className={`step ${currentStep >= 9 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 9 && currentStep < 13 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Núcleo de Origem</li>
                <li className={`step ${currentStep >= 13 ? (currentStep >= 14 ? 'step-accent' : `step-primary ${currentStep >= 13 && currentStep < 17 ? 'text-lg font-bold text-primary' : ''}`) : ''}`}>Regional</li>
                <li className={`step ${currentStep >= 17 ? 'step-accent' : ''}`}>Finalização</li>
              </ul>
            </div>
            <div className="flex-grow p-4">
              {currentComponent}
              <FlowButtons />
            </div>
          </div>
        </MainFrame>
      </FormProvider>
    );
  }