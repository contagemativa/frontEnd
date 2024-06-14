import React from "react";

const DadosGerais3 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Gerais dos Alunos
            </p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">RG: *</span>
                </div>
                <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Orgão Expedidor: *</span>
                </div>
                <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Data de Emissão: *</span>
                </div>
                <input type="text" placeholder="Data de Emissão" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">CPF: *</span>
                </div>
                <input type="text" placeholder="CPF Aluno" className="input input-bordered w-full " />
            </label>

        </div>

    )
}

export default DadosGerais3