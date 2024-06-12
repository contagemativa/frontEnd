import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Background from "../Background/Background.jsx";
import MediaQuery from 'react-responsive'
import UserBoxMobile from "../../Common/Box/UserBoxMobile.jsx";

export default function MainFrame({...props}) {
    return (
        <>
            <Background>
                <Header/>
                    <article className="p-4 page-container min-h-screen mb-5">
                        <MediaQuery maxWidth={1024}>
                            <UserBoxMobile/>
                        </MediaQuery>
                        {props.children}      
                    </article>
                <Footer/>
            </Background>
        </>
    );
}