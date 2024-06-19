import React from "react";

const DadosGerais = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Gerais dos Alunos
            </p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Nome do Aluno: *</span>
                </div>
                <input type="text" placeholder="Nome do Aluno" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Sexo: *</span>
                    <input type="radio" name="radio-1" className="radio" checked /><span>Masculino</span>
                    <input type="radio" name="radio-1" className="radio" /><span>feminino</span>
                </div>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Data de Nascimento: *</span>
                </div>
                <input type="text" placeholder="Data Nascimento" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Idade: *</span>
                </div>
                <input type="text" placeholder="Idade Aluno" className="input input-bordered w-full " />
            </label>

        </div>

    )
}

export default DadosGerais