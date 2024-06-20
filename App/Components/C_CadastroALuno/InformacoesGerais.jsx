import React from "react";

const InformacoesGerais = () => {
    return (
        <div>
            <p className="grid text-xl font-bold text-pink-500 justify-items-center">
                Informações gerais
            </p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Núcleo de Execução: *</span>
                </div>
                <input type="text" placeholder="Núcleo" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Regional: *</span>
                </div>
                <input type="text" placeholder="Nome da Regional" className="input input-bordered w-full " />
            </label>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Professor Responsável: *</span>
                </div>
                <input type="text" placeholder="Nome do Professor" className="input input-bordered w-full " />
            </label>

        </div>

    )
}

export default InformacoesGerais