import React from "react";
import Header from "../../Components/Layout/Header/Header.jsx";
import Footer from "../../Components/Layout/Footer/footer.jsx";
import Background from "../../Components/Layout/Background/background.jsx";
import "../../Components/Layout/Background/background.css";
import { FaUserCircle } from "react-icons/fa";
import User from "../../Components/Common/Box/userBox.jsx";
import Button from "../../Components/Common/Button/Button.jsx";
import { FaLocationDot } from "react-icons/fa6";
import Card from "../../Components/Common/Card/Card.jsx";

export default function Home() {
    return (
        <>
            <Background className="background h-72 bg-primary">
                <Header />
                <article className="p-4">
                    <div className="grid justify-items-center">
                        <div>
                            <div className="flex justify-center">
                                <FaUserCircle size={120} color="white" />
                            </div>
                            <div className="my-10">
                                <User visible={true}></User>
                            </div>
                        </div>
                    </div>
                    <h1 className="grid text-5xl font-bold justify-items-center">Configuração</h1>
                    <div className="grid justify-items-center">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <form action="POST" >
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Nome Completo:</span>
                                        </div>
                                        <input type="text" placeholder="Digite Seu Nome Completo" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Nome De Usuario:</span>
                                        </div>
                                        <input type="text" placeholder="Digite o Nome de Usuario" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Senha:</span>
                                        </div>
                                        <input type="password" placeholder="Digite Sua senha" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Confirma Senha:</span>
                                        </div>
                                        <input type="password" placeholder="Confirme a Senha Digitada" className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <Button className="btn btn-secondary" buttonText="Alterar"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
                <Footer />
            </Background>
        </>
    );
}
