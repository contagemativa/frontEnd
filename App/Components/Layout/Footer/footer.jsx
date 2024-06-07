import React from "react"
import Logo from "../../Common/Logo/Logo.jsx"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(...props) {
    return (
    <footer className="footer footer-center lg:footer-left p-10 bg-gray-200 text-primary">
        <aside>
            <Logo width={150} />
            <b><p>Contagem Ativa<br/>Secretaria Municipal de Esportes e Lazer</p></b>
        </aside> 
        <nav>
            <h6 className="footer-title">Social</h6> 
            <div className="grid justify-items-center gap-4">
                <a href="https://portal.contagem.mg.gov.br/">https://portal.contagem.mg.gov.br/</a>
                <div className="flex gap-2">
                    <FaFacebookSquare size={30} href="https://www.facebook.com/groups/movimentacontagem/?locale=pt_BR"/>
                    <FaInstagram size={30} href="https://www.instagram.com/contagemativa/"/>
                </div>
            </div>
        </nav>
    </footer>
    );
}
