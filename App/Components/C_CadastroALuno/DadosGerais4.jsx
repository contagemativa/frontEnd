import React from "react";

const DadosGerais4 = () => {
    return (
        <div>
            <p className="grid text-3xl font-bold text-pink-500 justify-items-center">
                Dados Gerais dos Alunos
            </p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Endereço: *</span>
                </div>
                <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full flex">
                <div className="flex gap-4 w-full flex-col-2">
                    <div className="flex flex-col w-1/2"> 
                        <div className="label">
                            <span className="label-text">N°: *</span>
                        </div>
                        <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="label">
                            <span className="label-text">Complemento: *</span>
                        </div>
                        <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full" />
                    </div>
                </div>
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">CEP: *</span>
                </div>
                <input type="text" placeholder="Data de Emissão" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">BAIRRO: *</span>
                </div>
                <input type="text" placeholder="CPF Aluno" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full flex">
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-1/2">
                        <div className="label">
                            <span className="label-text">Cidade: *</span>
                        </div>
                        <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="label">
                            <span className="label-text">Estado: *</span>
                        </div>
                        <input type="text" placeholder="RG do Aluno" className="input input-bordered w-full" />
                    </div>
                </div>
            </label>

        </div>

    )
}

export default DadosGerais4