import React from "react";
import Body from "../../Components/Layout/Body/body.jsx";
import Header from "../../Components/Layout/Header/Header.jsx";
import Footer from "../../Components/Layout/Footer/footer.jsx";
import Background from "../../Components/Layout/Background/background.jsx";
import "../../Components/Layout/Background/background.css";
import "../../Components/Layout/Body/body.css";

export default function Home() {
  return (
    <>
      <Background className="background h-80 bg-primary">
        <Header />
        <article></article>
        <Footer />
      </Background>
    </>
  );
}
