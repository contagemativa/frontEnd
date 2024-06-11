import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Background from "../Background/Background.jsx";

export default function MainFrame({...props}) {
    return (
        <>
            <Background>
                <Header/>
                    <article className="p-4 page-container min-h-screen">
                        {props.children}      
                    </article>
                <Footer/>
            </Background>
        </>
    );
}