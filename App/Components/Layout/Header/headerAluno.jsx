import React from "react"

export default function HeaderAluno() {
    return (

        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="text-xl">
                    <p className="text-white">Contagem Ativa</p>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle" >
                    Configuração
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        Voltar
                    </div>
                </button>
            </div>
        </div>

    );
}