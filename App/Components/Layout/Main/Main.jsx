import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/footer.jsx";
import Background from "../Background/background.jsx";
import "../Background/background.css";

export default function MainFrame({...props}) {
    return (
        <>
            <Background className="background h-64 bg-primary lg:bg-transparent">
                <Header className="bg-primary"/>
                    <article className="p-4 page-container mb-40">
                        {props.children}        
                    </article>
                <Footer />
            </Background>
        </>
    );
}