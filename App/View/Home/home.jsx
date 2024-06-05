import React from "react";
import Header from "../../Components/Layout/Header/Header.jsx";
import Background from "../../Components/Layout/Background/background.jsx";
import "../../Components/Layout/Background/background.css";

export default function Home() {
  return (
    <Background className="bg-primary text-base-100 h-82 oval">
      <div className="p-2">
        <Header />
      </div>
    </Background>
  );
}
